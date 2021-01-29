   
import * as lodash from 'lodash';
  
export default class CommonUtility{

    static getIconsFromLocalAssets = (item:any):string => {
        let folderIconLocation:string = require('../webparts/homeTiles/icons/folder-icon.png');
        let toolIconLocation:string = require('../webparts/homeTiles/icons/tool-icon.png');
        if (item.type == "file") {            
            const fileSplit = item.title.split('.');  
            if(fileSplit.length > 1 ){          
              const fileExtension = fileSplit.pop();
               return  `https://static2.sharepointonline.com/files/fabric/assets/item-types/16/${fileExtension}.svg`;
            }
            else{
                return "";
            }    
        
        }else if(item.type == "folder"){
            return folderIconLocation;
        }else if(item.type == "tool"){
            return toolIconLocation;
        }else{
            return "";
        }
    }
    static getFileTypeName =(item:any) =>{
        let fileType = "";
        if(item.type == "file"){
            let fileNames = item.title.split('.');
            fileType =  fileNames.pop();
        }
        else{
            if(item.type=="folder"){
                fileType = "folder";
            }
            else{
                fileType ="tool";
            }
        }
        return fileType;

    }
    static getDynamicRows(itemCollection , itemCountinRow)
    {
            let colContent =[]; let itemcount = 0 ;   let rowContent =[]; 
            itemCollection.forEach( (element,index) => {
                if(itemcount == 0 ){
                    colContent.push(element);
                    itemcount++;
                }else if(itemcount == itemCountinRow ){
                  rowContent.push(colContent);
                  itemcount =0 ;
                  colContent =[];
                  colContent.push(element);
                  itemcount++;
                }else{
                  colContent.push(element);
                  itemcount++;
                }
                // is lastItem
                if(index == itemCollection.length -1){          
                  rowContent.push(colContent);
                }
            });
            console.log(rowContent);
            return rowContent;        
        
    }




 
    
    static getNavigations(){
        const dummyNav = [{Title:"Header1",GlobalNavUrl:"http://google.com",Id:"1",GlobalNavOpenInNewWindow:true,GlobalNavParent:""},
        {Title:"Header2",GlobalNavUrl:"http://google.com",Id:"2",GlobalNavOpenInNewWindow:true,GlobalNavParent:""},
        {Title:"Header3",GlobalNavUrl:"http://google.com",Id:"3",GlobalNavOpenInNewWindow:true,GlobalNavParent:""},
        {Title:"SubHeader1",GlobalNavUrl:"http://google.com",Id:"4",GlobalNavOpenInNewWindow:true,GlobalNavParent:"Header1"},
        {Title:"SubHeader2",GlobalNavUrl:"http://google.com",Id:"5",GlobalNavOpenInNewWindow:true,GlobalNavParent:"Header1"},
        {Title:"SubHeader3",GlobalNavUrl:"http://google.com",Id:"6",GlobalNavOpenInNewWindow:true,GlobalNavParent:"Header1"},
        {Title:"SubHeader1",GlobalNavUrl:"http://google.com",Id:"7",GlobalNavOpenInNewWindow:true,GlobalNavParent:"Header2"},
        {Title:"SubHeader2",GlobalNavUrl:"http://google.com",Id:"8",GlobalNavOpenInNewWindow:true,GlobalNavParent:"Header2"},
        {Title:"SubSubHeader2",GlobalNavUrl:"http://google.com",Id:"9",GlobalNavOpenInNewWindow:true,GlobalNavParent:"SubHeader2"}];



return dummyNav;
    }
}