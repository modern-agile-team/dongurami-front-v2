import { Column } from "@/components/Layouts";
import { Banner, Club } from "@/components/UI";
import * as Home from "@/containers/Home";

export default function HomePage() {
  return (
    <>
      <Column>
        <Banner />
        <Column css={{ margin: "0 auto" }}>
          <Club.List pageSize={5} />
          <Home.RecruitingClubs />
        </Column>
      </Column>
    </>
  );
}
