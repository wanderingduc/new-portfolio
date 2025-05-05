import styles from './project.module.css';

interface ProjectProp {
    name: string;
    desc: Array<string>;
    imgs: Array<string>;
}

function Project(props: ProjectProp) {


    return (

        <div className={styles.container} >
            <h1 className={styles.header} >{props.name}</h1>
            {props.desc.map((desc) => {
            return <p className={styles.desc} >{desc}</p>
            })}
            <div className={styles.imgContainer} >
                {props.imgs.map((img) => {
                    return <img key={props.name} className={styles.img} src={img} alt='Picture from project' />
                })}
            </div>
        </div>

    )

}

export default Project;
