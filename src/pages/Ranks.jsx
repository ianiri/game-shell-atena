import { UserRanksTable } from '../components/ranks';
import { Layout } from '../layouts';

export const Ranks = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 mt-4">
        <header>
          <h1 className="text-3xl font-bold">Ranks</h1>
        </header>

        <main className="mt-8">
          <UserRanksTable></UserRanksTable>
        </main>
      </div>
    </Layout>
  );
};
