/*
 * Created on Mon Mar 25 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Modal } from "@/components/Design";
import { Form } from "..";

export default function LoginModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form />
    </Modal>
  );
}
