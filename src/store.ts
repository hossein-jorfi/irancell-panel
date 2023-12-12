import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type users = {
  users: any[];
};
type Action = {
  fetchData: () => void;
};
const usersStore = (set) => ({
  users: [],
  fetchData: async () => {
    const response = await fetch("http://localhost:3000/api/users");
    set({
      users: await response.json(),
    });
  },
});
const useUsersStore = create<users & Action>()(usersStore);

type user = {
  user: any;
};
type userAction = {
  fetchUser: (token) => void;
};
const userStore = (set) => ({
  user: null,
  fetchUser: async (token) => {
    const response = await fetch("http://localhost:3000/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    });
    set({
      user: await response.json(),
    });
  },
});
const useUserStore = create<user & userAction>()(userStore);

export default useUserStore;
