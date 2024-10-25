import { useAppDispatch } from "../../hooks/useStore";
import { login } from "../../store/authSlice";

export default function LoginMain() {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
