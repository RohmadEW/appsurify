import { Link } from "react-router-dom";

export default function LoginMain() {
  return (
    <div className="py-6 px-12 w-full md:w-[500px] border rounded-md">
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
      <form action="" className="mt-8">
        <div className="space-y-6">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Email *"
          />
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Password *"
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
            <button className="btn btn-primary w-full">Login</button>
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
  );
}
