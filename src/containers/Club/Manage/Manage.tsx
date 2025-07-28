/*
 * Created on Sat May 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useState } from "react";

import { SwitchCase } from "@/components/Utilities";

import { ManageHeader } from "./ManageHeader";
import { SearchBar } from "./SearchBar";
import * as Contents from "./Contents";

export default function Manage() {
  const [manageTab, setManageTab] = useState<
    "member" | "applyMember" | "applyForm"
  >("member");

  return (
    <>
      <ManageHeader setManageTab={setManageTab} />
      {manageTab !== "applyForm" && <SearchBar />}
      <SwitchCase
        condition={manageTab}
        cases={{
          member: <Contents.ManageMember />,
          applyMember: <Contents.ApplyMember />,
          applyForm: <Contents.ManageApplyForm />,
        }}
      />
    </>
  );
}
