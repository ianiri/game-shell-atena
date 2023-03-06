import {Game} from "../components/play";
import {Creature} from "../components/profile";
import {AuthorizedLayout, Layout} from "../layouts";

export const Play = () => {
  return (
    <Layout>
      <AuthorizedLayout>
        <div className="container mx-auto px-4 mt-4">
          <header>
            <h1 className="text-3xl font-bold">Play</h1>
          </header>

          <section className="flex justify-between flex-wrap mt-8 mb-4">
            <div className="w-full lg:w-8/12 mb-2">
              <Game></Game>
            </div>
            <div className="w-full lg:w-4/12 flex flex-col justify-center">
              <Creature></Creature>
            </div>
          </section>
        </div>
      </AuthorizedLayout>
    </Layout>
  )
}
