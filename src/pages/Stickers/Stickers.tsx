import { useFetch } from "../../hooks/useFetch";
import { Card } from "../../components/Card/Card";
import { PageLayout } from "../../components/PageLayout/PageLayout";

interface ISticker {
  id: string;
  name: string;
  description: string;
  image: string;
}

export function Stickers() {
  const { data, loading, page } = useFetch("stickers");

  return (
    <PageLayout
      title="STICKERS"
      hasData={Boolean(data.length)}
      initialLoading={loading && !data.length}
      fetchingMoreData={loading && page > 1}
    >
      {data.map((sticker: ISticker) => (
        <Card
          key={sticker.id}
          image={sticker.image}
          name={sticker.name}
          description={sticker.description}
        />
      ))}
    </PageLayout>
  );
}
