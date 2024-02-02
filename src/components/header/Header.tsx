"use client";

import {
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  useComputedColorScheme,
  useMantineColorScheme,
  ActionIcon,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import cx from "clsx";
import Image from "next/image";
import classes from "./header.module.css";
import { IconMoon, IconSun } from "@tabler/icons-react";

const links = [
  { link: "#about", label: "About" },
  { link: "#referrals", label: "Referrals" },
  { link: "#contactUs", label: "Contact Us" },
];

const HeaderSimple = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

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

        <Group>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="transparent"
            size="xl"
            aria-label="Toggle color scheme"
            color="default"
          >
            <IconSun className={cx(classes.icon, classes.dark)} stroke={1.5} />
            <IconMoon
              className={cx(classes.icon, classes.light)}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>

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
