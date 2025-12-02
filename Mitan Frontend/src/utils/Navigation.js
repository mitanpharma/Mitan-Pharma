import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useAuthNavigation = () => {
  const navigate = useNavigate();

  const login_Navigate = () => {
    toast("Welcome To Login!", {
      icon: "👏",
    });
    navigate("/login");
  };
  const Signup_Navigate = () => {
    toast.success("Welcome To Signup!");
    navigate("/signup");
  };
  const Render = () => {
    toast.success("Welcome Back!", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
    navigate("/render");
  };
  const Admin_Navigate = () => navigate("/admin");

  return { login_Navigate, Signup_Navigate, Admin_Navigate, Render };
};
