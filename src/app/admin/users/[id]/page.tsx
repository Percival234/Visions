import { Title } from '@/components/ui/title';

import { IParams } from '@/types/url-params.types';

export default function Page({ params }: IParams) {
  return (
    <div>
      <Title size="h1">User {params.id}</Title>
    </div>
  );
}
