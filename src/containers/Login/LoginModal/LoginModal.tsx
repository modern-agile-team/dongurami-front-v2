/*
 * Created on Mon Mar 25 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { Modal } from "@/components/Design";
import { useState } from "react";
import { Form } from "..";

export default function LoginModal({ isOpen }: { isOpen: boolean }) {
  return (
    <Modal isOpen={isOpen}>
      <Form />
    </Modal>
  );
}
