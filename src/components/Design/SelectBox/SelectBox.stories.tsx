import { StoryObj } from "@storybook/react";
import { SelectBox } from ".";

const meta = {
  title: "components/SelectBox",
  component: SelectBox,
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: ["12340", "한글", "English", "Aa10테스트"],
  },
};

export default meta;
