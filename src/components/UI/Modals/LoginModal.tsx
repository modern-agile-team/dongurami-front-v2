import { Modal } from "@/components";
import { Login } from "@/containers";

export default function LoginModal({ isOpen }: { isOpen: boolean }) {
  return (
    <Modal isOpen={isOpen}>
      <Login.Layout>
        <Login.Form />
      </Login.Layout>
    </Modal>
  );
}
