import getCurrentUser from '@/actions/getCurrentUser';
import getListingById from '@/actions/getListingById';
import getReservations from '@/actions/getReservations';
import EmptyState from '@/components/ErrorMessage';
import ListingClient from '@/app/listings/[listingId]/ListingClient';

interface IParams {
  listingId?: string;
}

export const metadata = {
  title: 'Listing',
};

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) return <EmptyState title="Uh Oh" subtitle="Listing not found" />;

  return (
    <ListingClient
      currentUser={currentUser}
      reservations={reservations}
      listing={listing}
    />
  );
};

export default ListingPage;
