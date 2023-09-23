import getCurrentUser from '@/actions/getCurrentUser';
import getFavoriteListings from '@/actions/getFavoriteListings';

import EmptyState from '@/components/ErrorMessage';
import FavoritesClient from './FavoritesClient';

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return <EmptyState title="Unauthorized" subtitle="Please login" />;

  const favorites = await getFavoriteListings();

  if (favorites.length === 0)
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorite listings."
        resetLabel="Let's change that!"
      />
    );

  return (
    <div>
      <FavoritesClient currentUser={currentUser} favorites={favorites} />
    </div>
  );
};

export default FavoritesPage;
