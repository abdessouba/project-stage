import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./Provider";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
axios.defaults.baseURL = "http://localhost:8000/";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" text-black">
        <AuthProvider>
          <div>
            <Toaster position="top-center" />
            <NavBar />
            <div className="">{children}</div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
