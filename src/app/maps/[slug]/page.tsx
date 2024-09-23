import { PlaceSummary } from '@/components/PlaceSummary';
import { placeDetail } from '@/dataAccess/googlePlaces/client';

interface MapDetailProps {
  params: {
    slug: string;
  };
}

export default async function MapDetail({ params: { slug } }: MapDetailProps) {
  const places = await Promise.all([
    placeDetail('ChIJCar0f49ZwokR6ozLV-dHNTE'),
    placeDetail('ChIJQ-hJIuBbwokRRUdquw_5w5U'),
  ]);
  return (
    <main className="content">
      <h1 className="heading">Map {slug}</h1>
      <div>
        {places.map((place) => (
          <PlaceSummary key={place.id} placeDetail={place} />
        ))}
      </div>
    </main>
  );
}
