import { useState } from "react";
// utils
import { v4 as uuidv4 } from "uuid";
//data
import initialItems from "data/initialItems.json";

export function useListCRUD() {
  const [prevState, setPrevState] = useState(initialItems);
  const [items, setItems] = useState(initialItems);

  const addItem = (content: string) => {
    setPrevState(items);
    const newItem = {
      id: uuidv4(),
      content,
      selected: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };
  const toggleSelection = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };
  const deleteItem = (id: string) => {
    setPrevState(items);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const deleteSelectedItems = () => {
    setPrevState(items);
    setItems((prevItems) => prevItems.filter((item) => !item.selected));
  };
  const undoLastChange = () => {
    setItems(prevState);
  };

  return {
    items,
    addItem,
    toggleSelection,
    deleteItem,
    deleteSelectedItems,
    undoLastChange,
  };
}
