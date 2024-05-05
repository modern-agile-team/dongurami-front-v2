/*
 * Created on Sun May 05 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { clubCategoryAPI } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useAllClubCategories(
  params?: Swagger.ClubCategoryFindAllParams
) {
  const requestParams = params ?? {};
  return useQuery({
    queryKey: ["allClubCategories", requestParams],
    queryFn: async () => {
      return (await clubCategoryAPI.clubCategoryFindAll(requestParams)).data;
    },
  });
}
