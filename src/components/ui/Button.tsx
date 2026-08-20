"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE } from "../../lib/animations";
import { cn } from "../../lib/utils";

type Variant = "primary" | "outline" | "ghost" | "inverse";
type Size = "md" | "lg";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};

type AsAnchor = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    href: string;
  };

type AsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
  };

export type ButtonProps = AsAnchor | AsButton;

type MotionAnchorProps = Omit<
  React.ComponentProps<typeof motion.a>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
>;
type MotionButtonProps = Omit<
  React.ComponentProps<typeof motion.button>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
>;

const PRESS_TRANSITION = { duration: 0.15, ease: EASE };

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blood text-white hover:bg-blood-dark border-brutal shadow-brutal-sm active:shadow-none",
  outline: "bg-transparent text-ink hover:bg-amber border-brutal",
  ghost: "bg-transparent text-ink hover:text-blood underline-offset-4 hover:underline",
  inverse:
    "bg-transparent text-paper hover:bg-amber hover:text-ink border-2 border-paper/50",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 font-body font-bold uppercase tracking-wide transition-all duration-200 ease-out select-none",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  if ("href" in props) {
    const anchorProps = props as AsAnchor;
    return (
      <motion.a
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={PRESS_TRANSITION}
        {...(anchorProps as unknown as MotionAnchorProps)}
      >
        {children}
      </motion.a>
    );
  }

  const buttonProps = props as AsButton;
  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={PRESS_TRANSITION}
      {...(buttonProps as unknown as MotionButtonProps)}
    >
      {children}
    </motion.button>
  );
}