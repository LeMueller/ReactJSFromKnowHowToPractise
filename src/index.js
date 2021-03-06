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

import UseAjax from './class09/ajax.js';
import UseLoading from './class09/loading.js';

import UseInput from './class10/text.js';
import UseTextarea from './class10/textarea.js';
import UseFile from './class10/file.js';
import UseCheckbox from './class10/checkbos.js';//with bug
import UseRadio from './class10/radio.js';
import UseSelect from './class10/select.js';

import UseRefs from './class11/refs.js';

import UseStudent from './class13/student.js';


ReactDOM.render(<UseStudent />, document.getElementById('root'));
registerServiceWorker();
