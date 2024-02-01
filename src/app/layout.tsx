import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";

export const metadata: Metadata = {
  title: "Continental Weather Service",
  description:
    "Continental Weather Service can make your life a lot easier by providing you with accurate weather forecasts and timely updates.",
  metadataBase: new URL("https://continentalweather.com"),
  keywords: ["Continental Weather Service", "meteorologist", "weather service"],
  openGraph: {
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          {children}
          <Notifications />
        </MantineProvider>
      </body>
    </html>
  );
}
