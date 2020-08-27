import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import 'meteor/jkuester:blaze-bs4';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css' ;// this is the default BS theme as example
import popper from 'popper.js';
global.Popper = popper // fixes some issues with Popper and Meteor

Session.set("filter", "all");

//ui imports
import './NavBar.html';
import './mainBody.html';
import './layout.html';
import './addtask.html';


// api imports
import '../../lib/collection.js';
import '../../lib/accountUI.js';
import '../api/addNewTask.js';
import '../api/mainBody.js';
import '../api/navbar.js';

