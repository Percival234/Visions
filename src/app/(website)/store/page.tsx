import { FilterAside } from '@/components/store/filter-sidebar';
import { PicturesList } from '@/components/picture/pictures-list';
import { CenteredContainer } from '@/components/ui/centered-container';

import { picturesService } from '@/services/pictures.service';

export const relavidate = 1;

export default async function Page() {
  const data = await picturesService.getPictures();

  return (
    <CenteredContainer className="px-0">
      <div></div>
      <div className="flex gap-5">
        <div className="flex-1">
          <PicturesList pictures={data} />
        </div>
        <FilterAside />
      </div>
    </CenteredContainer>
  );
}
