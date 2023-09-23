'use client';

import { useRouter } from 'next/navigation';
import getCurrentUser from '@/actions/getCurrentUser';
import getListings, { IListingsParams } from '@/actions/getListings';
import Container from '@/components/Container';
import EmptyState from '@/components/ErrorMessage';
import ListingCard from '@/components/listings/ListingCard';

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  const router = useRouter();

  if (listings.length === 0)
    return (
      <EmptyState
        title="No exact matches"
        subtitle="Try changing or removing some of your filters"
        resetAction={() => router.push('/')}
        resetLabel="Remove all filters"
      />
    );

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map(listing => (
          <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
        ))}
      </div>
    </Container>
  );
};

export const dynamic = 'force-dynamic';

export default Home;
