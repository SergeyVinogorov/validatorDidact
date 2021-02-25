import Didact from "../../core/didact";
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

  return Didact.createVNode("div", {class: 'mf-page'}, [
    Didact.createVNode("div", {class: "mf-side-bar" }, [
      Didact.createVNode("div", {class: 'mf-side-bar__header'}, [
        Didact.createVNode('a', {href: '../../settings-profile.html', class: "mf-side-bar__link"}, [
          'Профиль',
          Didact.createVNode('img', {
            src: './images/svg/shevron.svg',
            alt: 'Иконка для ссылки на страницу профиль'
          }, '')
        ]),
        Didact.createVNode('button', {type: 'button', class: 'mf-side-bar__button'}, [
          Didact.createVNode('img', {src: './images/svg/search.svg', alt: 'Иконка поиска'}, ''),
          Didact.createVNode('span', {class:'mf-side-bar__button-text'}, 'Поиск')
        ])
      ]),
      Didact.createVNode('ul', {class:'mf-side-bar__list'}, ListChatContainer({arrayChats: store.state.allChats})),
    ]),
    Didact.createVNode("main", {class: "mf-chat"}, [
      Didact.createVNode("div", {class:"mf-chat__header"}, [

        Didact.createVNode('div', {class:'mf-chat__companion'}, [
          Didact.createVNode('div', {class:'mf-chat__companion-image'}, ''),
          Didact.createVNode('div', {}, [
            Didact.createVNode('h5', {class:'mf-chat__companion-title'}, 'Вадим'),
            Didact.createVNode('p', {class:'mf-chat__companion-text'}, 'Был 5 минут назад'),
          ]),
        ]),

        Didact.createVNode('img', {
          class:'mf-chat__settings', 
          src: './images/svg/three-dots.svg', 
          alt: 'Иконка открытия меню настройки' 
        }, ''),

      ]),
      Didact.createVNode("div", {class:"mf-chat__body"}, [
        Didact.createVNode('p', {class:'mf-chat__time'}, '19 июня'),
        Didact.createVNode('p', {class:'mf-chat__message'}, [
          'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.	Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро',
          Didact.createVNode('span', {class: 'mf-chat__message-time'}, '11:56')
        ]),
        Didact.createVNode('div', {class:'mf-chat__image-message'}, [
          Didact.createVNode('img', {src: './images/camera.jpg', alt: 'моя камера'}, ''),
          Didact.createVNode('span', {class: 'mf-chat__message-time'}, '11:58')
        ]),
        Didact.createVNode('div', {class:'mf-chat__answer'}, [
          Didact.createVNode('p', {class: 'mf-chat__answer-text'}, 'Круто!'),
          Didact.createVNode('span', {}, [
            Didact.createVNode('img', {src: './images/svg/viewed.svg', alt: 'Иконка просмотренное'}, ''),
          ]),
          Didact.createVNode('p', {class: 'mf-chat__answer-time'}, '12:00')
        ])

      ]),
      Didact.createVNode("div", {class:"mf-chat__footer"}, [
        Didact.createVNode('form', {class:'mf-chat__form'}, [
          Didact.createVNode('img', {class: 'mf-chat__form-setting',src: './images/svg/clip.svg', alt: 'Иконка кнопки добавить файлы для сообщения'}, '12:00'),
          Didact.createVNode('input', {class: 'mf-chat__form-message', type: 'text', placeholder: 'Сообщение', name: 'message'}, '12:00'),
          Didact.createVNode('button', {class: 'mf-chat__answer-time', type: 'submit'}, [
            Didact.createVNode('img', {src: './images/svg/arrow.svg', alt: 'Иконка кнопки отправить сообщение'})
          ])
        ])
      ]),
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

let app = Didact.patch(createVApp(store), document.getElementById("app"));

store.onStateChanged = () => {
  app = Didact.patch(createVApp(store), app);
};
