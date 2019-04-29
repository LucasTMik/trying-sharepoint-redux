import * as React from 'react';
import { Store } from 'redux';
import { IApplicationState } from '../../store/system/reducers';

export interface IFavoritePollProps {
    store: Store<IApplicationState>;
  }
  
const reduxApp = () => {
    return (
        <div>
            Hello
        </div>
    )
}

export default reduxApp;