'use client';

import { useEffect } from 'react';
import EmptyState from '@/components/ErrorMessage';

interface ErrorStateProps {
  error: Error;
}

const NotFound = ({ error }: ErrorStateProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState title="Uh oh" subtitle="Couldn't find what you were looking for." />
  );
};

export default NotFound;
