/*
 * Created on Wed Nov 15 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { boardsAPI } from "@/apis";
import { InfinityScrollBoard } from "@/containers/Board";

export default function InfinityTestPage(props: {
  freeBoard: Swagger.Api.FreePostFindAllAndCount.ResponseBody;
}) {
  return <InfinityScrollBoard {...props} />;
}

export async function getServerSideProps() {
  const freeBoard = await boardsAPI.freeBoard.getAll({
    id: 1,
    page: 1,
    pageSize: 20,
  });

  return {
    props: {
      freeBoard,
    },
  };
}
