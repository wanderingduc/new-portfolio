'use client'

import { useState } from 'react';

import styles from './footer.module.css';

interface FooterProp {
    text: string | null;
}

function Footer(props: FooterProp) {

    const [about, setAbout] = useState(false);

    const showAbout = () => {
        setAbout(!about);
    }
    
    return (
        <>
        {about &&
        <>
            <div className={styles.aboutContainer}>
                <h2 className={styles.aboutHeader} >About this website</h2>
                <p className={styles.aboutText}>This website is licensed under the <a href='https://github.com/wanderingduc/new-portfolio/blob/main/LICENSE' target='_blank' >MIT license</a>. Feel free to use the <a href="https://github.com/wanderingduc/new-portfolio/" target='_blank' >source code</a> as you wish.</p>
                <p className={styles.aboutText}>Icons used are <a href="https://fonts.google.com/icons" target='_blank' > Google Material Icons</a> licensed under <a href="https://www.apache.org/licenses/LICENSE-2.0.txt" target='_blank' >Apache License Version 2.0</a></p>
                <a className={styles.closeButton} onClick={() => showAbout()} >Close</a>
            </div>
            <div className={styles.clickContainer} onClick={() => showAbout()} >
            </div>
        </>
        }
        <div className={styles.footer}>
            {/* <p className={styles.aboutButton} onClick={() => showAbout()} >About</p> */}
            <a className={styles.aboutButton} onClick={() => showAbout()}>About</a>
            <p className={styles.footerText}>{props.text}</p>
        </div>
        </>
    )

}

export default Footer;
