import React from 'react';
import { Skeleton } from './Skeleton';

export const ProductsSkeleton = () => {
  return (
    <>
      {[...new Array(6)].map((_, id) => (
        <Skeleton key={id} />
      ))}
    </>
  );
};
