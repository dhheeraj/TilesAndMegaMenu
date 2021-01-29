import IGlobalNavItem from "../modal/IGlobalNavItem";
import ISPGlobalNavItem from "../modal/ISPGlobalNavItem";
//import "@pnp/polyfill-ie11";
//import { sp } from "@pnp/sp";
import CommonUtility from '../../../../../Utility/common';
export default class GlobalNavProvider {
  constructor() {
    // sp.setup({
    //   sp: {
    //     headers: {
    //       Accept: "application/json;odata=verbose"
    //     },
    //     baseUrl: `${window.location.protocol}//${window.location.hostname}`
    //   }
    // });
  }

  public async getGlobalNavigation(): Promise<IGlobalNavItem[]> {
    // const results = await sp.web.lists
    //   .getByTitle("Global Nav List")
    //   .items.select(
    //     "Title",
    //     "Id",
    //     "GlobalNavUrl",
    //     "GlobalNavOpenInNewWindow",
    //     "GlobalNavParent/Title"
    //   )
    //   .top(2000)
    //   .expand("GlobalNavParent")
    //   .orderBy("GlobalNavOrder")
    //   .orderBy("Title")
    //   .get();
    // return this.parseGlobalNavigationNodes(results);

    let navs = CommonUtility.getNavigations();
    return this.parseGlobalNavigationNodes(navs);
  }

  private parseGlobalNavigationNodes(spGlobalNavItems: ISPGlobalNavItem[]): Promise<IGlobalNavItem[]> {
    return new Promise((resolve, reject) => {
      let depth: number = 0;
      let globalNavItems: IGlobalNavItem[] = [];
      spGlobalNavItems.forEach(
        (item: ISPGlobalNavItem): void => {
          if (!item.GlobalNavParent) {
            globalNavItems.push({
              title: item.Title,
              id: item.Id,
              url: item.GlobalNavUrl,
              openInNewWindow: item.GlobalNavOpenInNewWindow,
              subNavItems: this.getSubNavItems(spGlobalNavItems, item.Title, depth + 1),
              level: depth
            });
          }
        }
      );
      resolve(globalNavItems);
    });
  }

  private getSubNavItems(
    spNavItems: ISPGlobalNavItem[],
    filter: string,
    depth: number
  ): IGlobalNavItem[] {
    let subNavItems: IGlobalNavItem[] = [];
    spNavItems.forEach(
      (item: ISPGlobalNavItem): void => {
        if (item.GlobalNavParent && item.GlobalNavParent === filter) {
          subNavItems.push({
            title: item.Title,
            id: item.Id,
            url: item.GlobalNavUrl,
            openInNewWindow: item.GlobalNavOpenInNewWindow,
            subNavItems: this.getSubNavItems(spNavItems, item.Title, depth + 1),
            level: depth
          });
        }
      }
    );
    return subNavItems.length > 0 ? subNavItems : null;
  }
}