import { Button } from "@/components/Design";
import { Column, Row } from "@/components/Layouts";
import { lightThemeColor } from "@/styles/theme";
import styled from "@emotion/styled";

export const WrapTitle = styled(Row.ul)`
  margin-top: 80px;
  width: 100%;
  margin-bottom: 12px;
`;

export const Title = styled(Row.div)``;

export const Line = styled(Row.div)`
  width: 100%;
  height: 1px;
  background-color: ${lightThemeColor.neutral_70};
  margin-bottom: 10px;
`;

export const SummarySection = styled(Row.div)`
  width: 100%;
  padding: 20px;
`;

export const WrapScore = styled(Row.div)`
  margin-left: 40px;
`;

export const Score = styled.p`
  font-size: 60px;
  color: ${lightThemeColor.primary_100};
  font-weight: 700;
  line-height: 54px;
`;

export const ScoreBreakdown = styled(Column.div)``;

export const ScoreRow = styled(Row.div)`
  margin-bottom: 8px;
`;

export const ScoreLabel = styled(Row.div)`
  width: 30px;
  font-size: 18px;
`;

export const ScoreBar = styled(Row.div)`
  border-radius: 4px;
  margin-left: 10px;
  width: 192px;
  height: 21px;
  background-color: #e0e0e0;
`;

export const ScoreBarFill = styled.div<{ width: number }>`
  height: 100%;
  background-color: #ffaa00;
  width: ${({ width }) => width}%;
`;

export const ReviewButton = styled(Button)`
  padding: 8px 22px;
  border: ${`1px solid ${lightThemeColor.accent_100}}`};
`;
