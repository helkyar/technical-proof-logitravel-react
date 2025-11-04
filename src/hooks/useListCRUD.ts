import { useState } from "react";
// utils
import { v4 as uuidv4 } from "uuid";
//data
import initialItems from "../data/initialItems.json";

export function useListCRUD() {
  const savedItems = () => {
    const sotoredItems = localStorage.getItem("storedListItems");
    return sotoredItems ? JSON.parse(sotoredItems) : initialItems;
  };
  const [prevState, setPrevState] = useState(savedItems());
  const [items, setItems] = useState(initialItems);

  const saveItems = (itemsToSave: typeof initialItems) => {
    localStorage.setItem("storedListItems", JSON.stringify(itemsToSave));
  };

  const addItem = (content: string) => {
    setPrevState(items);
    const newItem = {
      id: uuidv4(),
      content,
      selected: false,
    };
    setItems((prevItems) => {
      const newItems = [...prevItems, newItem];
      saveItems(newItems);
      return newItems;
    });
  };

  const toggleSelection = (id: string) => {
    setItems((prevItems) => {
      const newItems = prevItems.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      );
      saveItems(newItems);
      return newItems;
    });
  };

  const deleteItem = (id: string) => {
    setPrevState(items);
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== id);
      saveItems(newItems);
      return newItems;
    });
  };

  const deleteSelectedItems = () => {
    setPrevState(items);
    setItems((prevItems) => {
      const newItems = prevItems.filter((item) => !item.selected);
      saveItems(newItems);
      return newItems;
    });
  };

  const undoLastChange = () => {
    setItems(prevState);
    saveItems(prevState);
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
