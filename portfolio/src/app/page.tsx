import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./common/nav";
import Banner from "./common/banner";
import Gallery from "./common/gallery";

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Gallery />
    </>
  );
}
