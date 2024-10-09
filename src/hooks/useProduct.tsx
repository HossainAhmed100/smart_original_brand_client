import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { ProductType } from '@/type/ProductType'

function useProduct() {
    const axiosPublic = useAxiosPublic();
    const { data: products = [], isLoading } = useQuery<ProductType[]>({
        queryKey: ["products"],
        queryFn: async () => {
          const url = `/products/`;
          const res = await axiosPublic.get(url);
          return res.data;
        },
      });
  return [products, isLoading] as const
}

export default useProduct