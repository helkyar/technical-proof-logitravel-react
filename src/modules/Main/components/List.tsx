import type { Item } from "data/types";
import styles from "./list.module.css";

type Props = {
  items: Item[];
  toggleSelection: (id: string) => void;
  deleteItem: (id: string) => void;
};

export default function List({ items, toggleSelection, deleteItem }: Props) {
  return (
    <section aria-labelledby="elements-list">
      <ul
        className={styles.itemList}
        role="listbox"
        aria-label="Available items"
      >
        {items.map((item) => (
          <li
            key={item.id}
            onDoubleClick={() => deleteItem(item.id)}
            onClick={() => toggleSelection(item.id)}
            className={`${styles.item} ${item.selected ? styles.selected : ""}`}
            aria-selected={item.selected}
          >
            {item.content}
          </li>
        ))}
      </ul>
    </section>
  );
}
