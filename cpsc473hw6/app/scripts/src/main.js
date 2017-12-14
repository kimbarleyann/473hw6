import FormHandler from './formhandler.js';
import $ from 'jquery';
const FORM_SELECTOR = '[data-coffee-order="form"]';
var formhandler = new FormHandler(FORM_SELECTOR);
formhandler.addSubmitHandler((cb) =>{
});
