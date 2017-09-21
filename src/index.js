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

import Count from './class05/counter.js';
import Uppercase from './class05/uppercase.js';
import GetValueFromChild from './class05/stateless.js';

import DefaultProps from './class06/defaultProps.js';
import UseNotesList from './class06/children.js';
import UseSpread from './class06/spread.js';

import UseComponentWillMount from './class08/willmount.js';
import UseComponentDidMount from './class08/didmount.js';
import UseComponentReceiveProps from './class08/receiveprops.js';
import UseComponentWillUpdate from './class08/update.js';
import UseForceUpdate from './class08/forceupdate.js';
import UseComponentWillUnmount from './class08/unmount.js';

import UseAjax from './class10/ajax.js';
import UseLoading from './class10/loading.js';

import UseInput from './class11/text.js';
import UseTextarea from './class11/textarea.js';
import UseFile from './class11/file.js';
import UseCheckbox from './class11/checkbos.js';//with bug
import UseRadio from './class11/radio.js';
import UseSelect from './class11/select.js';


ReactDOM.render(<UseCheckbox />, document.getElementById('root'));
registerServiceWorker();
