import styles from "./banner.module.css";

function Banner() {

    return (
        <div className={styles.container} >
            <div className={styles.headerContainer} >
                <h1 className={styles.headerTitle} >Placeholder</h1>
                <h3 className={styles.headerText} >Some text to describe the placeholder text for a while</h3>
            </div>
            {/* <div className={styles.img} >
                A BIG PLACEHOLDER
            </div> */}
        </div>
    )

}

export default Banner;
