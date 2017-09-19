import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import OnChange from './class03/OnChange.js';
import LikeButton from './class04/LikeButton.js';
import CartItem from './class04/mixin/CartItem.js';
import Stateful from './class04/Stateful.js';

import DateUpdate from './class04/practise1showtime/DateUpdate.js';

ReactDOM.render(<DateUpdate />, document.getElementById('root'));
registerServiceWorker();
