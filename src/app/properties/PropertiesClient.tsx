'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { SafeListing, SafeUser } from '@/types';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import ListingCard from '@/components/listings/ListingCard';

interface PropertiesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const PropertiesClient = ({ listings, currentUser }: PropertiesClientProps) => {
  const router = useRouter();
  const [deleteingId, setDeleteingId] = useState('');

  const onDelete = useCallback(
    (id: string) => {
      setDeleteingId(id);
      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success('Listing deleted.');
          router.refresh();
        })
        .catch(error => toast.error(error?.response?.data?.error))
        .finally(() => setDeleteingId(''));
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Properties" subtitle="List of our properties" />
      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map(listing => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            onAction={onDelete}
            disabled={deleteingId === listing.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default PropertiesClient;
