import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { PostRegisterArgs } from "../../api/postRegister";
import { useRegister } from "../../hooks/useRegister";

export default function RegisterMain() {
  const [form, setForm] = useState<PostRegisterArgs>({
    username: "admin",
    email: "admin1@gmail.com",
    password1: "admin12345",
    password2: "admin12345",
  });
  const { mutate: register, isPending } = useRegister();

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      form.username === "" ||
      form.email === "" ||
      form.password1 === "" ||
      form.password2 === ""
    ) {
      toast("Please fill in all fields.");
      return;
    }

    if (form.password1 !== form.password2) {
      toast("Passwords do not match.");
      return;
    }

    register(form);
  };

  return (
    <div className="w-full md:w-[500px] border rounded-md">
      <div className="overflow-y-auto max-h-[calc(100vh-50px)] py-6 px-12">
        <img src="/images/icon.png" className="w-[80px] h-[80px] mx-auto" />
        <div className="text-3xl mt-4 text-center">Sign Up</div>
        <div className="mt-6 space-y-2 px-8">
          <button className="btn btn-outline w-full">
            <img src="/images/google-icon.png" className="w-8 h-8" />
            <div>Sign up with Google</div>
          </button>
          <button className="btn btn-outline w-full">
            <img src="/images/microsoft-icon.png" className="w-8 h-8" />
            Sign up with Microsoft
          </button>
          <button className="btn btn-outline w-full">
            <img src="/images/github-icon.png" className="w-8 h-8" />
            Sign up with Github
          </button>
        </div>
        <form action="" className="mt-6" onSubmit={handleRegister}>
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
              value={form?.password1}
              onChange={(e) => setForm({ ...form, password1: e.target.value })}
            />
            <input
              type="password"
              className="input input-bordered w-full"
              required={true}
              placeholder="Password *"
              value={form?.password2}
              onChange={(e) => setForm({ ...form, password2: e.target.value })}
            />
            <button type="submit" className="btn btn-primary w-full">
              {isPending ? (
                <div className="loading loading-spinner"></div>
              ) : (
                <>Sign Up</>
              )}
            </button>
            <Link to="/" className="btn btn-ghost w-full">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
