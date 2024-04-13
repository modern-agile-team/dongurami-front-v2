/*
 * Created on Sat Apr 13 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { clubAPI } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useClubMembers(clubID: number) {
  return useQuery({
    queryKey: ["GET_CLUB_MEMBERS", { clubID }],
    queryFn: async () =>
      (await clubAPI.clubFindAllMembers(Number(clubID))).data,
  });
}
