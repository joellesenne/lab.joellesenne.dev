import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: 0;
	}
	html {
		font: 62.5%/1em georgia, serif;
		box-sizing: inherit;
		overflow-y: scroll;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}
	body {
		min-height: 100vh;
		color: ${({ theme }) => theme.text};
		font-weight: normal;
		word-wrap: break-word;
		font-kerning: normal;
		-moz-font-feature-settings: "kern", "liga", "clig", "calt";
		-ms-font-feature-settings: "kern", "liga", "clig", "calt";
		-webkit-font-feature-settings: "kern", "liga", "clig", "calt";
		font-feature-settings: "kern", "liga", "clig", "calt";
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeSpeed;
		scroll-behavior: smooth;
		background-color: ${({ theme }) => theme.body};
		transition: all 0.25s linear;
	}
	h1 {
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  		color: inherit;
		font-size: 2.25rem;
		line-height: 1.1;
		font-weight: bold;
  	text-rendering: optimizeLegibility;
	}
	h1:hover {
		animation: spacing 4s ease-in-out forwards;
	}
	p {
		padding: 1rem 0 1rem;
		font-size: 1.5rem;
		line-height: 1.1;
	}
	p:hover {
		animation: spacing 4s ease-in-out forwards;
	}
	a {
		position: relative;
		color: ${({ theme }) => theme.text};
		text-decoration: none;
  	-webkit-text-decoration-skip: objects;
	}
	a:hover {
		color: ${({ theme }) => theme.body};
		outline-width: 0;
		background-color: transparent;
		animation: spacing 4s ease-in-out forwards;
	}
	ul {
		list-style: none;
		list-style-position: outside;
		list-style-image: none;
	}
	li {
		color: inherit;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: 2.25rem;
		font-weight: bold;
		text-rendering: optimizeLegibility;
		line-height: 1.1;
	}
	main {
		margin: 0 auto;
		padding: 1rem;
		max-width: 960px;
	}
	article a:hover {
		color: #0099CC;
	}

	.listsItem a:hover {
		background-color: transparent;
	}
	::-moz-selection{ background: #0000FF; color:#00FFCE; text-shadow: none; }
	::selection { background:#0000ff; color:#00FFCE; text-shadow: none; }
	@keyframes spacing {
		0% {
			letter-spacing: 0rem;
		}
		50% {
			letter-spacing: 0.6rem;
		}
		100% {
			letter-spacing: 0rem;
		}
	}
`
