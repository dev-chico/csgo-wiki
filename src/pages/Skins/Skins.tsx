import { useFetch } from "../../utils/useFetch";
import { Card } from "../../components/Card/Card";
import { FaShieldAlt, FaMinus, FaPlus, FaGem } from "react-icons/fa";
import { PageLayout } from "../../components/PageLayout/PageLayout";

interface ISkin {
  id: string;
  name: string;
  description?: string;
  image: string;
  max_float?: number;
  min_float?: number;
  stattrak?: boolean;
  rarity?: string;
}

export function Skins() {
  const { data, loading, page } = useFetch("skins");

  return (
    <PageLayout
      title="SKINS"
      hasData={!loading && !!data.length}
      fetchingMoreData={loading && page > 1}
      initialLoading={loading && !data.length}
    >
      {data.map((skin: ISkin) => (
        <Card
          key={skin.id}
          image={skin.image}
          name={skin.name}
          description={skin.description}
        >
          <ul className="list">
            <li>
              <FaMinus size={16} />
              Min. Float: {skin.min_float}
            </li>
            <li>
              <FaPlus size={16} />
              Max. Float: {skin.max_float}
            </li>
            <li>
              <FaShieldAlt size={16} /> Stattrak:
              {skin.stattrak ? " Yes" : " No"}
            </li>
            <li>
              <FaGem size={16} /> Rarity: {skin.rarity}
            </li>
          </ul>
        </Card>
      ))}
    </PageLayout>
  );
}
