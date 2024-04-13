/*
 * Created on Sat Apr 13 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { clubAPI } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useClubInformation(clubID: number) {
  return useQuery({
    queryKey: ["GET_CLUB", { clubID }],
    queryFn: async () =>
      (await clubAPI.clubFindOneOrNotFound(Number(clubID))).data,
  });
}
