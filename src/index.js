import ReactDOM from 'react-dom/client';
import { OrderContextProvider } from './store/order-context';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<OrderContextProvider><App /></OrderContextProvider>);
