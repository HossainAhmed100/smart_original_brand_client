import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { ProductCategoryType } from "@/type/ProductCategoryType";

function usePrCategory() {
    const axiosPublic = useAxiosPublic();
    const { data: prCategory = [], isLoading } = useQuery<ProductCategoryType[]>({
        queryKey: ["prCategory"],
        queryFn: async () => {
          const res = await axiosPublic.get('/layout/category/');
          return res.data;
        },
      });
  return [prCategory, isLoading] as const
}

export default usePrCategory