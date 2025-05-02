import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./common/nav";
import Banner from "./common/banner";
import BandGallery from "./common/bandGallery";
import FadeInOnScrollWrapper from "./common/fadeInWrapper";


export default function Home() {
  return (
    <>
      <Nav />
      <FadeInOnScrollWrapper>
      <Banner />
      </FadeInOnScrollWrapper>
      <FadeInOnScrollWrapper>
      <BandGallery />
      </FadeInOnScrollWrapper>
    </>
  );
}
