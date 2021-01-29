import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'HomeTilesWebPartStrings';
import HomeTiles from './components/HomeTiles';
import { IHomeTilesProps } from './components/IHomeTilesProps';
import { initializeIcons } from '@uifabric/icons';

export interface IHomeTilesWebPartProps {
  description: string;
  noOfTilesInRow:number;
}

export default class HomeTilesWebPart extends BaseClientSideWebPart<IHomeTilesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHomeTilesProps > = React.createElement(
      HomeTiles,
      {
        description: this.properties.description,
        noOfTilesInRow:this.properties.noOfTilesInRow
      }
    );
    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneTextField('noOfTilesInRow', {
                  label: strings.NumberofTilesFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
