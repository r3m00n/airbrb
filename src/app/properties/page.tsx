'use client';

import getCurrentUser from '@/actions/getCurrentUser';
import getListings from '@/actions/getListings';
import EmptyState from '@/components/ErrorMessage';
import PropertiesClient from './PropertiesClient';
import useRentModal from '@/hooks/useRentModal';

export const metadata = {
  title: 'Properties',
};

const Properties = async () => {
  const currentUser = await getCurrentUser();
  const rentModal = useRentModal();

  if (!currentUser) return <EmptyState title="Unauthorized" subtitle="Please login" />;

  const listings = await getListings({ userId: currentUser?.id });

  if (listings.length === 0)
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you no properties."
        resetLabel="Create one now!"
        resetAction={() => rentModal.onOpen()}
      />
    );

  return (
    <div>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </div>
  );
};

export default Properties;
