import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const styles =
    variant === "primary"
      ? "bg-lime-400 text-gray-950 hover:brightness-95"
      : "text-gray-50 hover:opacity-80";
  return (
    <button
      className={`rounded-3xl px-6 py-3 text-lg font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${styles} ${className}`}
      {...props}
    />
  );
}