import { patch, createVNode } from "../../core/didact";
import { ListChatContainer } from "../../containers/ListChatContainer/index";
import { ListItemProps } from "../../types/listChatTypes";

type StoreType = {
  state: {
    allChats: Array<ListItemProps>
  },
  onStateChanged: () => void
  setState: (nextState: any) => void
}


const createVApp = (store: StoreType) => {

  return createVNode("div", {class: 'mf-page'}, [
    createVNode("div", {class: "mf-side-bar" }, [
      createVNode("div", {class: 'mf-side-bar__header'}, [
        createVNode('a', {href: '../../settings-profile.html', class: "mf-side-bar__link"}, [
          'Профиль',
          createVNode('img', {
            src: './images/svg/shevron.svg',
            alt: 'Иконка для ссылки на страницу профиль'
          }, '')
        ]),
        createVNode('button', {type: 'button', class: 'mf-side-bar__button'}, [
          createVNode('img', {src: './images/svg/search.svg', alt: 'Иконка поиска'}, ''),
          createVNode('span', {class:'mf-side-bar__button-text'}, 'Поиск')
        ])
      ]),
      createVNode('ul', {class:'mf-side-bar__list'}, ListChatContainer({arrayChats: store.state.allChats})),
    ]),
    createVNode("main", {class: "mf-chat mf-center-block"}, [
      createVNode("p", {class:"mf-chat-message"},"Выберите чат чтобы отправить сообщение"),
    ]),
  ]);
};

const store: StoreType = {
  state: {
    allChats: [
      {
        link: './',
        name: 'Поиск',
        text: 'Изображение',
        time: '10:49',
        count: '2'
      },
      {
        link: './',
        name: 'тет-а-теты',
        text: 'И Human Interface Guidelines и Material Design рекомендуют...',
        time: '10:49',
        count: '1'
      },
      {
        link: './',
        name: 'Киноклуб',
        text: 'Изображение',
        time: '10:49',
        count: '5'
      }
    ]
  },
  onStateChanged: () => {},
  setState(nextState: any) {
    this.state = nextState;
    this.onStateChanged();
  }
};

let app = patch(createVApp(store), document.getElementById("app"));

store.onStateChanged = () => {
  app = patch(createVApp(store), app);
};
