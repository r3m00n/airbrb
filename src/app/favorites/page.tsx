import getCurrentUser from '@/actions/getCurrentUser';
import getFavoriteListings from '@/actions/getFavoriteListings';

import EmptyState from '@/components/EmptyState';
import FavoritesClient from './FavoritesClient';

export const metadata = {
  title: 'Favorites',
};

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return <EmptyState title="Unauthorized" subtitle="Please login" />;

  const favorites = await getFavoriteListings();

  if (favorites.length === 0)
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
      />
    );

  return (
    <div>
      <FavoritesClient currentUser={currentUser} favorites={favorites} />
    </div>
  );
};

export default FavoritesPage;
