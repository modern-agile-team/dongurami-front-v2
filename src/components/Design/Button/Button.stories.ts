import { StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  title: "components/Button",
  component: Button,
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    shape: "circle",
    children: "버튼",
  },
};

export default meta;
