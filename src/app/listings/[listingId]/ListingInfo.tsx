import dynamic from 'next/dynamic';
import { IconType } from 'react-icons';
import { SafeUser } from '@/types';
import useCountries from '@/hooks/useCountries';
import Avatar from '@/components/Avatar';
import ListingCategory from './ListingCategory';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  locationValue: string;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
}

const ListingInfo = (props: ListingInfoProps) => {
  const {
    user,
    bathroomCount,
    category,
    description,
    locationValue,
    guestCount,
    roomCount,
  } = props;

  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlang;

  return (
    <div className="flex flex-col col-span-4 gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <Map center={coordinates} />
    </div>
  );
};

export default ListingInfo;
