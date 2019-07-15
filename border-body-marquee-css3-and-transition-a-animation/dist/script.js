// Inspired for <https://www.99percentoffsale.com/>
// Author Joël Lesenne <https://joellesenne.xyz>
const element = document.getElementsByTagName("div");
const content = "🖥 HTML5 📦 CSS3 🚀 SCSS ⚠️ JavaScript 🌳 Pyton 🍰 PHP 🚀 Mysql  📔 Reaxt.js 🛠 React-native 📚 Angular 🔥 Angular.js 📦 NPM 🛠 Webpack 📦 WebAssembly 🛠 Express.js 📝 Lightroon CC 🍰 PhothoShop CC 📝 Affinity Design 🖥 HTML5 📦 CSS3 🚀 SCSS ⚠️ JavaScript 🌳 Pyton 🍰 PHP 🚀 Mysql  📔 Reaxt.js 🛠 React-native 📚 Angular 🔥 Angular.js 📦 NPM 🛠 Webpack 📦 WebAssembly 🛠 Express.js 📝 Lightroon CC 🍰 PhothoShop CC 📝 Affinity Design 🖥 HTML5 📦 CSS3 🚀 SCSS ⚠️ JavaScript 🌳 Pyton 🍰 PHP 🚀 Mysql  📔 Reaxt.js 🛠 React-native 📚 Angular 🔥 Angular.js 📦 NPM 🛠 Webpack 📦 WebAssembly 🛠 Express.js 📝 Lightroon CC 🍰 PhothoShop CC 📝 Affinity Design ";

window.onload = () => {
  for (let i = 0; element.length >= i; i++) {
    let paragraphe = element[i];
    paragraphe.innerHTML = '<p>' + content + '</p>';
  }
};