import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import "tailwindcss/tailwind.css";

// apollo-client
import { ApolloProvider } from "@apollo/client";
import { client } from "src/components/apollo/apollo-client";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>next-tailwind</title>
      </Head>
      <ApolloProvider client={client}>{getLayout(<Component {...pageProps} />)}</ApolloProvider>
    </>
  );
};

export default MyApp;
