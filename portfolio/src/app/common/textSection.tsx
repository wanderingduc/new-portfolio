import styles from './textSection.module.css';

interface buttonProp {
    download: boolean;
    text: string | null;
    href: string
}

interface textProp {
    title: string | null;
    text: string | null;
    button: buttonProp;
}

function TextSection(props: textProp) {


    if(props.button){
        if(props.button.download){
            return (
                <div className={styles.container}>
                    <h2 className={styles.header}>{props.title}</h2>
                    <p className={styles.text}>{props.text}</p>
                    <a className={styles.buttonContainer} href={props.button.href} download={true}>
                        <button className={styles.downloadButton}>
                                <p className={styles.buttonText}>{props.button.text}</p>
                                <span className={styles.materialSymbolsOutlined}>download</span>
                        </button>
                    </a>
                </div>
            )
        }
        return (
            <div className={styles.container}>
                <h2 className={styles.header}>{props.title}</h2>
                <p className={styles.text}>{props.text}</p>
                <a className={styles.buttonContainer} href={props.button.href} target='blank_' >
                    <button className={styles.button}>
                            <p className={styles.buttonText}>{props.button.text}</p>
                    </button>
                </a>
            </div>
        )
    }


    return(
        <div className={styles.container}>
            <h2 className={styles.header}>{props.title}</h2>
            <p className={styles.text}>{props.text}</p>
        </div>
    )

}

export default TextSection;