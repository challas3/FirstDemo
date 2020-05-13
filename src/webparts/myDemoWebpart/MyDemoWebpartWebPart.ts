import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './MyDemoWebpartWebPart.module.scss';
import * as strings from 'MyDemoWebpartWebPartStrings';

export interface IMyDemoWebpartWebPartProps {
  description: string;
  Malegender : boolean;
  Femalegender : boolean;
  degree : string;
}

export default class MyDemoWebpartWebPart extends BaseClientSideWebPart <IMyDemoWebpartWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
  <div class="${ styles.myDemoWebpart }">
    <div class="${ styles.container }">
      <div class="${ styles.row }">
        <div class="${ styles.column }">
          <span class="${ styles.title }">Welcome to SharePoint!</span>
          <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
          <p class="${ styles.description }">${escape(this.properties.description)}</p>
          <a href="https://aka.ms/spfx" class="${ styles.button }">
            <span class="${ styles.label }">Learn more</span>
          </a>
        </div>
        <div>s
        </div>
      </div>
    </div>
  </div>`;
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
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              }),
              PropertyPaneCheckbox('Malegender', {
                text: 'Male'
              }),
              PropertyPaneCheckbox('Femalegender', {
                text: 'Female'
              }),
              PropertyPaneDropdown('degree', {
                label: 'Qualification',
                options:[
                  { key: '1', text: 'B.Tech' },
                  { key: '2', text: 'M.Tech' },
                  { key: '3', text: 'BSC' },
                  { key: '4', text: 'B.com' }
                ]
              })
            ]
          }
        ]
      }
    ]
  };
}
}
