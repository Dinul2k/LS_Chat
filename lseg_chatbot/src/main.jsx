import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore.js';


const store = configureStore();

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
</StrictMode>,
)
