"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import {IdentificationIcon ,UserGroupIcon, UserIcon, CakeIcon,ClipboardListIcon } from '@heroicons/react/solid';
import { GiBodyHeight } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { useSearchParams } from 'next/navigation';
import {  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure,Image } from "@nextui-org/react";
import {toast} from 'sonner'
import RecordSkeleton from './skeleton/record';


export default function UserRecords() {
  const searchParam = useSearchParams();
  const id = searchParam.get('id');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [user,setUser] =useState("");

  const [userHealthRecords, setUserHealthRecords] = useState([]);

  const calculateAge = (dob) => {
    const dobDate = new Date(dob);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dobDate.getFullYear();
    const monthDiff = currentDate.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dobDate.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    if (id) {
      const fetchRecords = async () => {
        setIsLoading(true);
        try {
          const response = await axios.post("/api/records/userrecords", { id });
          setUserHealthRecords(response.data.decryptedRecords.map(record => ({
            ...record,
            visitDate: moment(record.createdAt).format('DD/MM/YY') // Extract visit date from created date
          })));
          setUser(response.data.user)
          console.log(user);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching records:", error);
          toast.error("Error fetching records");
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
  const handleImageClick = () => {
    window.open(selectedRecord.image.image_url, '_blank');
  };
  return (
    <div className='h-screen overflow-y-scroll'> {user && (
      <>
      <div className=" rounded-lg shadow-lg overflow-hidden mt-10 mx-5">
        <h2 className="text-xl font-bold text-center py-3 flex items-center justify-center">
          <UserIcon className="mr-2 h-8 w-8 text-white" />
          User Profile
        </h2>
        <div className="px-3 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" rounded-lg p-2 border-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
              <div className="flex items-center mb-2">
                <UserIcon className="text-blue-500 mr-2 h-6 w-6" />
                <p className="text-gray-600 font-medium">Full Name</p>
              </div>
              <p className="">{user.fullname.firstName} {user.fullname.surName}</p>
            </div>

            <div className=" rounded-lg p-2 border-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
              <div className="flex items-center mb-2">
                <ClipboardListIcon className="text-blue-500 mr-2 h-6 w-6" />
                <p className=" font-medium">Medication</p>
              </div>
              <p className="">{user.medication.name}</p>
            </div>

            <div className=" rounded-lg p-2 border-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
              <div className="flex items-center mb-2">
                <IdentificationIcon className="text-blue-500 mr-2 h-6 w-6" />
                <p className=" font-medium">ID</p>
              </div>
              <p className="">{user._id}</p>
            </div>

            <div className=" rounded-lg p-2 border-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
            <div className="flex items-center mb-2">
        <CakeIcon className="text-blue-500 mr-2 h-6 w-6" />
        <p className=" font-medium">Age</p>
      </div>
      <p className="">{calculateAge(user.dob)}</p></div>

            <div className=" rounded-lg p-2 border-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
              <div className="flex items-center mb-2">
                <UserGroupIcon className="text-blue-500 mr-2 h-6 w-6" />
                <p className=" font-medium">Gender</p>
              </div>
              <p className="">{user.gender}</p>
            </div>
            
            <div className=" rounded-lg p-2 border-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
              <div className="flex items-center mb-2">
                <GiBodyHeight className="text-blue-500 mr-2 h-6 w-6" />
                <p className=" font-medium">Height</p>
              </div>
              <p className="">{user.height}</p>
            </div>
            <div className=" rounded-lg p-2 border-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300">
              <div className="flex items-center mb-2">
                <FaWeight className="text-blue-500 mr-2 h-6 w-6" />
                <p className=" font-medium">Weight</p>
              </div>
              <p className="">{user.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </>
    )

    }
    
    
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
    ) : (<>
    <h2 className="text-xl font-bold text-center py-3 flex items-center justify-center">
          <ClipboardListIcon className="mr-2 h-8 w-8 text-white" />
          User Records
        </h2>
      <Table
      className='my-5 mx-5 '
        aria-label="User health records table"
        css={{
          "&.table": {
            minHeight: "400px",
          },
        }
      }
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
        className=''
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
      </>)}
      {selectedRecord && (
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onClose}
          classNames={{
            backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20 overflow-y-scroll "
          }}
        >
          <ModalContent className='mt-36 h-[80vh] overflow-y-scroll'>
            {(onCloseModal) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Health Record Details</ModalHeader>
                <ModalBody className='m-0 '>
                  <div className='m-0'>
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
                    {selectedRecord.image && <div onClick={handleImageClick} style={{ cursor: 'pointer' }}> <Image src={selectedRecord.image.image_url} alt="record file" /></div>}
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
    </div>
  );
}