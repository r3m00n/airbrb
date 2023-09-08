import getCurrentUser from '@/actions/getCurrentUser';
import getListingById from '@/actions/getListingById';
import getReservations from '@/actions/getReservations';
import EmptyState from '@/components/EmptyState';
import ListingClient from '@/app/listings/[listingId]/ListingClient';

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) <EmptyState />;

  return (
    <ListingClient
      currentUser={currentUser}
      reservations={reservations}
      listing={listing}
    />
  );
};

export default ListingPage;
