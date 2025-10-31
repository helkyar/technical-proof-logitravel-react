import { useState } from "react";
import styles from "./modal.module.css";
type Props = {
  isModalOpen: boolean;
  closeModal: () => void;
  addItem: (content: string) => void;
};

export default function Modal({ isModalOpen, closeModal, addItem }: Props) {
  const [value, setValue] = useState("");
  if (!isModalOpen) return null;

  const addItemHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (value.trim() === "") return;
    addItem(value);
    setValue("");
  };

  return (
    <div
      id="addModal"
      className={styles.modal}
      role="dialog"
      aria-labelledby="modalTitle"
      aria-modal="true"
      onClick={closeModal}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <form id="addItemForm">
          <label htmlFor="newItem" className="modal-label">
            Add item to list
          </label>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            id="newItem"
            name="newItem"
            placeholder="Type the text here..."
            required
          />
          <div className={styles.modalActions}>
            <button
              type="submit"
              className="btn-primary"
              onClick={addItemHandler}
            >
              ADD
            </button>

            <button
              type="button"
              id="closeModalBtn"
              className={styles.modalClose}
              aria-label="Close modal"
              onClick={closeModal}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
