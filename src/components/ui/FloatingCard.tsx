import type { ReactNode } from "react";

export default function FloatingCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`absolute rounded-2xl bg-white p-4 backdrop-blur-[10px] ${className}`}>
      {children}
    </div>
  );
}