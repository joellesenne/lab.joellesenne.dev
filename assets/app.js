var projects = [
	{
		name: 'Properties custom css in javascript',
		url: 'properties-custom-css-in-javascript',
		bg: 'Brown'
	},
	{
		name: 'Background Controls Video',
		url: 'background-controls-video',
		bg: 'SteelBlue'
	},
	{
		name: 'Border body marquee css3, and transition a animation',
		url: 'border-body-marquee-css3-and-transition-a-animation',
		bg: 'DarkOrange'
	},
	{
	  name: 'Gelatin over button effect with Sass',
	  url: 'effect-of-gelatin-on-the-button-with-sass',
	  bg: 'IndianRed'
	},
	{
	  name: 'Loading animation with keyframe for SCSS & Jade',
	  url: 'loading-animation-with-keyframe-for-scss-jade',
	  bg: 'BurlyWood'
	},
	{
	  name: 'Animate menu CSS',
	  url: 'original-animation-of-a-menu-click-on-the-top-right',
	  bg: 'MediumPurple'
	},
	{
	  name: 'Design Material – Effect card  CSS UI/UX',
	  url: 'design-material-effect-card-css-ui-ux',
	  bg: 'OliveDrab'
	},
	{
		name: 'Animate button transform scale',
		url: 'animate-button-transform-scale',
		bg: 'PaleVioletRed'
	},
	{
		name: 'Simple CSS dropdown menu',
		url: 'simple-css-dropdown-menu',
		bg: 'DarkKhaki'
	},
	{
		name: 'Form Glass effect',
		url: 'form-glass-effect',
		bg: 'Peru'
	},
	{
		name: 'Level of difficulty with triangle css',
		url: 'level-of-difficulty-with-triangle-css',
		bg: 'CadetBlue'
	}
];

const lists = document.querySelector('.js-lists');

for (let i = 0; i < projects.length; i++) {
	lists.innerHTML += '<li class="' + projects[i].bg + '"><a href="' + projects[i].url + '/dist/index.html" target="_blank" rel="noopener noreferrer"><h2>' + projects[i].name + '</h2></a></li>';
}

// Inspired by <https://codepen.io/charlotterushen/pen/rgJZgV>
const hamburger = document.querySelector('.js-hamburger')
const overlay = document.querySelector('.js-overlay')
const navList = document.querySelector('.js-nav-list')
const navItems = document.querySelectorAll('.js-nav-item')
let isOpen = false

function addActive(element) {
	element.classList.add('nav-is-active');
  }
  function removeActive(element) {
	element.classList.remove('nav-is-active');
  }

  hamburger.addEventListener('click', (event) => {
	event.preventDefault()
	if(!isOpen) {
		addActive(hamburger)
		addActive(navList)
		for(let i = 0; i < navItems.length; i++) {
			addActive(navItems[i])
		}
		addActive(overlay)
		overlay.style.zIndex = '1'
		isOpen = true
	} else {
		removeActive(hamburger)
		removeActive(navList)
		for(let i = 0; i < navItems.length; i++) {
			removeActive(navItems[i])
		}
		removeActive(overlay)
		overlay.style.zIndex = '-1'
		navList.classList.add('close-nav');
		isOpen = false
	}
})
overlay.addEventListener('click', (event) => {
	event.preventDefault()
	if (isOpen) {
		removeActive(hamburger)
		removeActive(navList)
		for(let i = 0; i < navItems.length; i++) {
			removeActive(navItems[i])
		}
		removeActive(overlay)
		overlay.style.zIndex = '-1'
		navList.classList.add('close-nav');
		isOpen = false
	}

  })
