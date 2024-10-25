import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { PostLoginArgs } from "../../api/postLogin";
import { useLogin } from "../../hooks/useLogin";

export default function LoginMain() {
  const [form, setForm] = useState<PostLoginArgs>({
    username: "admin",
    email: "admin@gmail.com",
    password: "admin12345",
  });
  const { mutate: login, isPending } = useLogin();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (form.username === "" || form.email === "" || form.password === "") {
      toast("Please fill in all fields.");
      return;
    }

    login(form);
  };

  return (
    <div className="w-full md:w-[500px] border rounded-md">
      <div className="overflow-y-auto max-h-[calc(100vh-50px)] py-6 px-12">
        <img src="/images/icon.png" className="w-[80px] h-[80px] mx-auto" />
        <div className="mt-6 space-y-2 px-8">
          <button className="btn btn-outline w-full">
            <img src="/images/google-icon.png" className="w-8 h-8" />
            <div>Sign in with Google</div>
          </button>
          <button className="btn btn-outline w-full">
            <img src="/images/microsoft-icon.png" className="w-8 h-8" />
            Sign in with Microsoft
          </button>
          <button className="btn btn-outline w-full">
            <img src="/images/github-icon.png" className="w-8 h-8" />
            Sign in with Github
          </button>
        </div>
        <form action="" className="mt-8" onSubmit={handleLogin}>
          <div className="space-y-6">
            <input
              type="text"
              className="input input-bordered w-full"
              required={true}
              placeholder="Username *"
              value={form?.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <input
              type="text"
              className="input input-bordered w-full"
              required={true}
              placeholder="Email *"
              value={form?.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="password"
              className="input input-bordered w-full"
              required={true}
              placeholder="Password *"
              value={form?.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  id="remember-me"
                />
                <label className="font-medium mr-auto" htmlFor="remember-me">
                  Remember me
                </label>
                <a href="#" className="text-blue-500">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                {isPending ? (
                  <div className="loading loading-spinner"></div>
                ) : (
                  <>Login</>
                )}
              </button>
              <div>
                <div>
                  Don't have an account?{" "}
                  <Link to="/register" className="text-blue-500">
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
