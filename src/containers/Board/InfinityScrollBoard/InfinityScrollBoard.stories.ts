import { StoryObj } from "@storybook/react";
import InfinityScrollBoard from ".";

const meta = {
  title: "containers/InfinityScrollBoard",
  component: InfinityScrollBoard,
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export default meta;
