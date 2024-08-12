import { MoreVertical, Trash2 } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export const MessageActions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="absolute top-3 right-3" variant="ghost" size="icon">
          <span className="sr-only">відкрити контекстне меню повідомлення</span>
          <MoreVertical size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log('Delete message')}>
          <Trash2 size={16} className="mr-2" />
          <span>Видалити</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// TODO change icons classname sizes to size attr
// TODO implement delete message
