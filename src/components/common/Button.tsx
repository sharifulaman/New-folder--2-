import type { ComponentType, MouseEventHandler, ReactNode } from "react";

export type IconComponent = ComponentType<{ size?: number | string; "aria-hidden"?: boolean }>;

type ButtonVariant = "primary" | "secondary" | "dark";

interface ButtonProps {
  as?: "a" | "button";
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  icon?: IconComponent;
  iconPosition?: "leading" | "trailing";
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  className?: string;
  target?: string;
  rel?: string;
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  dark: "btn btn-dark",
};

export default function Button({
  as = "a",
  href,
  type = "button",
  variant = "primary",
  icon: Icon,
  iconPosition = "trailing",
  children,
  onClick,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const classes = `${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${className}`.trim();
  const content = (
    <>
      {Icon && iconPosition === "leading" ? <Icon size={16} aria-hidden={true} /> : null}
      <span>{children}</span>
      {Icon && iconPosition === "trailing" ? <Icon size={16} aria-hidden={true} /> : null}
    </>
  );

  if (as === "a") {
    return (
      <a href={href} className={classes} onClick={onClick} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  );
}
