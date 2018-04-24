import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { AppStore } from './stores/AppStore';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider appStore={new AppStore()}><App /></Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
