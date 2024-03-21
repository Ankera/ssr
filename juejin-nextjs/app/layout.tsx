import "./globals.css";

export default function Layout({ children, modal }: any) {
  return (
    <html>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
