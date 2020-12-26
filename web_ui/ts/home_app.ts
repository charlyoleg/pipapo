/*! home_app.ts */

import { Application } from "stimulus";
//import { Application } from "https://cdn.skypack.dev/stimulus";
//import { Application } from "../../node_modules/stimulus/index.js";
// typescript workaround
//declare var Stimulus : any;


// =========================
// imports
// =========================

// Stimulus controller
import NextButtonController from "./controllers/next_button_controller.js";


// More business logic
import {pipapo_info} from './lib/pipapo_common.js';



// =========================
// Saying hello
// =========================

console.log("Hello from home_app.ts");
pipapo_info();


// =========================
// Stimulus init
// =========================

const stimulus_app = Application.start();
stimulus_app.register("tourniquet", NextButtonController);
console.log("Stimulus is started");




