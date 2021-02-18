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
    login: InputStateType,
    password: InputStateType,
    mail: InputStateType,
    phone: InputStateType
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
    class:"mf-form mf-form--height",
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
  return createVNode("form", attriubutes, [
    createVNode("div", {class: "mf-form__body" }, [
      createVNode("h2", {class: 'mf-form__title'}, "Регистрация"),
      Fieldset({
        id: 'nameInput',
        nameLabel: 'Имя',
				message: 'Не корректно введены данные',
				type: 'text',
				name: 'firstName',
        setParentStore: handelGetStore,
        typeStore: 'name',
        className: "mf-form__field"
      }),
      Fieldset({
        id: 'surnameInput',
        nameLabel: 'Фамилия',
				message: 'Не корректно введены данные',
				type: 'text',
				name: 'lastName',
        setParentStore: handelGetStore,
        typeStore: 'secondName',
        className: "mf-form__field"
      }),
      Fieldset({
        id: 'loginInput',
        nameLabel: 'Логин',
				message: 'Не корректно введены данные',
				type: 'email',
				name: 'login',
        setParentStore: handelGetStore,
        typeStore: 'login',
        className: "mf-form__field"
      }),
      Fieldset({
        id: 'mailInput',
        nameLabel: 'Почта',
				message: 'Не корректно введены данные',
				type: 'email',
				name: 'mail',
        setParentStore: handelGetStore,
        typeStore: 'mail',
        className: "mf-form__field"
      }),
      Fieldset({
        id: 'phoneInput',
        nameLabel: 'Телефон',
				message: 'Не корректно введены данные',
				type: 'tel',
				name: 'phone',
        setParentStore: handelGetStore,
        typeStore: 'phone',
        className: "mf-form__field"
      }),
      Fieldset({
        id: 'passwordInput',
        nameLabel: 'Пароль',
				message: 'Не корректно введены данные',
				type: 'password',
				name: 'pass',
        setParentStore: handelGetStore,
        typeStore: 'password',
        className: "mf-form__field"
      }),
    ]),
    createVNode("div", {class: "mf-form__footer"}, [
      createVNode("input", {class:"mf-button mf-submit", value: "Зарегистрироваться", type: "button"},""),
      createVNode("a", {class: "mf-page-link mf-page-link--top-indent", href:"../../login.html"}, "Войти")
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
    login: {
      value: '',
      isValid: false
    },
    password: {
      value: '',
      isValid: false
    },
    phone: {
      value: '',
      isValid: false
    },
    mail: {
      value: '',
      isValid: false
    }
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
