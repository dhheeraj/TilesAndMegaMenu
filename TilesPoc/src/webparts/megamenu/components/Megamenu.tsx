import * as React from 'react';
import styles from './Megamenu.module.scss';
import { IMegamenuProps } from './IMegamenuProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Headers from '../components/GlobalNav/GlobalNav';
export default class Megamenu extends React.Component<IMegamenuProps, {}> {
  public render(): React.ReactElement<IMegamenuProps> {
    return (
      <div className={ styles.megamenu }>
        <Headers></Headers>
      </div>
    );
  }
}
