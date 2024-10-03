import { SortKeys } from '@/types/sort.type';

export const SORT_METHODS: { name: string; key: SortKeys }[] = [
  { name: 'За датою створення', key: 'createdAt asc' },
  { name: 'За датою створення', key: 'createdAt desc' },
  {
    name: 'За алфавітом',
    key: 'firstName asc',
  },
  {
    name: 'За алфавітом',
    key: 'firstName desc',
  },
  { name: 'За кількістю витрат', key: 'totalSpent asc' },
  { name: 'За кількістю витрат', key: 'totalSpent desc' },
  { name: 'За активністю', key: 'updatedAt asc' },
  { name: 'За активністю', key: 'updatedAt desc' },
];
