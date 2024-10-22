import "./globals.css";

export const metadata = {
  title: "Animations",
  description: "Check these animations out",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
