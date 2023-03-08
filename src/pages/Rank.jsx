import {useParams} from "react-router";
import {RankDashboard} from "../components/ranks/RankDashboard";
import {Layout} from "../layouts";

export const Rank = () => {
  const { userId } = useParams();

  return (
    <Layout>
      <div className="container mx-auto px-4 mt-4">
        <header>
          <h1 className="text-3xl font-bold">User: {userId}</h1>
        </header>

        <section className="mt-8">
          <RankDashboard userId={userId}></RankDashboard>
        </section>
      </div>
    </Layout>
  );
};
