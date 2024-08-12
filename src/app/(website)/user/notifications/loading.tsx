import { Title } from '@/components/ui/title';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { CenteredContainer } from '@/components/ui/centered-container';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export default function Loading() {
  return (
    <CenteredContainer>
      <Title>Керуйте своєю поштою</Title>
      <Separator />
      <div className="space-y-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="space-y-3">
              <div className="flex justify-between space-x-5">
                <Skeleton className="h-6 w-11/12" />
                <Skeleton className="h-6 w-6" />
              </div>
              <Skeleton className="h-4 w-24" />
            </CardHeader>
            <Separator />
            <CardContent className="space-y-3">
              <Skeleton className="h-4" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter className="justify-end">
              <Skeleton className="h-4 w-24" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </CenteredContainer>
  );
}
