import state from "sweetalert/typings/modules/state";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type course = { name: string; price: number };
type State = {
  courses: course[];
};
type Action = {
  addCourse: (course: course) => void;
};
const myStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [...state.courses, course],
    }));
  },
});

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

const useMyStore = create<State & Action>()(
  devtools(
    persist(myStore, {
      name: "courses",
    })
  )
);

export default useDataStore;
