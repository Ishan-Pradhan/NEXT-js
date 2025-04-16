import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

console.log(josefin);

export const metadata = {
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome - The Wild Oasis",
  },
  description:
    "Luxurirous cabin hotel, located in the heart of the Italian Dolomites, surrounded by stunning mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen antialiased flex flex-col relative`}
      >
        <Header />
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
