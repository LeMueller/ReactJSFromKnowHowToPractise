import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OnChange from './OnChange';
import LikeButton from './LikeButton';
import CartItem from './mixin/CartItem';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CartItem />, document.getElementById('root'));
registerServiceWorker();
