'use client';
import { Provider } from "react-redux";
import { useEffect } from "react";
import "../styles/globals.css"
import { store } from "@/store";

export default function RootLayout({ children }) {
  useEffect(() => {
    document.title = "Inlaze"; // Aquí cambias el título dinámicamente
  }, []);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}