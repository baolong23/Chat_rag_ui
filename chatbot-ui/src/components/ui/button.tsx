// components/ui/button.tsx
import { cn } from "./utils";
import React from "react";

type Variant = "default" | "outline";
type Size = "default" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition",
        // variant styles
        variant === "outline"
          ? "border border-gray-300 bg-transparent hover:bg-gray-100"
          : "bg-blue-600 text-white hover:bg-blue-700",
        // size styles
        size === "icon"
          ? "p-2"
          : "px-4 py-2",
        // disabled state
        props.disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
}
