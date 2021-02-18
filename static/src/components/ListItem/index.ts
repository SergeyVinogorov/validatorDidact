import { createVNode } from "../../core/didact";

type ListItemProps = {
  name: string;
  text: string;
  time: string;
  count: string;
  link: string;
}

export const ListItem = (props: ListItemProps) => {
  const {
    name,
    text,
    time,
    count,
    link
  } = props
  return createVNode('li', {class: "mf-side-bar__list-item"}, [
    createVNode('a', {class: "mf-item", href: link}, [
      createVNode('div', {class: "mf-item__image"}, ''),
      createVNode('div', {class: "mf-item__short-text"}, [
        createVNode('p', {class: "mf-item__name"}, name),
        createVNode('p', {class: "mf-item__text"}, text)
      ]),
      createVNode('div', {class: "mf-item__detail"}, [
        createVNode('div', {class: "mf-item__time"}, time),
        createVNode('div', {class: "mf-item__actual-message"}, [
          createVNode('span', {}, count),
        ])
      ])
    ])
  ])
}
