import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "link";

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type LinkButtonProps = BaseProps & {
  href: string;
  external?: boolean;
  ariaLabel?: string;
  anchorProps?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;
};

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

function classNames(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function variantClass(variant: Variant): string {
  if (variant === "secondary") return "btn btn-secondary";
  if (variant === "tertiary") return "btn btn-tertiary";
  if (variant === "link") return "btn btn-link";
  return "btn btn-primary";
}

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const variant = props.variant ?? "primary";
  const classes = classNames(variantClass(variant), props.className);

  if ("href" in props && props.href) {
    const { href, children, external, ariaLabel, anchorProps } = props;

    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      const isExternalWebsite = href.startsWith("http");

      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target={anchorProps?.target ?? (isExternalWebsite ? "_blank" : undefined)}
          rel={anchorProps?.rel ?? (isExternalWebsite ? "noopener noreferrer" : undefined)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const { children, ...buttonProps } = props;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
