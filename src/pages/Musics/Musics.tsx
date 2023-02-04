import { useFetch } from "../../utils/useFetch";
import { Card } from "../../components/Card/Card";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { FaGem, FaSortAlphaUp } from "react-icons/fa";

interface IMusic {
  id: string;
  name: string;
  description: string;
  image: string;
  rarity: string;
  exclusive: boolean;
}

export function Musics() {
  const { data, loading, page } = useFetch("music_kits");

  return (
    <PageLayout
      title="MUSICS"
      hasData={!loading && !!data.length}
      fetchingMoreData={loading && page > 1}
      initialLoading={loading && !data.length}
    >
      {data.map((music: IMusic) => (
        <Card
          key={music.id}
          image={music.image}
          name={music.name}
          description={music.description}
        >
          <ul className="list">
            <li>
              <FaGem size={16} /> Rarity: {music.rarity}
            </li>
            <li>
              <FaSortAlphaUp size={16} /> Exclusive:{" "}
              {music.exclusive ? " Yes" : " No"}
            </li>
          </ul>
        </Card>
      ))}
    </PageLayout>
  );
}
