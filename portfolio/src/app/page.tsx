import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./common/nav";
import Banner from "./common/banner";
import BandGallery from "./common/bandGallery";
import FadeInOnScrollWrapper from "./common/fadeInWrapper";
import TextSection from "./common/textSection";


export default function Home() {
  return (
    <>
      <Nav name='David'/>
      <FadeInOnScrollWrapper>
      <Banner header='David Duc-Trung Nguyen' desc='Trapped in a world of Object-Oriented Programming &#x1F622;'/>
      </FadeInOnScrollWrapper>
      <FadeInOnScrollWrapper>
        <TextSection button={{download: false, text: 'Resume', href: '/DavidNguyen-resume-2025.pdf'}}  title='Me' text="I am a third year Computer Science student on a journey to find the limits of technology. With a strong passion for programming and robotics, I am on a quest to blurr the lines between the virtual and real world." />
      </FadeInOnScrollWrapper>
      <FadeInOnScrollWrapper>
      <BandGallery />
      </FadeInOnScrollWrapper>
      <footer className={styles.footer}>
        <p className={styles.footerText}>David Duc-Trung Nguyen 2025</p>
      </footer>
    </>
  );
}
