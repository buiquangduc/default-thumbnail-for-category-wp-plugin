import styles from './wpdfi.scss';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import Form from './scripts/form.js';

$(document).ready(function(){
	var form = new Form('#wpdfi-form');
	form.init();
});

// $('[data-toggle="tooltip"]').tooltip();