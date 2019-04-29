import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { createStore, Store } from 'redux';
import reducer, { IApplicationState } from '../store/system/reducers';
import { voteChess } from '../store/system/actions';

import * as strings from 'ReduxAppWebPartStrings';
import ReduxApp from './components/ReduxApp';
import { IReduxAppWebPartProps } from './IReduxAppWebPartProps';

export interface IFavoritePollProps {
  store: Store<IApplicationState>;
}


export default class ReduxAppWebPart extends BaseClientSideWebPart<IReduxAppWebPartProps> {
  
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  private store: Store<IApplicationState>;

  protected onInit():Promise<void> {
    this.store = createStore(reducer);
    this.store.subscribe(this.render);
    return super.onInit();
  }

  handleClick () {
    this.store.dispatch(voteChess());
    console.log(this.store.getState());
  }

  public render(): void {
    // const element: React.ReactElement<any> = React.createElement(
    //   ReduxApp,
    // );
    const element: React.ReactElement<any> = React.createElement(
      'button',
      {
        onClick: this.handleClick
      }, 'click'
    )

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
