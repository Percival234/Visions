import { IPicture } from '@/types/picture.type';

import { EmptyState } from '@/components/ui/empty-state';
import { PictureCard } from '@/components/picture/picture-card';

export const PicturesList = ({ pictures }: { pictures: IPicture[] }) => {
  if (!pictures.length) return <EmptyState text="Пошук по вашим критеріям не дав результатів" />;

  return (
    <div>
      {pictures.map((picture) => (
        <PictureCard key={picture.id} picture={picture} />
      ))}
    </div>
  );
};
