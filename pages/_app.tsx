import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Sidebar from "../src/components/Sidebar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URI,
  cache: new InMemoryCache(),
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <div>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default App;
