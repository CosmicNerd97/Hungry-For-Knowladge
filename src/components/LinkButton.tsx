import Link from "next/link";
import styles from "@/styles/LinkButton.module.sass";

export default function LinkButton(props: any) {
  return (
    <Link
      style={
        props.variant === "block"
          ? {}
          : {
              textDecoration: "none",
              height: "fit-content",
              fontSize: "20px",
            }
      }
      href={props.href}
      className={`${styles["link-button"]} ${
        props.variant === "block" && styles["link-block"]
      }`}
    >
      {props.children}
    </Link>
  );
}
