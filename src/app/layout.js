import "./globals.css";

export const metadata = {
  title: "Occupational Infrastructure",
  description: "Occupational Infrastructure by 10 artists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
