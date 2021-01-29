import * as React from 'react';
import styles from './HomeTiles.module.scss';
import { IHomeTilesProps } from './IHomeTilesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { MsCards } from '../components/Cards';
import * as lodash from 'lodash';
import CommonUtility from '../../../Utility/common';


export default class HomeTiles extends React.Component<IHomeTilesProps, any> {
    constructor(props) {
        super(props);
        this.state = { val: [] }
    }
    componentDidMount() {
        const dummyVal = [{
            "title": "Project Mandate Request",
            "url": "https://google.com",
            "category": "Governance",
            "categoryUrl": "https://google.com",
            "type": "tool"
        },
        {
            "title": "Project Mandate Request1",
            "url": "https://google.com",
            "category": "Governance",
            "categoryUrl": "https://google.com",
            "type": "tool"
        },
        {
            "title": "Project Mandate Request2",
            "url": "https://google.com",
            "category": "Governance",
            "categoryUrl": "https://google.com",
            "type": "tool"
        },

        {
            "title": "Agile Documents",
            "url": "https://google.com",
            "category": "Governance",
            "categoryUrl": "https://google.com",
            "type": "folder"
        },
        {
            "title": "Overview Report.docx",
            "url": "https://google.com",
            "category": "Governance",
            "categoryUrl": "https://google.com",
            "type": "file"
        },
        {
            "title": "External.pdf",
            "url": "https://google.com",
            "category": "Governance Calender",
            "categoryUrl": "https://google.com",
            "type": "file"
        },
        {
            "title": "Internal.pdf",
            "url": "https://google.com",
            "category": "Governance Calender",
            "categoryUrl": "https://google.com",
            "type": "file"
        },
        {
            "title": "HIgh level RACI.xlsx",
            "url": "https://google.com",
            "category": "RACIdsfsdsfdfsfdsfdsfdsfsdfsdfsfsf",
            "categoryUrl": "https://google.com",
            "type": "file"
        },
        {
            "title": "HIgh level RACI.xlsx",
            "url": "https://google.com",
            "category": "RACIYY",
            "categoryUrl": "https://google.com",
            "type": "file"
        },
        {
            "title": "HIgh level RACI.xlsx",
            "url": "https://google.com",
            "category": "RACIXX",
            "categoryUrl": "https://google.com",
            "type": "file"
        }

        ];
        //apply groupBy using lodash library
        var items = lodash.groupBy(dummyVal, c => c.category);
        console.log(items);
        let arranegedValue = [];
        for (let cat in items) {
            let tile: any = {};
            tile.items = items[cat];
            // with valid category
            if (tile.items.length > 0) {
                const categoryObj: any = tile.items[0];
                tile.title = categoryObj.category;
                tile.url = categoryObj.categoryUrl;
                arranegedValue.push(tile);
            }
        }
        console.log(arranegedValue);
        this.setState({ val: arranegedValue });

    }


    // CreateRowContent(maxTileCount) {
    //     let rowContentArrays = CommonUtility.getDynamicRows(this.state.val, this.props.noOfTilesInRow);
    //     let tilesPerRow = rowContentArrays.map((row) => {
    //         let tilesInRow = row.map(tile => <Cards item={tile}></Cards>);
    //         return <div className={styles.cardColumn}>{tilesInRow}></div>
    //     });

    //     return <div className={styles.row}>{tilesPerRow}</div>
    // }

    public render(): React.ReactElement<IHomeTilesProps> {
        return (
            <div className={styles.homeTiles}>
                <div className={styles.container}>
                    <div className={styles.row}>
                        {this.state.val.map(i => <MsCards item={i}></MsCards>)}
                    </div>
                </div>
            </div>
        );
    }
}
