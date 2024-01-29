import { Inter } from "next/font/google";
import StoreProvider from "./StoreProvider";
import { Suspense } from "react";
import { NavigationEvents } from "@/components/NavigationEvents/NavigationEvents";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Voshod, test app",
  description: "Тестовое задание на должность frontend разработчика",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>{children}
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </StoreProvider>
      </body>
    </html>
  );
}
