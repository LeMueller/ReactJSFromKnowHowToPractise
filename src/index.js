import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import OnChange from './OnChange';
import LikeButton from './LikeButton';
import CartItem from './mixin/CartItem';
import Stateful from './Stateful';
import TimeUpdate from './practise1showtime/TimeUpdate';
import DateUpdate from './practise1showtime/DateUpdate';

ReactDOM.render(<DateUpdate />, document.getElementById('root'));
registerServiceWorker();
