var projects = [
	{
		name: 'Background Controls Video',
		url: 'background-controls',
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

var el = document.getElementById('lists');

for (var i = 0; i < projects.length; i++) {
	el.innerHTML += '<li class="' + projects[i].bg + '"><a href="' + projects[i].url + '/dist/index.html" target="_blank" rel="noopener noreferrer"><h2>' + projects[i].name + '</h2></a></li>';
}

