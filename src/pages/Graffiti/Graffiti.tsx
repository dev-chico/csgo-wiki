import { Card } from "../../components/Card/Card";
import { useFetch } from "../../hooks/useFetch";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { FaGem } from "react-icons/fa";

interface IGraffiti {
  id: string;
  name: string;
  rarity: string;
  image: string;
}

export function Graffiti() {
  const { data, loading, page } = useFetch("graffiti");

  return (
    <PageLayout
      title="GRAFFITI"
      hasData={!loading && !!data.length}
      fetchingMoreData={loading && page > 1}
      initialLoading={loading && !data.length}
    >
      {data.map((graffiti: IGraffiti) => (
        <Card key={graffiti.id} image={graffiti.image} name={graffiti.name}>
          <ul className="list">
            <li>
              <FaGem size={16} /> Rarity: {graffiti.rarity}
            </li>
          </ul>
        </Card>
      ))}
    </PageLayout>
  );
}
