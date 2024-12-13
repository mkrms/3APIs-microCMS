import classNames from "classnames";
import { FC, ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "gray" | "white";
  href?: string;
}

const Button: FC<ButtonProps> = ({
  color = "gray",
  children,
  className,
  href,
  ...props
}) => {
  return (
    <button className={classNames(
      styles['c-button'],
      styles[color],
      className
    )} {...props}>
      <a href={href}>
        {children}
      </a>
    </button>
  )
}

export default Button;