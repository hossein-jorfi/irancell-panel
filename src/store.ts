import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type users = {
  users: any[];
};
type Action = {
  fetchData: (url: string) => void;
};
const usersStore = (set) => ({
  users: [],
  fetchData: async (url) => {
    const response = await fetch(url);
    set({
      users: await response.json(),
    });
  },
});
const useUsersStore = create<users & Action>()(usersStore);

type dataTodos = {
  todos: any[];
};
type dataAction = {
  fetchData: (url: string) => void;
};
const dataStore = (set) => ({
  todos: [],
  fetchData: async (url) => {
    const response = await fetch(url);
    set({
      todos: await response.json(),
    });
  },
});

const useDataStore = create<dataTodos & dataAction>()(
  devtools(persist(dataStore, { name: "data" }))
);

export { useUsersStore };
