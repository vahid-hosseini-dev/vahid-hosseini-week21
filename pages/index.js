import { useQuery } from "@tanstack/react-query";
import api from "../services/config";
import Loader from "../components/store/Loader";
import Card from "../components/store/Card";

const fetchProducts = async () => {
  const { data } = await api.get("/products");
  return data;
};

function Store() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <Loader />;
  if (isError) return <p>Error fetching data</p>;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.data.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

export default Store;
