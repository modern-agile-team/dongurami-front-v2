// ModalPopup.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import ModalPopup from "./ModalPopup";

export default {
  title: "Components/ModalPopup",
  component: ModalPopup,
  argTypes: {
    width: {
      control: {
        type: "radio",
        options: [440, 600],
      },
    },
    fitContent: {
      control: "boolean",
    },
    open: {
      control: "boolean",
    },
    onOpen: { action: "onOpen" },
    onClose: { action: "onClose" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    args.onOpen?.();
  };

  const handleClose = () => {
    setOpen(false);
    args.onClose?.();
  };

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <ModalPopup {...args} open={open} onClose={handleClose}>
        <ModalPopup.Title titleTypography={{ typoSize: "Head4" }}>
          Modal Title
        </ModalPopup.Title>
        <ModalPopup.Contents>123</ModalPopup.Contents>
        <ModalPopup.Bottom
          confirmText="Confirm"
          cancelText="Cancel"
          onCancel={handleClose}
          onConfirm={(ev, hide) => {
            hide();
            args.onConfirm?.(ev);
          }}
        />
      </ModalPopup>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  width: 440,
  fitContent: false,
  onConfirm: () => {
    alert("확인");
  },
};

export const Wide = Template.bind({});
Wide.args = {
  width: 600,
  fitContent: false,
  onConfirm: () => {
    alert("확인");
  },
};

export const FitContent = Template.bind({});
FitContent.args = {
  width: 440,
  fitContent: true,
  onConfirm: () => {
    alert("확인");
  },
};
