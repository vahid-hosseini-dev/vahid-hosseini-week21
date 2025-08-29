import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductProvider } from "../context/productContext";
import { SearchProvider } from "../context/SearchContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const queryclient = new QueryClient();
  return (
    <QueryClientProvider client={queryclient}>
      <ProductProvider>
        <SearchProvider>
          <Component {...pageProps} />;
        </SearchProvider>
      </ProductProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
