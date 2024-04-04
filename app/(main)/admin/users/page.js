"use client"
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
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
  { uid: "mobile", name: "Mobile No", sortable: true },
  { uid: "adharCard", name: "AdharCard No", sortable: true },
];

export default function App() {
  const [filterValue, setFilterValue] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    // Fetch doctors data
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users data:', error);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.fullname.firstName.toLowerCase().includes(filterValue.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setPage(1); // Reset to first page when items per page changes
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <Table
        isCompact
        removeWrapper
        aria-label="Users table with custom cells, pagination and sorting"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent="No users found" items={paginatedUsers}>
          {(user) => (
            <TableRow key={user._id}>
              <TableCell>
                <User
                  name={`${user.fullname.firstName} ${user.fullname.surName}`}
                  description={user.email}
                />
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.mobile}</TableCell>
              <TableCell>{user.adharCard}</TableCell>
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
  );
}
