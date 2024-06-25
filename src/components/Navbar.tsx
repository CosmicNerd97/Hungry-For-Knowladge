import styles from "@/styles/Navbar.module.sass";
import { Box, Typography } from "@mui/material";
import LinkButton from "./LinkButton";
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Typography
        alignContent={"center"}
        textAlign={"center"}
        color={"white"}
        variant="h5"
      >
        Hungry-For-Knowladge
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <LinkButton href="/login">Login</LinkButton>
        <LinkButton
          style={{ fontSize: "20px", color: "white" }}
          href="/sign up"
          variant="block"
        >
          Get Started
        </LinkButton>
      </Box>
    </nav>
  );
}
