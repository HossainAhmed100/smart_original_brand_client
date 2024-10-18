import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { ProductCategoryType } from "@/type/ProductCategoryType";

function useCategory() {
    const axiosPublic = useAxiosPublic();
    const { data: category = [], isLoading } = useQuery<ProductCategoryType[]>({
        queryKey: ["category"],
        queryFn: async () => {
          const url = `/layout/category/`;
          const res = await axiosPublic.get(url);
          return res.data;
        },
      });
  return [category, isLoading] as const
}

export default useCategory