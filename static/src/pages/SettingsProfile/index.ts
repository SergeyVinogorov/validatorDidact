import { patch, createVNode } from "../../core/didact";
import { Fieldset } from "../../components/Fieldset/index";


type InputStateType = {
  value: string;
  isValid: boolean;
}

type StoreType = {
  state: {
    name: InputStateType,
    secondName: InputStateType,
    nick: InputStateType,
    login: InputStateType,
    mail: InputStateType,
    phone: InputStateType
    avatar: InputStateType
    password: InputStateType,
    passwordNew: InputStateType,
  },
  onStateChanged: () => void
  setState: (nextState: any) => void
}
type StateType = {
  login: InputStateType,
  password: InputStateType
}
enum test {
  login ='login',
  password = 'password'
}
const createVApp = (store: StoreType) => {

  const attriubutes = {
    action: "#",
    class:"mf-profile-form",
    id: "mfForm",
    name: "mfForm",
    method: "POST"
  }

  const handelGetStore: any = (current: InputStateType, type: test) => {
    const newState: StateType = Object.assign({}, store.state)
    newState[type] = current
    console.log(newState);
    store.setState(newState)
  }

  return createVNode("main", {}, [
    createVNode("a", {class: "mf-profile__link", href: "./" }, [
      createVNode("img", {class: 'mf-profile__link-icon', src: "../../images/svg/arrow.svg", alt:"Ссылка на список"}, ""),
      ]),
    createVNode("section", {class: 'mf-center-block--not-vertical'}, [
      createVNode("form", attriubutes, [
        createVNode("div", {class: "mf-profile-form__image" }, ''),
        createVNode("h5", {class: 'mf-profile-form__title'}, "Арина"),
        Fieldset({
          id: 'nameInput',
          nameLabel: 'Имя',
          type: 'text',
          name: 'firstName',
          setParentStore: handelGetStore,
          typeStore: 'name',
          className: "mf-profile-form__field",
          classNameLabel: 'mf-profile-form__field-title',
          classNameInput: 'mf-profile-form__field-text',
          placeholder: 'name',
          isSetting: true
        }),
        Fieldset({
          id: 'surnameInput',
          nameLabel: 'Фамилия',
          type: 'text',
          name: 'lastName',
          setParentStore: handelGetStore,
          typeStore: 'secondName',
          className: "mf-profile-form__field",
          classNameLabel: 'mf-profile-form__field-title',
          classNameInput: 'mf-profile-form__field-text',
          placeholder: 'second name',
          isSetting: true
        }),
        Fieldset({
          id: 'nickInput',
          nameLabel: 'Ник',
          type: 'text',
          name: 'displayName',
          setParentStore: handelGetStore,
          typeStore: 'nick',
          className: "mf-profile-form__field",
          classNameLabel: 'mf-profile-form__field-title',
          classNameInput: 'mf-profile-form__field-text',
          placeholder: 'nick name',
          isSetting: true
        }),
        Fieldset({
          id: 'loginInput',
          nameLabel: 'Логин',
          type: 'email',
          name: 'login',
          setParentStore: handelGetStore,
          typeStore: 'login',
          className: "mf-profile-form__field",
          classNameLabel: 'mf-profile-form__field-title',
          classNameInput: 'mf-profile-form__field-text',
          placeholder: 'login',
          isSetting: true
        }),
        Fieldset({
          id: 'mailInput',
          nameLabel: 'Почта',
          type: 'email',
          name: 'mail',
          setParentStore: handelGetStore,
          typeStore: 'mail',
          className: "mf-profile-form__field",
          classNameLabel: 'mf-profile-form__field-title',
          classNameInput: 'mf-profile-form__field-text',
          placeholder: 'mail@inbox.com',
          isSetting: true
        }),
        Fieldset({
          id: 'phoneInput',
          nameLabel: 'Телефон',
          type: 'tel',
          name: 'phone',
          setParentStore: handelGetStore,
          typeStore: 'phone',
          className: "mf-profile-form__field",
          classNameLabel: 'mf-profile-form__field-title',
          classNameInput: 'mf-profile-form__field-text',
          isSetting: true,
          placeholder: "+7 999 999 99 99"
        }),
        Fieldset({
          id: 'avatarInput',
          nameLabel: 'Телефон',
          type: 'text',
          name: 'avatar',
          setParentStore: handelGetStore,
          typeStore: 'avatar',
          className: "mf-profile-form__field",
          classNameLabel: 'mf-profile-form__field-title',
          classNameInput: 'mf-profile-form__field-text',
          isSetting: true,
          placeholder: "Avatar"
        }),
        Fieldset({
          id: 'passwordInput',
          nameLabel: 'Пароль',
          type: 'password',
          name: 'pass',
          setParentStore: handelGetStore,
          typeStore: 'password',
          className: "mf-profile-form__field",
          classNameLabel: 'mf-profile-form__field-title',
          classNameInput: 'mf-profile-form__field-text',
          isSetting: true,
          placeholder: "Введите"
        }),
      Fieldset({
          id: 'passwordInputNew',
          nameLabel: 'Новый пароль',
          type: 'password',
          name: 'newpass',
          setParentStore: handelGetStore,
          typeStore: 'passwordNew',
          className: "mf-profile-form__field",
          classNameLabel: 'mf-profile-form__field-title',
          classNameInput: 'mf-profile-form__field-text',
          isSetting: true,
          placeholder: 'Введите'
        }),
      createVNode("input", {class: "mf-profile-form__submit", type: "submit", value: "Сохранить"}, ''),
        ])
      ]),
  ]);
};

const store: StoreType = {
  state: {
    name: {
      value: '',
      isValid: false
    },
    secondName: {
      value: '',
      isValid: false
    },
    nick: {
      value: '',
      isValid: false
    },
    login: {
      value: '',
      isValid: false
    },
    mail: {
      value: '',
      isValid: false
    },
    phone: {
      value: '',
      isValid: false
    },
    avatar: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    },
    passwordNew: {
      value: '',
      isValid: false
    },
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
