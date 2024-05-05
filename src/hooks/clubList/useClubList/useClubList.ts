/*
 * Created on Sun May 05 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { clubAPI } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useClubList(
  params?: Swagger.ClubFindAllAndCountParams
) {
  const requestParams = params ?? {};

  return useQuery({
    queryKey: ["clubList", requestParams],
    queryFn: async () => {
      return (await clubAPI.clubFindAllAndCount(requestParams)).data;
    },
  });
}
