import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Weather() {
  return (
    <>
      <Head>
        <title>The Weather</title>
      </Head>
      <main className={styles.main}>
        <h1>today is looking good</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/weather">weather</Link>
          <Link href="/ToDo">ToDo</Link>
        </nav>

        <div className={styles.center}></div>
      </main>
    </>
  );
}
