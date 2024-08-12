import { IMessage } from '@/types/message.type';

import { Message } from './message';
import { EmptyState } from '@/components/ui/empty-state';

export const MessagesList = ({ messages }: { messages: IMessage[] }) => {
  if (!messages.length) return <EmptyState text="Повідомлення відсутні" />;
  return (
    <div className="space-y-3">
      {messages.map((message) => {
        return <Message message={message} key={message.id} />;
      })}
    </div>
  );
};
