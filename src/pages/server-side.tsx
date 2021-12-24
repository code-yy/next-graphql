import { AboutLayout } from "src/components/layout/AboutLayout";
import { About } from "src/components/page/about";

// apollo-client
import gql from "graphql-tag";
import { client } from "src/components/apollo/apollo-client";

export async function getServerSideProps() {
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

const serverSidePage = ({ countries }: any) => {
  return (
    <div>
      {countries.map((country: any) => (
        <div key={country.code}>
          <About country={country} />
        </div>
      ))}
    </div>
  );
};

serverSidePage.getLayout = AboutLayout;

export default serverSidePage;
