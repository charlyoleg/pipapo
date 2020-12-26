/*! next_button_controller.ts */

import { Controller } from "stimulus";
//import { Controller } from "https://cdn.skypack.dev/stimulus";
//import { Controller } from "../../../node_modules/stimulus/index.js";
// typescript workaround
//declare var Stimulus : any;



class StimuControl extends Controller {
  // the following line is required by the Stimulus framework. This is the list of the data-target of the controller.
  static targets = [ "statusRo" ];
  // the following lines are required for typescript
  readonly statusRoTarget!: Element;
  //readonly statusRoTargets!: Element[];
  //readonly hasStatusRoTargets!: boolean;


  // properties
  staty = 0;

  connect() {
    //console.log("Hello, Stimulus!", this.element);
    console.log("Hello from Stimulus - next_button_controller - connect");
    // the syntax "setTimeout(this.pressNext, 1000);" does not work because of the issue "window.setTimeout + this"
    //setTimeout(()=>{ this.pressNext(); }, 1000); // in milliseconds
    //this.pressNext(); // also work, but maybe by chance
    this.statusRoTarget.innerHTML = "the intern variable value: " +  this.staty;
  }


  pressNext() {
    console.log("Hello from Stimulus - next_button_controller - pressNext");
    this.staty += 1;
    if (this.staty > 3) {
      this.staty = 1;
    }
    this.statusRoTarget.innerHTML = "the intern variable value: " +  this.staty;
  }

}

// exporting
export default StimuControl;

