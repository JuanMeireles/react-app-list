import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lista de tarefas",
  description: "Juan lista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Layout />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
