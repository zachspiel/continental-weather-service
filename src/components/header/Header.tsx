"use client";

import { Container, Group, Burger, Paper, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import classes from "./header.module.css";

const links = [
  { link: "#about", label: "About" },
  { link: "#referrals", label: "Referrals" },
  { link: "#contactUs", label: "Contact Us" },
];

const HeaderSimple = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" fluid className={classes.inner}>
        <Image
          src="/assets/images/logo.png"
          height={80}
          width={80}
          alt="Continental Weather Service Logo"
        />

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles): JSX.Element => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </header>
  );
};

export default HeaderSimple;
