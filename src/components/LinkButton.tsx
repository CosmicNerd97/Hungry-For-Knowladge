import Link from "next/link";
import styles from "@/styles/LinkButton.module.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
      {props.variant === "block" && (
        <span className={styles.arrow} style={{ zIndex: 4 }}>
          <FontAwesomeIcon icon={faArrowRight} width={"20px"} />
        </span>
      )}
      <h5 style={{ zIndex: 5 }}>{props.children}</h5>
    </Link>
  );
}
