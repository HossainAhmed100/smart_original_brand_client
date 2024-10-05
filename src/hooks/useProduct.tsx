import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


function useProduct() {
    const axiosPublic = useAxiosPublic();
    const { data: products = [], isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
          const url = `/products/`;
          const res = await axiosPublic.get(url);
          console.log("🚀 ~ queryFn: ~ res:", res.data)
          return res.data;
        },
      });
  return [products, isLoading]
}

export default useProduct