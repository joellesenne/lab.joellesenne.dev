// Inspired for <https://www.99percentoffsale.com/>
// Author Joël Lesenne <https://joellesenne.dev>
const element = document.getElementsByTagName('div')
const content =
  '🖥 HTML5 📦 CSS3 🚀 SCSS ⚠️ JavaScript 🌳 Python 🍰 PHP 🚀 MySQL  📔 React.js 🛠 React-native 📚 Angular 🔥 Angular.js 📦 NPM 🛠 Webpack 📦 WebAssembly 🛠 Express.js 📝 Lightroom CC 🍰 PhotoShop CC 📝 Affinity Design 🖥 HTML5 📦 CSS3 🚀 SCSS ⚠️ JavaScript 🌳 Python 🍰 PHP 🚀 MySQL  📔 React.js 🛠 React-native 📚 Angular 🔥 Angular.js 📦 NPM 🛠 Webpack 📦 WebAssembly 🛠 Express.js 📝 Lightroom CC 🍰 PhotoShop CC 📝 Affinity Design 🖥 HTML5 📦 CSS3 🚀 SCSS ⚠️ JavaScript 🌳 Python 🍰 PHP 🚀 MySQL  📔 React.js 🛠 React-native 📚 Angular 🔥 Angular.js 📦 NPM 🛠 Webpack 📦 WebAssembly 🛠 Express.js 📝 Lightroom CC 🍰 PhotoShop CC 📝 Affinity Design '

window.onload = () => {
  for (let i = 0; element.length >= i; i++) {
    const paragraph = element[i]
    paragraph.innerHTML = '<p>' + content + '</p>'
  }
}
