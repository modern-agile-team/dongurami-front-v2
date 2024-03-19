import { Column } from "@/components/Layouts";
import { Banner } from "@/components/UI";
import { Home } from "@/containers";

export default function HomePage() {
  return (
    <>
      <Column>
        <Banner />
        <Column css={{ margin: "0 auto" }}>
          <Home.ClubPreview />
          <Home.RecruitingClubs />
        </Column>
      </Column>
    </>
  );
}
