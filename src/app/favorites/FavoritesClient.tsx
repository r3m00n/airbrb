import { SafeListing, SafeUser } from '@/types';
import Heading from '@/components/Heading';
import Container from '@/components/Container';
import ListingCard from '@/components/listings/ListingCard';

interface FavoritesClientProps {
  favorites: SafeListing[];
  currentUser: SafeUser | null;
}

const FavoritesClient = ({ favorites, currentUser }: FavoritesClientProps) => {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you have favorited!" />
      <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {favorites.map(favorite => (
          <ListingCard key={favorite.id} data={favorite} currentUser={currentUser} />
        ))}
      </div>
    </Container>
  );
};

export default FavoritesClient;
