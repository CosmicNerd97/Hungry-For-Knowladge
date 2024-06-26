"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "@/styles/BreadCrumb.module.sass";
import { Box } from "@mui/material";
import Link from "next/link";

export default function BreadCrumbs() {
  const path = usePathname();
  const router = useRouter();
  console.log();
  const ragex = /\/([^/]+)/g;
  const segments = path.match(ragex) || [];
  console.log(segments);
  const UppercaseSagments = ["Home"];
  segments
    .filter((segment) => segment !== "")
    .map((segment) => UppercaseSagments.push(segment.replace("/", "")));
  return (
    <>
      <ul className={styles["bread"]}>
        {UppercaseSagments.map((segment, index) => (
          <Box key={index} className={styles["crumb-container"]}>
            <li className={styles["crumb"]}>
              <Link
                href={`/${UppercaseSagments.slice(
                  1,
                  UppercaseSagments.indexOf(segment) + 1
                ).join("/")}`}
              >
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            </li>
            <li className={styles["slash"]}>
              <Link
                href={`/${UppercaseSagments.slice(
                  1,
                  UppercaseSagments.indexOf(segment) + 1
                ).join("/")}`}
              >
                /
              </Link>
            </li>
          </Box>
        ))}
      </ul>
    </>
  );
}
