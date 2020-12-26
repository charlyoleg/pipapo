/*! home_app.ts */

// typescript declaration
declare var Stimulus : any;


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

const stimulus_app = Stimulus.Application.start();
stimulus_app.register("next_button", NextButtonController);
console.log("Stimulus is started");




