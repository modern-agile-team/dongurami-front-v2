import { StoryObj } from "@storybook/react";
import { SelectBox } from ".";

const meta = {
  title: "components/SelectBox",
  component: SelectBox,
};

type Story = StoryObj<typeof meta>;

interface OptionInterface {
  name: string;
  value: string;
}

function setSelectOption(result: OptionInterface) {
  console.log(result);
  return result;
}

export const Primary: Story = {
  args: {
    options: [
      { name: "1학년", value: "1" },
      { name: "2학년", value: "2" },
    ],

    defaultName: "학년",
    isRequired: true,
    setSelectOption: setSelectOption,
  },
};

export default meta;
