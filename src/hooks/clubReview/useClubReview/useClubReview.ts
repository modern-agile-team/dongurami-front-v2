/*
 * Created on Sun May 05 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { clubAPI } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useClubReview(
  params?: Swagger.ClubFindAllAndCountClubReviewsParams
) {
  const requestParams = {
    clubId: String(params?.clubId),
    page: Number(params?.page),
    pageSize: 20,
    order: "-createAt",
  };

  return useQuery({
    queryKey: ["club", requestParams],
    queryFn: async () => {
      return (await clubAPI.clubFindAllAndCountClubReviews(requestParams)).data;
    },
  });
}
