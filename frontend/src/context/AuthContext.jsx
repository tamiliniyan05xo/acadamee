import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
    setLoading(false);
  }, []);

  // LOGIN
  const login = async (email) => {
    const stored = JSON.parse(localStorage.getItem("user"));

    if (stored && stored.email === email) {
      setUser(stored);
    } else {
      alert("User not found. Please signup.");
    }
  };

  // SIGNUP
  const signup = async (name, email, password) => {
  const newUser = {
    name,
    email,
    password,
    courses: [],
  };

  localStorage.setItem("user", JSON.stringify(newUser));
  setUser(newUser);
};

  // LOGOUT
  const logout = () => {
    setUser(null);
  };

  // UPDATE NAME
  const updateName = (name) => {
    const updated = { ...user, name };
    setUser(updated);
    localStorage.setItem("user", JSON.stringify(updated));
  };

  // ENROLL COURSE
  const enrollCourse = (title) => {
    const exists = user.courses.find((c) => c.title === title);
    if (exists) return alert("Already enrolled");

    const updated = {
      ...user,
      courses: [...user.courses, { title, progress: 0 }],
    };

    setUser(updated);
    localStorage.setItem("user", JSON.stringify(updated));
  };

  // UPDATE PROGRESS
  const updateProgress = (title, progress) => {
    const updatedCourses = user.courses.map((c) =>
      c.title === title ? { ...c, progress } : c
    );

    const updated = { ...user, courses: updatedCourses };

    setUser(updated);
    localStorage.setItem("user", JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        signup,
        logout,
        updateName,
        enrollCourse,
        updateProgress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);