/*! home_app.ts */

//import { Application } from "stimulus";
//import { Application } from "https://cdn.skypack.dev/stimulus";
//import { Application } from "../../node_modules/stimulus/index.js";
// typescript workaround
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
stimulus_app.register("tourniquet", NextButtonController);
console.log("Stimulus is started");


// =========================
// PWA install
// =========================

// using querySelector (instead of using Stimulus)
const btnPwainstall:HTMLButtonElement = document.querySelector('#pwa_install') as HTMLButtonElement;
let deferredPrompt:any;

window.addEventListener('beforeinstallprompt', (evt) => {
  console.log('The browser detects Pipapo is a PWA: You can now install it.');
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  evt.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = evt;
  // Update UI to notify the user they can add to home screen
  btnPwainstall.disabled = false;

  btnPwainstall.addEventListener('click', (evt2) => {
    console.log("Installing the PWA");
    // hide our user interface that shows our A2HS button
    btnPwainstall.disabled = true;
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult:any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});

