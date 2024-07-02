/*
 * Created on Sun May 05 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { clubAPI } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useClubReviewTotal(clubId: string) {
  const data = useQuery({
    queryKey: ["score", clubId],
    queryFn: async () => {
      const response = await clubAPI.clubGetClubReviewsScore(String(clubId));
      return response.data.score;
    },
  });
  return data.data;
}
