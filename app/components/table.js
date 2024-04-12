"use client"
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from 'sonner'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  User,
  Pagination,
} from "@nextui-org/react";
import UserSkeleton from "./skeleton/user";

const columns = [
  { uid: "name", name: "Name", sortable: true },
  { uid: "email", name: "Email", sortable: true },
  { uid: "mobile", name: "Mobile No", sortable: true },
  { uid: "adharCard", name: "AdharCard No", sortable: true },
];

export default function UserTable({user}) {
  const [filterValue, setFilterValue] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [loading, setLoading] = useState(true);
  const router = useRouter()

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`/api/admin/${user}s`);
        setUsers(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching users data:', error);
        toast.error('Error fetching users data');
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.fullname.firstName.toLowerCase().includes(filterValue.toLowerCase())
  );

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("")
    setPage(1)
  }, [])
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end m-2">
        <Input
          isClearable
          className="w-full sm:max-w-[44%]"
          placeholder="Search by name..."
          startContent={<svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
          >
            <path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <path
              d="M22 22L20 20"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>}
          value={filterValue}
          onClear={() => onClear()}
          onValueChange={onSearchChange}
        />
        <Button color="primary" 
    onClick={()=>{router.replace(`/register/${user}`)}} endContent={<svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={24}
    role="presentation"
    viewBox="0 0 24 24"
    width={24}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M6 12h12" />
      <path d="M12 18V6" />
    </g>
  </svg>}>
              Add New
            </Button>
      </div>
      {loading ? ( 
        <div className="mt-10">
        <UserSkeleton/>
        <UserSkeleton/>
        <UserSkeleton/>
        <UserSkeleton/>
        <UserSkeleton/>
        <UserSkeleton/>
        <UserSkeleton/>
        <UserSkeleton/>
        </div>
      ) : (
      <Table
        isCompact
        removeWrapper
        aria-label="Users table with custom cells, pagination and sorting"

        bottomContent={
          totalPages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={totalPages}
                onChange={(page) => setPage(page)}
              />
            </div>
          ) : null
        }
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
      </Table>)}
    </div>
  );
}