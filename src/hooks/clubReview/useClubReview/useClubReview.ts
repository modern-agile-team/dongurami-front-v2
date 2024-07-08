import { clubAPI } from "@/apis";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function useClubReview(
  params?: Swagger.ClubFindAllAndCountClubReviewsParams
) {
  const requestParams = {
    clubId: String(params?.clubId),
    pageSize: 20,
    order: "-createAt",
  };

  return useInfiniteQuery({
    queryKey: ["club", params?.clubId],
    queryFn: async ({ pageParam = 1 }) => {
      return (
        await clubAPI.clubFindAllAndCountClubReviews({
          ...requestParams,
          page: pageParam,
        })
      ).data;
    },
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.currentPage + 1 : undefined;
    },
    initialPageParam: 1, // Provide the initial page parameter
  });
}
