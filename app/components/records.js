"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useSearchParams } from 'next/navigation';
import { Card, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function UserRecords() {
  const searchParam = useSearchParams();
  const id = searchParam.get('id');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [userHealthRecords, setUserHealthRecords] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchRecords = async () => {
        setIsLoading(true);
        try {
          const response = await axios.post("/api/records/userrecords", { id });
          setUserHealthRecords(response.data.map(record => ({
            ...record,
            visitDate: moment(record.createdAt).format('DD/MM/YY') // Extract visit date from created date
          })));
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching records:", error);
          setIsLoading(false);
        }
      };
      fetchRecords();
    }
  }, [id]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRowClick = (record) => {
    setSelectedRecord(record);
    setModalOpen(true);
    onOpen();
  };

  return (
    <>
      <Table
        aria-label="User health records table"
        css={{
          "&.table": {
            minHeight: "400px",
          },
        }}
      >
        <TableHeader>
          <TableColumn key="doctorId" allowsSorting aria-sort="none">
            Doctor ID
          </TableColumn>
          <TableColumn key="visitDate" allowsSorting aria-sort="none">
            Visit Date
          </TableColumn>
          <TableColumn key="diagnosis" allowsSorting aria-sort="none">
            Diagnosis
          </TableColumn>
          <TableColumn key="prescription" allowsSorting aria-sort="none">
            Prescription
          </TableColumn>
          <TableColumn key="status" allowsSorting aria-sort="none">
            Status
          </TableColumn>
          <TableColumn key="notes" allowsSorting aria-sort="none">
            Notes
          </TableColumn>
        </TableHeader>
        <TableBody
          items={userHealthRecords}
          isLoading={isLoading}
          loadingComponent={<Spinner label="Loading records..." />}
        >
          {(item) => (
            <TableRow key={item._id} onClick={() => handleRowClick(item)}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {selectedRecord && (
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onClose}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
          }}
        >
          <ModalContent>
            {(onCloseModal) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Health Record Details</ModalHeader>
                <ModalBody>
                  <Card>
                    <div className="mb-4">
                      <label htmlFor="doctorId" className="block text-gray-700 font-bold mb-2">
                        Doctor ID:
                      </label>
                      <p id="doctorId" className="text-gray-900">
                        {selectedRecord.doctorId}
                      </p>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="visitDate" className="block text-gray-700 font-bold mb-2">
                        Visit Date:
                      </label>
                      <p id="visitDate" className="text-gray-900">
                        {selectedRecord.visitDate}
                      </p>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="diagnosis" className="block text-gray-700 font-bold mb-2">
                        Diagnosis:
                      </label>
                      <p id="diagnosis" className="text-gray-900">
                        {selectedRecord.diagnosis}
                      </p>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="prescription" className="block text-gray-700 font-bold mb-2">
                        Prescription:
                      </label>
                      <p id="prescription" className="text-gray-900">
                        {selectedRecord.prescription}
                      </p>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
                        Status:
                      </label>
                      <p id="status" className="text-gray-900">
                        {selectedRecord.status}
                      </p>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="notes" className="block text-gray-700 font-bold mb-2">
                        Notes:
                      </label>
                      <p id="notes" className="text-gray-900">
                        {selectedRecord.notes}
                      </p>
                    </div>
                  </Card>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onClick={onCloseModal}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}