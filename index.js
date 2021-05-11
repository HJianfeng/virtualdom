import { createElement, diff, patch } from './src/index.js'

const tree = createElement("div", { id: "root" }, [
  createElement("h1", { style: "color: blue" }, ["Tittle1"]),
  createElement("p", ["Hello, virtual-dom"]),
  createElement("ul", [
    createElement("li", { key: 1 }, ["li1"]),
    createElement("li", { key: 2 }, ["li2"]),
    createElement("li", { key: 3 }, ["li3"]),
    createElement("li", { key: 4 }, ["li4"])
  ])
]);
// 2. 通过虚拟DOM构建真正的DOM
const root = tree.render();
document.body.appendChild(root);


const newTree = createElement("div", { id: "root" }, [
  createElement("h1", { style: "color: red;" }, ["Tittle2"]),
  createElement("p", ["Hello, virtual-dom"]),
  createElement("ul", [
    createElement("li", { key: 1 }, ["li11111"]),
    createElement("li", { key: 2 }, ["li2"]),
    createElement("li", { key: 3 }, ["li3"]),
    createElement("li", { key: 4 }, ["li4"])
  ])
]);
const patches = diff(tree, newTree)

// 5. 在真正的DOM元素上应用变更
patch(root, patches);