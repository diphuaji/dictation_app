import './reset.css';
import Vue from 'vue';
import * as fns from './functions.js';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
console.log(app);
console.log('index.js');
fns.component();
