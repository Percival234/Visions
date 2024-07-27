'use client';

import * as React from 'react';
import { Ban, User, Trash2, Pencil, MoreHorizontal, ArrowUpDown, Search } from 'lucide-react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { IUser, Roles } from '@/types/user.types';

import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenuLink } from '@/components/ui/dropdown-link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { ROUTES } from '@/constants/pages-url.constant';

import { cn } from '@/lib/utils';

import { priceFormatter } from '@/helpers/formatters/price-formatter';

export const columns: ColumnDef<IUser>[] = [
  {
    id: 'perosnal',
    header: 'Personal',
    cell: ({ row }) => {
      const { firstname, lastname, email } = row.original;

      return (
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>{`${firstname[0].toUpperCase()}${lastname[0].toUpperCase()}`}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold">
              {firstname} {lastname}
            </div>
            <div className="text-muted-foreground">{email}</div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'phone',
    header: 'Phone number',
    cell: ({ row }) => {
      const { phone } = row.original;
      return <div className="text-muted-foreground">+38-{phone}</div>;
    },
  },
  {
    accessorKey: 'totalSpent',
    header: 'Total spent',
    cell: ({ row }) => {
      const { totalSpent } = row.original;
      const formatted = priceFormatter(totalSpent);
      return <div className="font-bold">{formatted}</div>;
    },
  },
  {
    accessorKey: 'roles',
    header: 'Special roles',
    cell: ({ row }) => {
      const { roles } = row.original;

      return (
        <div className="flex gap-1">
          {roles
            .filter((role) => role !== Roles.USER)
            .map((role) => (
              <Badge key={role} variant={role === Roles.CREATOR ? 'default' : 'gold'}>
                {role}
              </Badge>
            ))}
        </div>
      );
    },
  },
  {
    accessorKey: 'updatedAt',
    header: 'Last update',
    cell: ({ row }) => {
      const { updatedAt } = row.original;
      return (
        <div className="text-muted-foreground">
          {new Date(updatedAt).toLocaleDateString('uk-UK')}
        </div>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const { id, isBlocked, isDeleted } = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn('h-8 w-8 p-0', {
                'hover:bg-destructive': isDeleted,
              })}>
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuLink Icon={User} title="Account" href={`${ROUTES.ADMIN.USERS}/${id}`} />
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => console.log('Block user')}>
                <Ban className="mr-2 h-4 w-4" />
                <span>{isBlocked ? 'Unblock' : 'Block'}</span>
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive" onClick={() => console.log('Delete user')}>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

interface UsersDataTableProps {
  data: IUser[];
}

export const UsersDataTable = ({ data }: UsersDataTableProps) => {
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
      pagination: {
        pageIndex: 0,
        pageSize: 11,
      },
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-2 mb-5">
        <Input placeholder="Find by id, name or email" className="max-w-sm" />
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </Button>
          <Button>
            Write
            <Pencil className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="bg-muted/50" key={headerGroup.id}>
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
              table.getRowModel().rows.map((row) => {
                const { isBlocked, isDeleted } = row.original;
                return (
                  <TableRow
                    key={row.id}
                    className={cn({
                      'opacity-50': isBlocked,
                      'bg-destructive/10 hover:bg-destructive/5': isDeleted,
                    })}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
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
      <div className="flex justify-between gap-3 py-2">
        <div className="flex gap-1 items-center text-muted-foreground  text-sm">
          Page:{' '}
          <Input
            className="h-8 max-w-12 text-center"
            value={table.getState().pagination.pageIndex + 1}
          />{' '}
          of <span>{100}</span>
        </div>
        {/* <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div> */}
        <Pagination className="justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
