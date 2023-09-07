'use client';

import { useMemo } from 'react';
import { Reservation } from '@prisma/client';
import { SafeListing, SafeUser } from '@/types';
import { categories } from '@/components/navbar/Categories';
import Container from '@/components/Container';
import ListingHead from './ListingHead';
import ListingInfo from './ListingInfo';

interface ListingCardProps {
  reservations?: Reservation[];
  listing: SafeListing & { user: SafeUser };
  currentUser?: SafeUser | null;
}

const ListingCard = (props: ListingCardProps) => {
  const { listing, currentUser, reservations } = props;

  const category = useMemo(() => {
    return categories.find(item => item.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 mt-6 md:grid-cols-7 md:gap-10">
            <ListingInfo
              user={listing.user}
              category={category}
              description={listing.description}
              guestCount={listing.guestCount}
              roomCount={listing.roomCount}
              bathroomCount={listing.bathroomCount}
              locationValue={listing.locationValue}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingCard;
