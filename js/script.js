// sticky menu js start
let navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
let value = window.scrollY
if (value > 100) {
  navbar.classList.add("sticky")
} else {
  navbar.classList.remove("sticky")
}
})

// sticky menu js end


// feather icon script start
feather.replace()
// feather icon script end


//img-effect-js
let zoom_in = document.getElementById("zoom_in");
let zoom_out = document.getElementById("zoom_out");
let immmmm = document.getElementById("immmmm");

zoom_in.onclick = function(){
  immmmm.classList.remove("img_class");
  immmmm.classList.add("img_classZoomIn");
}


//venobox js

$(document).ready(function(){

  /* default settings */
  $('.venobox').venobox(); 


  /* custom settings */
  $('.venobox_custom').venobox({
      framewidth: '400px',        // default: ''
      frameheight: '300px',       // default: ''
      border: '10px',             // default: '0'
      bgcolor: '#5dff5e',         // default: '#fff'
      titleattr: 'data-title',    // default: 'title'
      numeratio: true,            // default: false
      infinigall: true            // default: false
  });
});


// venobox js
new VenoBox({
  selector: '.venobox',
  autoplay: 'true',
  background: 'transparent',
  maxWidth: '800px',
});





