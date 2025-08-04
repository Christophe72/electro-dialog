import React from "react";
import "./globals.css";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="fr">
      <body>
        <header>
          <nav>{/* Navigation components can be added here */}</nav>
        </header>
        <main>{children}</main>
        <footer>{/* Footer components can be added here */}</footer>
      </body>
    </html>
  );
};

export default Layout;
