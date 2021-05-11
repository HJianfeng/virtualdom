# create-node

## 简介
一个简易的虚拟dom生成器和渲染器，包含diff算法

## 使用
`npm install create-node --save`
```javascript
import { createElement, diff, patch } from 'create-node'

// 创建一个虚拟dom树
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
// 渲染和挂载
const root = tree.render();
document.body.appendChild(root);

// 创建一个虚拟dom树
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
// 对比差异
const patches = diff(tree, newTree)

// 在真正的DOM元素上应用变更
patch(root, patches);
```
