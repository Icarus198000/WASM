import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Commune-wasm",
  description: "Commune-wasm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen mx-auto max-w-6xl flex flex-col bg-white 
        dark:bg-gray-900">
        <Provider>
          <main className="flex flex-col flex-1 max-w-6xl w-full  ">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
