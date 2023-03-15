
import ReactDOM from 'react-dom/client';
import './css/index.css'
import App from './App';

import { PersistGate } from "redux-persist/integration/react";
import { Persistor, persistStore } from "redux-persist";
import { Provider } from 'react-redux';
import store from './features/store';
const persistor: Persistor = persistStore(store);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
