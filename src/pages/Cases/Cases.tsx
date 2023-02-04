import { useFetch } from "../../utils/useFetch";
import { Card } from "../../components/Card/Card";
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { FaBoxes, FaCalendarAlt } from "react-icons/fa";

interface ICase {
  id: string;
  name: string;
  description: string;
  image: string;
  first_sale_date: string;
  type: string;
}

export function Cases() {
  const { data, loading, page } = useFetch("cases");

  return (
    <PageLayout
      title="CASES"
      hasData={!loading && !!data.length}
      fetchingMoreData={loading && page > 1}
      initialLoading={loading && !data.length}
    >
      {data.map((c: ICase) => (
        <Card
          key={c.id}
          image={c.image}
          name={c.name}
          description={c.description ? c.description : "No description"}
        >
          <ul className="list">
            <li>
              <FaCalendarAlt size={16} /> First sale date: {c.first_sale_date}
            </li>
            <li>
              <FaBoxes size={16} /> Type: {c.type}
            </li>
          </ul>
        </Card>
      ))}
    </PageLayout>
  );
}
