import styles from "./nav.module.css";

interface NavProp {
    name: string
}

function Nav(props: NavProp){

    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>{props.name}</h1>
            <ul className={styles.listContainer}>
                <li className={styles.listItem}><a href="https://github.com/wanderingduc">Github</a></li>
                <li className={styles.listItem}><a href="https://www.linkedin.com/in/david-duc-trung-nguyen-a1201a296">LinkedIn</a></li>
            </ul>
        </div>
    )

}

export default Nav;