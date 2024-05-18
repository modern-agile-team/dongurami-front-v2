/*
 * Created on Mon Mar 25 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Modal } from "@/components/Design";
import { Form } from "..";

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form />
    </Modal>
  );
}
