import { clubAPI } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export default function useClubBestReview(clubId?: String) {
  const data = useQuery({
    queryKey: ["clubReview", clubId],
    queryFn: async () => {
      const response = await clubAPI.clubFindBestClubReview(String(clubId));
      return response.data.clubReview;
    },
  });

  return data;
}
