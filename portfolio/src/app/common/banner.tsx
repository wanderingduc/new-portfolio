import styles from "./banner.module.css";

function Banner() {

    return (
        <div className={styles.container} >
            <div className={styles.headerContainer} >
                <h1 className={styles.headerTitle} >Placeholder</h1>
                <h3 className={styles.headerText} >Trapped in a world of Object-Oriented Programming &#x1F622;</h3>
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
