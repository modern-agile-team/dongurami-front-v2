import { useEffect, useState } from "react";
import { useAuth } from "..";

interface User {
  id: number;
  majorId: number | null;
  loginType: string;
  snsId: string;
  studentNumber: number | null;
  name: string | null;
  nickname: string;
  email: string | null;
  phoneNumber: string | null;
  grade: number | null;
  gender: string | null;
  profilePath: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const { isLoggedIn } = useAuth();

  const checkUser = async () => {
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
    if (isLoggedIn) {
      setTimeout(() => {
        checkUser();
      }, 300);
      checkUser();
    }
  }, [isLoggedIn]);

  return {
    user,
  };
}
