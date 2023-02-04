import { useFetch } from "../../utils/useFetch";
import { Card } from "../../components/Card/Card";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { FaGem } from "react-icons/fa";
import { Loader } from "../../components/Loader/Loader";

interface IAgent {
  id: string;
  name: string;
  description: string;
  image: string;
  rarity: string;
}

export function Agents() {
  const { data, loading, page } = useFetch("agents");

  return (
    <PageLayout
      title="AGENTS"
      hasData={!loading && !!data.length}
      fetchingMoreData={loading && page > 1}
      initialLoading={loading && !data.length}
    >
      {data.map((agent: IAgent) => (
        <Card
          key={agent.id}
          image={agent.image}
          name={agent.name}
          description={agent.description}
        >
          <ul className="list">
            <li>
              <FaGem size={16} /> Rarity: {agent.rarity}
            </li>
          </ul>
        </Card>
      ))}
    </PageLayout>
  );
}
