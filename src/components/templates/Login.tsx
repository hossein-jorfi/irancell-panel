import { useEffect } from "react";
import { useUsersStore } from "../../store";
import { Link } from "react-router-dom";

const Login = () => {
  const users = useUsersStore((state) => state.users);
  const fetchUsers = useUsersStore((state) => state.fetchData);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="px-5 md:px-10 xl:container">
      <div className="flex flex-col justify-center items-center mt-20 border-2 rounded-xl divide-y-2">
        {users.length === 0
          ? "Loading..."
          : users.map((item) => (
              <div
                key={item.id}
                className="w-full flex justify-between items-center py-10 px-7"
              >
                {/* Mobile */}
                <div className="flex flex-col sm:hidden">
                  <p>
                    {item.firstname} {item.lastname}
                  </p>
                  <p>{item.phone}</p>
                </div>
                {/* Mobile */}
                {/* Desktop */}
                <p className="hidden sm:block">
                  {item.firstname} {item.lastname}
                </p>
                <p className="hidden sm:block">{item.phone}</p>
                {/* Desktop */}
                <Link
                  to={"/?token=10"}
                  className="p-2 bg-gold-400 text-white rounded-xl"
                >
                  ورود
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Login;
