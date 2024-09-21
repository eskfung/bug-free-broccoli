interface MapDetailProps {
  params: {
    slug: string
  }
}

export default function MapDetail({ params: { slug } }: MapDetailProps) {
  return (
    <main className="content">
      <h1 className="heading">Map {slug}</h1>
    </main>
  );
}
