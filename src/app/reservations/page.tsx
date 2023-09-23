import getCurrentUser from '@/actions/getCurrentUser';
import getReservations from '@/actions/getReservations';
import EmptyState from '@/components/ErrorMessage';
import ReservationsClient from './ReservationsClient';

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return <EmptyState title="Unauthorized" subtitle="Please login" />;

  const reservations = await getReservations({ authorId: currentUser?.id });

  if (reservations.length === 0)
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your properties."
        resetLabel="Reserve one now!"
      />
    );

  return (
    <div>
      <ReservationsClient currentUser={currentUser} reservations={reservations} />
    </div>
  );
};

export default ReservationsPage;
