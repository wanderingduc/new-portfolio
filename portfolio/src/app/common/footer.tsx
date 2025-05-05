import styles from './footer.module.css';

interface FooterProp {
    text: string | null;
}

function Footer(props: FooterProp) {
    
    return (
        <div className={styles.footer}>
            <p className={styles.footerText}>{props.text}</p>
        </div>
    )

}

export default Footer;
