'use client';

import { useState } from 'react';

import { Title } from '@/components/ui/title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// TODO CHANGE isVisible TO FALSE BY DEFAULT

export default function Error({ error: { stack, message }, reset }: ErrorProps) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex flex-col items-center gap-6 py-20">
      <Title>Something went wrong!</Title>
      <div className="space-x-2">
        <Button onClick={reset}>Try again</Button>
        <Button onClick={() => setIsVisible(!isVisible)} variant="outline">
          Details...
        </Button>
      </div>
      {isVisible && (
        <Card className="w-full max-w-[30rem]">
          <CardHeader>
            <CardTitle className="text-xl">{message}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="overflow-hidden">{stack}</CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
