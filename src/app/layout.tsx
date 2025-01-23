import type { Metadata } from "next";
import "./../styles/main.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body
        className='font-yekan box-border font-normal text-base'
      >
        {children}
      </body>
    </html>
  );
}
