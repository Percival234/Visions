import Image from 'next/image';

import { IPicture } from '@/types/picture.type';

import { Card, CardContent } from '../ui/card';

export const PictureCard = ({
  picture: {
    id,
    image,
    name,
    description,
    inStock,
    price,
    likes,
    styles,
    discount,
    dimensions,
    creator,
    totalPurchase,
  },
}: {
  picture: IPicture;
}) => {
  return (
    <div className="flex gap-5 md:p-5">
      <div>
        <Image src={image} width={600} height={400} alt={name} />
      </div>
      <div></div>
    </div>
  );
};
