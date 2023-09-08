'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { SafeReservation, SafeUser } from '@/types';
import Heading from '@/components/Heading';
import Container from '@/components/Container';
import ListingCard from '@/components/listings/ListingCard';

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser: SafeUser | null;
}

const ReservationsClient = ({ reservations, currentUser }: ReservationsClientProps) => {
  const router = useRouter();
  const [deleteingId, setDeleteingId] = useState('');

  const onCancle = useCallback(
    (id: string) => {
      setDeleteingId(id);
      axios
        .delete(`/api/reservations/${id}`)
        .then(() => {
          toast.success('Reservation cancelled');
          router.refresh();
        })
        .catch(error => toast.error('Something went wrong.'))
        .finally(() => setDeleteingId(''));
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Reservations" subtitle="Bookings on your properties" />
      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {reservations.map(reservation => (
          <ListingCard
            key={reservation.id}
            data={reservation.listing}
            reservation={reservation}
            actionId={reservation.id}
            onAction={onCancle}
            disabled={deleteingId === reservation.id}
            actionLabel="Cancel Reservation"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default ReservationsClient;
