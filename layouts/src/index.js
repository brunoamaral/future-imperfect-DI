// import 'bootstrap';


// import 'bootstrap/js/src/alert';
// import 'bootstrap/js/src/button';
// import 'bootstrap/js/src/carousel';
import 'bootstrap/js/src/collapse';
// import 'bootstrap/js/src/dropdown';
// import 'bootstrap/js/src/modal';
// import 'bootstrap/js/src/popover';
// import 'bootstrap/js/src/scrollspy';
// import 'bootstrap/js/src/tab';
// import 'bootstrap/js/src/tooltip';

import $ from "jquery";

import Velocity from 'velocity-animate';

//import 'typeface-raleway';
import './search.js';
import './animation.js';


var blue = $('polygon#blue');

Velocity( blue,
  {opacity: 0.5 },
    {
      loop:13,
      duration:2000,
      easing: "swing" }
    );


