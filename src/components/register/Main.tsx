import { Link } from "react-router-dom";

export default function RegisterMain() {
  return (
    <div className="w-full md:w-[500px] border rounded-md">
      <div className="overflow-y-auto max-h-[calc(100vh-100px)] py-6 px-12">
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
        <form action="" className="mt-6">
          <div className="space-y-6">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Name *"
            />
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Last Name *"
            />
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Email *"
            />
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Company *"
            />
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password *"
            />
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Re-enter Password *"
            />
            <button className="btn btn-primary w-full">Sign Up</button>
            <Link to="/" className="btn btn-ghost w-full">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
