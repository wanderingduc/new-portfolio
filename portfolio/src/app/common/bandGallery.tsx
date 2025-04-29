import styles from "./bandGallery.module.css";

interface Item {
    img: string;
    name: string;
    desc: string;
}

function BandGallery() {

    //For future integration of fetch
    const data: Array<Item> = [{'img': '', 'name': 'name1', 'desc': 'desc of name1'}, {'img': '', 'name': 'name2', 'desc': 'desc of name2'}, {'img': '', 'name': 'name3', 'desc': 'desc of name3'}, {'img': '', 'name': 'name4', 'desc': 'desc of name4'}]

    return (
        <div className={styles.container}>
            {data.map((item) => {
                return (
                <div className={styles.itemContainer} >
                    <div className={styles.itemTextContainer} >
                        <h4 className={styles.itemName} >{item.name}</h4>
                        <p className={styles.itemDesc} >{item.desc}</p>
                    </div>
                    <img className={styles.itemImage} src={item.img} alt="Picture describing the name" />
                </div>)
            })}
        </div>
    )

}

export default BandGallery;
