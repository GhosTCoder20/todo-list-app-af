import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <div className="flex">
      <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-all hover:text-accent-foreground h-9 px-4 py-2 has:[&_svg]:px-3 text-grey-600 dark:text-[#A0A0A0] hover:bg-grey-100 hover:text-black dark:hover:bg-[#2A2A2]">Login</Link>
      <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3 bg-gradient-to-r from-[#00C2A8] via-[#00B89F] to-[#9B6BFF] hover:from-[#00A892] hover:via-[#00A68F] hover:to-[#7C4DFF] text-white shadow-lg">
        Signup
      </Link>
    </div>
  );
};
export default LoginBtn;
