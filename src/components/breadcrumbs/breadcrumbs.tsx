'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { CenteredContainer } from '../ui/centered-container';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);
  pathnames.unshift('/');

  return (
    pathnames.length > 1 && (
      <CenteredContainer>
        <Breadcrumb className="py-5">
          <BreadcrumbList className="sm:gap-1">
            {pathnames.map((value, index) => {
              const href = `/${pathnames.slice(1, index + 1).join('/')}`;
              const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);
              const isLast = index === pathnames.length - 1;

              return (
                <React.Fragment key={value}>
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{formattedValue}</BreadcrumbPage>
                    ) : (
                      <>
                        <BreadcrumbLink
                          className="p-1 rounded-md text-sm ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
                          href={href}>
                          {formattedValue}
                        </BreadcrumbLink>
                      </>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator />}
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </CenteredContainer>
    )
  );
};
