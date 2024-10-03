'use client';

import { useState } from 'react';

import { IMessage } from '@/types/message.type';

import { Badge } from '@/components/ui/badge';
import { MessageActions } from './message-actions';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { cn } from '@/helpers/cn/cn';
import { Separator } from '../ui/separator';

export const Message = ({
  message: { title, sender, text, isReadByReceiver, createdAt },
}: {
  message: IMessage;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRead, setIsRead] = useState(isReadByReceiver);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setIsRead(true);
    }
  };

  const handleKeyPress2 = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setIsVisible(!isVisible);
    }
  };

  return (
    <Card
      tabIndex={0}
      onKeyUp={handleKeyPress}
      onClick={() => setIsRead(true)}
      className={cn('relative', {
        'bg-secondary/50': !isRead,
      })}>
      <MessageActions />
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-2 pr-10">
          {isRead || <div className="h-2 aspect-square rounded-full bg-sky-500"></div>}
          <CardTitle className="line-clamp-2">{title}</CardTitle>
        </div>
        <div className="text-muted-foreground font-regular text-xs">
          {new Date(createdAt).toDateString()}
        </div>
      </CardHeader>
      <Separator />
      <CardContent>
        <CardDescription
          tabIndex={0}
          onKeyUp={handleKeyPress2}
          onClick={() => setIsVisible(!isVisible)}
          className={cn({
            'line-clamp-2': !isVisible,
          })}>
          {text}
        </CardDescription>
      </CardContent>
      <CardFooter className="font-light justify-end">
        <div className="text-muted-foreground text-xs">Sender: {sender}</div>
      </CardFooter>
    </Card>
  );
};

// TODO SET MAX LENGTH FOR MESSAGE TITLE
// TODO CARD AND DETAILS ROLES
