import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

export default function RegisterMain() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <div>
      <button onClick={handleLogin}>Register</button>
    </div>
  );
}
