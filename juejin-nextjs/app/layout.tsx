// app/layout.js
import Link from "next/link";

// app/layout.js
export const metadata = {
  title: {
    default: 'home',
    template: '%s | Home'
  }
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <div>
          <Link href="/a">Link to /a</Link>
          <br />
          <Link href="/b">Link to /b</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
