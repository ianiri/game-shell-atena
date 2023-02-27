import {useSelector} from "react-redux";
import {AuthorizedLayout, Layout} from "../layouts";

export const Profile = () => {
  //temporary selector
  const {firstName, lastName} = useSelector(({auth}) => {
    const {user} = auth;
    const {firstName, lastName} = user;

    return {
      firstName,
      lastName
    };
  });

  return (
    <Layout>
      <AuthorizedLayout>
        <div className="container mx-auto px-4 mt-4">
          <header>
            <h1 className="text-3xl font-bold">Profile</h1>
            {firstName}
            {lastName}
          </header>
        </div>
      </AuthorizedLayout>
    </Layout>
  )
}
