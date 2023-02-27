import { Link } from 'react-router-dom';
import { Button } from '../components/common/ui';
import { StatsList } from '../components/stats';
import { AuthorizedLayout, Layout } from '../layouts';

export const Home = () => {
  return (
    <Layout>
      <div className="mx-auto p-4 container">
        <h1>Welcome to Game Shell</h1>

        <AuthorizedLayout>
          <div className="py-4">
            <StatsList></StatsList>

            <div className="text-center mt-4">
              <Link to="/play" title="Play">
                <Button element="span">Play now!</Button>
              </Link>
            </div>
          </div>
        </AuthorizedLayout>
      </div>
    </Layout>
  );
};
