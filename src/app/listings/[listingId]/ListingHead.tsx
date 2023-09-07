'use client';

import Image from 'next/image';
import Heading from '@/components/Heading';
import useCountries from '@/hooks/useCountries';
import { SafeUser } from '@/types';
import HeartButton from '@/components/HeartButton';

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead = (props: ListingHeadProps) => {
  const { title, imageSrc, locationValue, id, currentUser } = props;

  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading title={title} subtitle={`${location?.label}, ${location?.region} `} />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image src={imageSrc} alt="Image" fill className="object-cover w-full" />
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
