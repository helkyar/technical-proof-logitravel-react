import type { Item } from "../../data/types";
import ArticleFooter from "./components/ArticleFooter";
import ArticleHeader from "./components/ArticleHeader";
import List from "./components/List";

type Props = {
  openModal: () => void;
  listActions: {
    items: Item[];
    toggleSelection: (id: string) => void;
    deleteItem: (id: string) => void;
    deleteSelectedItems: () => void;
    undoLastChange: () => void;
  };
};

export default function Main({ openModal, listActions }: Props) {
  const {
    items,
    toggleSelection,
    deleteItem,
    deleteSelectedItems,
    undoLastChange,
  } = listActions;

  return (
    <main>
      <article className="proof-container">
        <ArticleHeader />
        <List
          items={items}
          toggleSelection={toggleSelection}
          deleteItem={deleteItem}
        />
        <ArticleFooter
          deleteSelectedItems={deleteSelectedItems}
          undoLastChange={undoLastChange}
          openModal={openModal}
          disableDelete={items.every((item) => !item.selected)}
        />
      </article>
    </main>
  );
}
