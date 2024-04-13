/*
 * Created on Sat Apr 13 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useQuery } from "@tanstack/react-query";

import { clubAPI } from "@/apis";

export default function useClubInformation(clubID: number) {
  return useQuery({
    queryKey: ["GET_CLUB_DETAIL", { clubID }],
    queryFn: async () =>
      (await clubAPI.clubFindOneOrNotFound(Number(clubID))).data,
  });
}
