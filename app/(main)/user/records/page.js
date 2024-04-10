"use client";
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import moment from 'moment';
import {  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import RecordSkeleton from '@/app/components/skeleton/record';

const UserRecords = () => {
  const [userHealthRecords, setUserHealthRecords] = useState([]);
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        if (session && session.user && session.user.id) {
          const userId = session.user.id;
          const response = await axios.post("/api/records/findrecords", { userId });
          setUserHealthRecords(response.data.map(record => ({
            ...record,
            visitDate: moment(record.createdAt).format('DD/MM/YY') // Extract visit date from created date
          })));
        } else {
          console.log("User session or ID not available");
        }
      } catch (error) {
        console.error("Error fetching records:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecords();
  }, [session]);

  const handleRowClick = (record) => {
    setSelectedRecord(record);
    onOpen();
  };

  return (
    <>
      {isLoading ? (
        <div className='mt-10'>
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
          <RecordSkeleton />
        </div>
      ) : (
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
            isLoading={isLoading}
            loadingContent={<Spinner label="Loading..." />}>
            {userHealthRecords.map(record => (
              <TableRow key={record._id} onClick={() => handleRowClick(record)}>
                <TableCell>{record.doctorId}</TableCell>
                <TableCell>{record.visitDate}</TableCell>
                <TableCell>{record.diagnosis}</TableCell>
                <TableCell>{record.prescription}</TableCell>
                <TableCell>{record.status}</TableCell>
                <TableCell>{record.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
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
                  <div>
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
                  </div>
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
};

export default UserRecords;