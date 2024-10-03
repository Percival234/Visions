'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { Ban, User, Trash2, MoreHorizontal } from 'lucide-react';

import { IUser, RolesEnum } from '@/types/user.type';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenuLink } from '@/components/ui/dropdown-link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { cn } from '@/helpers/cn/cn';
import { dateFormatter } from '@/helpers/formatters/date-formatter';
import { priceFormatter } from '@/helpers/formatters/price-formatter';

import { ROUTES } from '@/constants/pages-url.constant';

export const columns: ColumnDef<IUser>[] = [
  {
    id: 'perosnal',
    header: 'Особиста інформація',
    cell: ({ row }) => {
      const { firstName, lastName, email } = row.original;

      return (
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
            <AvatarFallback>{`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold">
              {firstName} {lastName}
            </div>
            <div className="text-muted-foreground">{email}</div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'phone',
    header: 'Номер телефону',
    cell: ({ row }) => {
      const { phone } = row.original;
      return (
        <div className="text-muted-foreground">{phone ? `+38-${phone}` : 'Номер відсутній'}</div>
      );
    },
  },
  {
    accessorKey: 'totalSpent',
    header: 'Загальні витрати',
    cell: ({ row }) => {
      const { totalSpent } = row.original;
      const formatted = priceFormatter(totalSpent);
      return <div className="font-bold">{formatted}</div>;
    },
  },
  {
    accessorKey: 'roles',
    header: 'Ролі',
    cell: ({ row }) => {
      const { roles } = row.original;

      return (
        <div className="flex gap-1">
          {roles
            .filter((role) => role !== RolesEnum.USER)
            .map((role) => (
              <Badge key={role} variant={role === RolesEnum.CREATOR ? 'default' : 'gold'}>
                {role}
              </Badge>
            ))}
        </div>
      );
    },
  },
  {
    accessorKey: 'updatedAt',
    header: 'Остання дія',
    cell: ({ row }) => {
      const { updatedAt } = row.original;
      return <div className="text-accent-foreground">{dateFormatter(updatedAt)}</div>;
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
              <MoreHorizontal size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuLink Icon={User} title="Account" href={`${ROUTES.ADMIN.USERS}/${id}`} />
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => console.log('Block user')}>
                <Ban size={20} className="mr-2" />
                <span>{isBlocked ? 'Unblock' : 'Block'}</span>
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive" onClick={() => console.log('Delete user')}>
                <Trash2 size={20} className="mr-2" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const UsersTable = ({ users }: { users: IUser[] }) => {
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
      pagination: {
        pageIndex: 0,
        pageSize: 30,
      },
    },
  });
  return (
    <div className="rounded-md border-2 border-solid border-muted">
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
  );
};
