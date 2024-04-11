"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Pagination,
} from "@nextui-org/react";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  { uid: "name", name: "Name", sortable: true },
  { uid: "email", name: "Email", sortable: true },
  { uid: "degree", name: "Degree", sortable: true },
  { uid: "specialization", name: "Specialization", sortable: true },
];

export default function App() {
  const [filterValue, setFilterValue] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/admin/doctors');
        setDoctors(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching doctor data:', error);
        toast.error('Error fetching doctor data');
        setIsLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.fullname.firstName.toLowerCase().includes(filterValue.toLowerCase())
  );

  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedDoctors = filteredDoctors.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setPage(1); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />

      {isLoading ? (
        <div className='mt-10'>
          {/* Implement the RecordSkeleton component here or use a placeholder */}
          <div>Loading...</div>
        </div>
      ) : (
        <div>
          <Table
            isCompact
            removeWrapper
            aria-label="Doctors table with custom cells, pagination and sorting"
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.uid}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody emptyContent="No doctors found" items={paginatedDoctors}>
              {(doctor) => (
                <TableRow key={doctor._id}>
                  <TableCell>
                    <User
                      name={`${doctor.fullname.firstName} ${doctor.fullname.surName}`}
                      description={doctor.email}
                    />
                  </TableCell>
                  <TableCell>{doctor.email}</TableCell>
                  <TableCell>{doctor.degree}</TableCell>
                  <TableCell>{doctor.specialization}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <Pagination
            count={totalPages}
            active={page}
            onChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
            itemsPerPageOptions={[5, 10, 20]}
            itemsPerPage={itemsPerPage}
          />
        </div>
      )}
    </div>
  );
}
