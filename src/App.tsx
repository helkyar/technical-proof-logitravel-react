import Main from "modules/Main";
import Modal from "modules/Modal";
// styles
import "./App.css";
import { useModal } from "hooks/useModal";
import { useListCRUD } from "hooks/useListCRUD";

function App() {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { addItem, ...listURD } = useListCRUD();

  return (
    <>
      <Main listActions={listURD} openModal={openModal} />

      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        addItem={addItem}
      />
    </>
  );
}

export default App;
