/*
 * Created on Sun Mar 17 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Club } from "@/components/UI";

export default function List() {
  return (
    <div css={{ minHeight: "100%" }}>
      <Club.List pageSize={20} />
    </div>
  );
}
