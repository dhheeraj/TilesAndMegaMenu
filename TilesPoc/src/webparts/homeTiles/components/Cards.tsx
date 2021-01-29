import * as React from 'react';
import styles from './HomeTiles.module.scss';
import CommonUtility from '../../../Utility/common';


// handle click on tiles header
const handleClick = (url) => {
    if (url != "")
        window.location.href = url;
}

// get fabric icons based on file type
const getIcons = (type) => {
    switch (type.toLowerCase()) {
        case "ppt":
            return <i className="ms-Icon ms-Icon--PowerPointDocument" aria-hidden="true"></i>;
        case "docx":
            return <i className="ms-Icon ms-Icon--WordDocument" aria-hidden="true"></i>
        case "pdf":
            return <i className="ms-Icon ms-Icon--PDF" aria-hidden="true"></i>
        case "xlsx":
            return <i className="ms-Icon ms-Icon--ExcelDocument" aria-hidden="true"></i>
        case "folder":
            return <i className="ms-Icon ms-Icon--FabricFolder" aria-hidden="true"></i>
        case "tool":
            return <i className="ms-Icon ms-Icon--DeveloperTools" aria-hidden="true"></i>
        default:
            return <i className="ms-Icon ms-Icon--TextDocument" aria-hidden="true"></i>
    }
}


export const MsCards = (props) => {
    return <div className={styles.msCardsContainer}>
        <div className={styles.msCards}>
            <div className={styles.msCardTitle} title={props.item.title} onClick={(e) => handleClick(props.item.url)}>{props.item.title}</div>
            <div className={styles.msCardBody}>
                {props.item.items.map((i: any, index: number) => {
                    let filetType = CommonUtility.getFileTypeName(i);
                    let fileIconn = getIcons(filetType);
                    return <div key={index} className={styles.msCardItem}>
                        {fileIconn}
                        <span title={i.title}><a href={i.url}>{i.title}</a></span>
                    </div>
                })}
            </div>
        </div>
    </div>
}
