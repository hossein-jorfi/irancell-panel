import { useUsersStore } from "../../store";

const Login = () => {
  const users = useUsersStore((state) => state.users);
  const fetchUsers = useUsersStore((state) => state.fetchData);

  fetchUsers("http://localhost:3000/api/users");

  return (
    <div className="px-10 xl:container">
      <div className="flex flex-col justify-center items-center mt-20 border-2 rounded-xl">
        {users.length === 0
          ? "Loading..."
          : users.map((item) => <div key={item.id} className="w-full flex justify-center m7-10">{item.firstname}</div>)}
      </div>
    </div>
  );
};

export default Login;
