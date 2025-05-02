import styles from "./banner.module.css";

interface BannerProp {
    header: string;
    desc: string | null;
}

function Banner(props: BannerProp) {

    return (
        <div className={styles.container} >
            <div className={styles.headerContainer} >
                <h1 className={styles.headerTitle} >{props.header}</h1>
                <p className={styles.headerText} >{props.desc}</p>
            </div>
            <div className={styles.bob}>
            <span className={styles.materialSymbolsOutlined}>stat_minus_1</span>
            </div>
            {/* <div className={styles.img} >
                A BIG PLACEHOLDER
            </div> */}
        </div>
    )

}

export default Banner;
