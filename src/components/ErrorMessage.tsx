'use client';

import { useRouter } from 'next/navigation';
import Heading from './Heading';
import Button from './Button';

interface ErrorMessageProps {
  title?: string;
  subtitle?: string;
  resetLabel?: string;
  resetAction?: () => void;
}

const ErrorMessage = (props: ErrorMessageProps) => {
  const {
    title = 'No exact matches',
    subtitle = 'Try changing or removing some of your filters',
    resetLabel = 'Back',
    resetAction = () => router.back(),
  } = props;

  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        <Button outline label={resetLabel} onClick={resetAction} />
      </div>
    </div>
  );
};

export default ErrorMessage;
