import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { FunctionComponent, ReactNode } from "react";

interface AtProps extends LinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  variant?: keyof typeof style;
  external?: boolean;
}
const style = {
  base: "flex select-none items-center gap-1.5 rounded-md text-start text-sm font-medium outline-none transition disabled:opacity-50 px-3 ",
  reset: "",
  anchor: "text-dim font-normal px-0 hover:underline w-fit",
  default:
    "border border-outline hover:border-outlineHover active:bg-washed bg-white text-black py-1.5",
  primary:
    "from-primary to-primary-dark shadow-button bg-gradient-to-t text-white hover:to-[#5B8EFF] py-1.5",
  ghost: "hover:bg-washed text-dim hover:text-black py-1.5",
};

const At: FunctionComponent<AtProps> = ({
  href,
  children,
  className,
  external,
  variant = "reset",
  ...props
}) => {
  return external ? (
    <a
      href={href}
      className={clsx(
        variant !== "reset" && style.base,
        style[variant],
        className
      )}
      onClick={props.onClick}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {children}
    </a>
  ) : (
    <Link
      href={href}
      className={clsx(
        variant !== "reset" && style.base,
        style[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default At;
