/* async function head(){
  let head = '<p><meta name="viewport" content="width-device-width, initial-scale=1"></p>'
  return await 
  document.head.insertAdjacentHTML('afterend', head);
}
head() */

async function logo() {
  let logo ='<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="t-o" width="40" height="40" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"><rect id="icon" x="0" y="0" width="40.009" height="40.002" style="fill:none;"/><ellipse cx="20.004" cy="20.001" rx="20.004" ry="20.001" style="fill:#252329;"/><g><rect x="5.98" y="13.49" width="28.05" height="3" style="fill:#f9fe34;"/><path d="M5.98,7.015l0,6l3,0l0,-6l-3,0Z" style="fill:#f9fe34;"/><path d="M18.504,10.015l0,3l3,0l0,-3l-3,0Z" style="fill:#f9fe34;"/></g><rect x="5.98" y="18.489" width="28.05" height="3" style="fill:#f9fe34;"/><g><rect x="5.98" y="23.487" width="28.05" height="3" style="fill:#f9fe34;"/><path d="M31.029,26.987l0,6l3,0l0,-6l-3,0Z" style="fill:#f9fe34;"/></g></svg>'
  return await document.body.insertAdjacentHTML('afterbegin', '<a href="https://joellesenne.xyz" target="_blank" class="d-b p-f is-behavior-logo t-all">' + logo + '</a>');
}
logo()

/*async function supports(){
  let supports = '<div id="supports" class="is-supports-browser"><a class="delete" id="delete" href="#">X</a></div>';
  return await document.body.insertAdjacentHTML('afterbegin', supports);
}
supports()
let el = document.querySelector('#delete');
el.onclick = function () {
  let del = document.getElementById("supports");
  del.parentNode.removeChild(del);
}

async function footer() {
  let footer = '<footer class="d-b p-f m-0 p-0 l-0 b-0 r-0 w-100 ta-c ff-s l-h c-777 b-c z-i is-behavior-footer" role="contentinfo"><p class="m-0 p-0">© 2017 Script & design by <a class="no-td is-behavior-link t-all" href="https://codepen.io/joellesenne/" target="_blank alt="">@joellesenne</a> include pen <a class="no-td is-behavior-link t-all"href="https://codepen.io/joellesenne/pen/pdMPdW" target="_blank alt="">Scaffolding CSS</a> [template for codepen]</p></footer>'
  return await      document.body.insertAdjacentHTML('beforeend', footer);
}
footer()*/


