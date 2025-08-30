import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductProvider } from "../context/ProductContext";
import { SearchProvider } from "../context/SearchContext";
import "../styles/globals.css";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
      <ProductProvider>
        <SearchProvider>
          <Layout>
            <Component {...pageProps} />;
          </Layout>
        </SearchProvider>
      </ProductProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
