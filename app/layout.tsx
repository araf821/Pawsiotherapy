import getCurrentUser from "./actions/getCurrentUser";
import LoginModal from "./components/modal/LoginModal";
import Modal from "./components/modal/Modal";
import RegisterModal from "./components/modal/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pawsiotherapy",
  description: "Therapy sessions through the help of animals.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <div>{children}</div>
      </body>
    </html>
  );
}
