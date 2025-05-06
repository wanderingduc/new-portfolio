import styles from "./bandGallery.module.css";

interface Item {
    img: string;
    name: string;
    desc: string;
    url: string | null;
}

function BandGallery() {

    //For future integration of fetch
    const data: Array<Item> = [{'img': '/featureplaceholder.png', 'name': 'Jet Engine Controll and Monitoring', 'desc': 'Made a controll and monitoring system for a KingTech K180 G5 jet engine', 'url': null}, {'img': '/featureplaceholder.png', 'name': 'Stock Analysis Program', 'desc': 'Made an analysis program for analyzing stocks and giving buy/sell recomendations for a client', 'url': 'https://github.com/wanderingduc/tt'}, {'img': '/featureplaceholder.png', 'name': 'Honbako', 'desc': 'An app for cataloging and sharing books between peers', 'url': 'https://github.com/wanderingduc/yomiya-mobile'}, {'img': '/featureplaceholder.png', 'name': 'Custom Mechanical Keyboards', 'desc': 'Designed and prototyped multiple mechanical keyboards', 'url': null}]
    https://github.com/wanderingduc/yomiya-mobile
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Projects</h2>
            {data.map((item) => {
                return (
                    <div key={item.name} className={styles.itemContainer} >
                        <div className={styles.itemTextContainer} >
                            <h4 className={styles.itemName} >{item.name}</h4>
                            <p className={styles.itemDesc} >{item.desc}</p>
                            {item.url ? <a className={styles.itemLink} href={item.url} target="_blank" >Github</a> : null}
                        </div>
                        <img className={styles.itemImage} src={item.img} alt="Picture of project" />
                    </div>
                )
            })}
        </div>
    )

}

export default BandGallery;
