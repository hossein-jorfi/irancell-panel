import { create } from "zustand";

const store = create((set) => ({
  message: "Hello World",
  updateMessage: (message) => set({ message: message }),
}));
