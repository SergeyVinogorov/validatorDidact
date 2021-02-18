import { patch, createVNode } from "../../core/didact";
import { Fieldset } from "../../components/Fieldset/index";


type InputStateType = {
  value: string;
  isValid: boolean;
}

type StoreType = {
  state: {
    login: InputStateType,
    password: InputStateType
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
    class:"mf-form",
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
      createVNode("h2", {class: 'mf-form__title'}, "Вход"),
      Fieldset({
        id: 'loginInput',
        nameLabel: 'Логин',
				message: 'Не корректно введены данные',
				type: 'email',
				name: 'login',
        setParentStore: handelGetStore,
        typeStore: 'login',
        className: 'mf-form__field'
      }),
      Fieldset({
        id: 'loginPassword',
				nameLabel: 'Пароль',
				message: 'Не корректно введены данные',
				type: 'password',
				name: 'pass',
        setParentStore: handelGetStore,
        typeStore: "password",
        className: "mf-form__field"
      }),
    ]),
    createVNode("div", {class: "mf-form__footer"}, [
      createVNode("input", {class:"mf-button mf-submit", value: "Авторизоваться", type: "button"},""),
      createVNode("a", {class: "mf-page-link mf-page-link--top-indent", href:"../../registration.html"}, "Нет аккаунта?")
    ]),
  ]);
};

const store: StoreType = {
  state: {
    login: {
      value: '',
      isValid: false
    },
    password: {
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
