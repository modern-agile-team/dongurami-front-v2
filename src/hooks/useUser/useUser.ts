import { useEffect, useState } from "react";

interface User {
  user: Swagger.Api.AuthGetProfile.RequestBody;
}

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);

  const checkUser = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser) as User);
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
      }
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return {
    user,
  };
}
