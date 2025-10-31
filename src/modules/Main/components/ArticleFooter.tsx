import styles from "./articleFooter.module.css";
type Props = {
  deleteSelectedItems: () => void;
  undoLastChange: () => void;
  openModal: () => void;
  disableDelete: boolean;
};

export default function ArticleFooter({
  deleteSelectedItems,
  undoLastChange,
  openModal,
  disableDelete,
}: Props) {
  return (
    <footer className={styles.actions}>
      <div className={styles.secondaryActions}>
        <button
          type="button"
          aria-label="Reiniciar selección"
          className={styles.undo}
          onClick={undoLastChange}
        >
          <span>⟲</span>
        </button>
        <button
          type="button"
          className={styles.delete}
          disabled={disableDelete}
          onClick={deleteSelectedItems}
        >
          DELETE
        </button>
      </div>
      <button type="button" className="btn-primary" onClick={openModal}>
        ADD
      </button>
    </footer>
  );
}
