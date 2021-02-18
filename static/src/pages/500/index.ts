import { patch, createVNode } from "../../core/didact";

const createVApp = () => {

  return createVNode("main", { }, [
    createVNode("h1", {class: "mf-page-h1"}, "500"),
    createVNode("h2", {class: "mf-page-h2 mf-page-h2--indent"}, "Мы уже фиксим"),
    createVNode("a", { href: "./", class: "mf-page-link" }, "Назад к чатам"),
  ]);
};

patch(createVApp(), document.getElementById("app"));

