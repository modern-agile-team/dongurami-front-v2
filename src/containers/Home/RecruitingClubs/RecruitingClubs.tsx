/*
 * Created on Sun Feb 18 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { useTheme } from "@emotion/react";

import { Column, Grid, Typography } from "@/components";
import { Converter } from "@/utils";

export default function RecruitingClubs() {
  const theme = useTheme();
  return (
    <Column css={{ width: "100%", marginTop: Converter.pxToRem(118) }} gap={34}>
      <Typography.h2 typoColor="primary_100" typoSize="Head4">
        모집중
      </Typography.h2>
      <Grid.ul column={2} gridGap={Converter.pxToRem(26)}>
        {new Array(5).fill(1).map((_, index) => {
          return (
            <Column
              key={index}
              css={{
                width: Converter.pxToRem(589),
                height: Converter.pxToRem(292),
                borderRadius: "30px",
                border: `4px solid ${theme.color.accent_70}`,
              }}
            />
          );
        })}
      </Grid.ul>
    </Column>
  );
}
