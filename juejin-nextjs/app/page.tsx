import Link from "next/link";
import Image from "next/image";
import { photos } from "./data";
import { resolve } from "path";

export const revalidate = 10

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap">
      <h1>{new Date().toLocaleTimeString()}</h1>
      {photos.map(({ id, src }) => (
        <Link key={id} href={`/photo/${id}`}>
          <picture>
          <img width="200" src={src} className="m-1" alt="" />
          </picture>
        </Link>
      ))}
    </main>
  );
}