import {AuthorizedLayout, Layout} from "../layouts";

export const Play = () => {
  return (
    <Layout>
      <AuthorizedLayout>
        <div className="container mx-auto px-4 mt-4">
          <header>
            <h1 className="text-3xl font-bold">Play</h1>
          </header>
        </div>
      </AuthorizedLayout>
    </Layout>
  )
}
