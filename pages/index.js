import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>alvarocket</title>
      </Head>
      <main className={styles.main}>
        <h1>Welcome to my app</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/Weather">Weather</Link>
          <Link href="/ToDo">ToDo</Link>
        </nav>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/logo.webp"
            width={375}
            height={375}
          />
        </div>
      </main>
    </>
  );
}
