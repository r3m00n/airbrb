import getCurrentUser from '@/actions/getCurrentUser';
import getReservations from '@/actions/getReservations';
import EmptyState from '@/components/ErrorMessage';
import TripsClient from './TripsClient';

const TripsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return <EmptyState title="Unauthorized" subtitle="Please login" />;

  const reservations = await getReservations({ userId: currentUser?.id });

  if (reservations.length === 0)
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you haven't reserved any trips yet."
        resetLabel="Let's change that!"
      />
    );

  return (
    <div>
      <TripsClient reservations={reservations} currentUser={currentUser} />
    </div>
  );
};

export default TripsPage;
