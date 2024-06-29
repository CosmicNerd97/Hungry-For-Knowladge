import Image from "next/image";
import Hero from "../../public/images/Hero.jpeg";
import style from "@/styles/HeroSection.module.sass";
import { Box, Typography } from "@mui/material";
import LinkButton from "./LinkButton";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroSection() {
  return (
    <section className={style.hero}>
      <Box>
        <Image
          alt="Hero image depicting exploration of the cosmos"
          src={Hero}
          width={500}
          height={100}
          style={{ objectFit: "contain", maxWidth: 1000, maxHeight: 500 }}
          placeholder="blur"
        />
      </Box>
      <Box className={style.heroText}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "35px",
            color: "var(--blue)",
            fontWeight: "bold",
            mt: 7,
            mb: 2,
          }}
        >
          Feed Your Mind, Explore the Cosmos
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            mb: 1,
          }}
        >
          At Hungry for Knowledge, our goal is to help you develop an
          <span style={{ fontWeight: "bold" }}>
            {" "}
            enthusiastic approach
          </span>{" "}
          towards science.
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
          }}
        >
          If you already love science, we aim to make it
          <span style={{ fontWeight: "bold" }}> easier and more fun</span> for
          you to learn.
        </Typography>
        <LinkButton
          borderColor="#000"
          width="180px"
          href="/signup"
          variant="block"
        >
          Get Started
        </LinkButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          position: "absolute",
          bottom: "0px",
          width: "calc(100% - 160px)",
        }}
      >
        <Link style={{ margin: "0 auto 0 auto" }} href="#payments">
          <FontAwesomeIcon icon={faAngleDown} width={"80px"} />
        </Link>
      </Box>
    </section>
  );
}
