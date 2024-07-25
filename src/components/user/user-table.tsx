'use client';

import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SERVER_URL } from '@/constants/server-url';
import { IUser } from '@/types/user.types';
import { useCallback, useEffect, useState } from 'react';

import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: 'firstname',
    header: 'First name',
  },
  {
    accessorKey: 'lastname',
    header: 'Last name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export const UserTable = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const getPaintStyles = useCallback(async () => {
    const response = await fetch(`${SERVER_URL}/users`);
    const data: IUser[] = await response.json();
    setUsers(data);
  }, []);

  useEffect(() => {
    getPaintStyles();
    console.log('first'); // ! DELETE
  }, [getPaintStyles]);

  return <DataTable columns={columns} data={users} />;
};
