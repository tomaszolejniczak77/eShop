// import {setCookie, getCookie} from './helpers/cookie.js'

import * as cookie from './helpers/cookie.js'



const d = new Date();
d.setHours(d.getHours() + 1); 
const utc = d.toUTCString();

cookie.setCookie('text', encodeURIComponent('tytył opis'), 1);

// console.log(utc);

// document.cookie = 'theme=dark';
// document.cookie = `username=Tomasz; expires=${utc}`

// console.log(getCookie('text'));




























