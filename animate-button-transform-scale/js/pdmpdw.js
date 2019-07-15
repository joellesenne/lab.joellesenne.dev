/* async function head(){
  let head = '<p><meta name="viewport" content="width-device-width, initial-scale=1"></p>'
  return await 
  document.head.insertAdjacentHTML('afterend', head);
}
head() 

async function logo() {
  let logo ='<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="t-o" width="40" height="40" viewBox="0 0 800 800" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
    <g transform="matrix(1.28115,0,0,1.30399,-102.318,-119.839)">
        <ellipse cx="392.083" cy="398.652" rx="267.337" ry="262.655" style="fill:rgb(14,15,79);stroke:rgb(235,235,235);stroke-width:23.98px;"/>
    </g>
    <g transform="matrix(1.21518,0,0,1.2478,-145.205,-84.8221)">
        <ellipse cx="448.661" cy="388.543" rx="205.73" ry="200.353" style="fill:none;stroke:rgb(235,235,235);stroke-width:25.17px;"/>
    </g>
    <g transform="matrix(1,0,0,1,3,0)">
        <path d="M542.216,146.859L405.262,526.349L672.046,500.712C678.203,484.753 682.674,468.043 685.749,450.712L438.262,490.948L583.622,175.4C568.375,163.989 560.301,157.575 542.216,146.859Z" style="fill:url(#_Linear1);"/>
    </g>
    <g transform="matrix(-1,0,0,1,796.519,0)">
        <path d="M542.216,146.859L405.262,526.349L672.046,500.712C678.203,484.753 682.674,468.043 685.749,450.712L438.262,490.948L583.622,175.4C568.375,163.989 560.301,157.575 542.216,146.859Z" style="fill:url(#_Linear2);"/>
    </g>
    <defs>
        <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(280.487,0,0,379.49,405.262,336.604)"><stop offset="0" style="stop-color:rgb(249,79,5);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(235,149,24);stop-opacity:1"/></linearGradient>
        <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(280.487,0,0,379.49,405.262,336.604)"><stop offset="0" style="stop-color:rgb(249,79,5);stop-opacity:1"/><stop offset="1" style="stop-color:rgb(235,149,24);stop-opacity:1"/></linearGradient>
    </defs>
</svg>'
  return await document.body.insertAdjacentHTML('afterbegin', '<a href="https://joellesenne.xyz" target="_blank" class="d-b p-f is-behavior-logo t-all">' + logo + '</a>');
}
logo()

async function supports(){
  let supports = '<div id="supports" class="is-supports-browser"><a class="delete" id="delete" href="#">X</a></div>';
  return await document.body.insertAdjacentHTML('afterbegin', supports);
}
supports()
let el = document.querySelector('#delete');
el.onclick = function () {
  let del = document.getElementById("supports");
  del.parentNode.removeChild(del);
}
*/
async function footer() {
  let footer = '<footer class="d-b p-f m-0 p-0 l-0 b-0 r-0 w-100 ta-c ff-s l-h c-777 b-c z-i is-behavior-footer" role="contentinfo"><p class="m-0 p-0">© 2017 Script & design by <a class="no-td is-behavior-link t-all" href="https://codepen.io/joellesenne/" target="_blank alt="">@joellesenne</a> include pen <a class="no-td is-behavior-link t-all"href="https://codepen.io/joellesenne/pen/pdMPdW" target="_blank alt="">Scaffolding CSS</a> [template for codepen]</p></footer>'
  return await      document.body.insertAdjacentHTML('beforeend', footer);
}
footer()


