import { Column } from "@/components";
import { Home } from "@/containers";

export default function HomePage() {
  return (
    <>
      <Column>
        <Home.Banner />
        <Column css={{ margin: "0 auto" }}>
          <Home.ClubPreview />
          <Home.RecruitingClubs />
        </Column>
      </Column>
    </>
  );
}
