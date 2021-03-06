import { HomeLayout } from "src/components/layout/HomeLayout";
import { Index } from "src/components/page/index";

// apollo-client
import gql from "graphql-tag";
import { client } from "src/components/apollo/apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}

const HomePage = ({ countries }: any) => {
  return (
    <div>
      {countries.map((country: any) => (
        <div key={country.code}>
          <Index country={country} />
        </div>
      ))}
    </div>
  );
};

HomePage.getLayout = HomeLayout;

export default HomePage;
