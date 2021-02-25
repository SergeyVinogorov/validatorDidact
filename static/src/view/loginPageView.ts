import { LoginPageController, UserPageOptions } from "../controllers/LoginPageController";
import Didact from "../core/didactClass";
import { Fieldset } from "../components/Fieldset/index";


export const loginPageView = <P extends UserPageOptions>(
    ctrl: LoginPageController<P>,
    // props: P
) => {
  const attriubutes = {
    action: "#",
    className:"mf-form",
    id: "mfForm",
    name: "mfForm",
    method: "POST"
  }
  return Didact.createElement("form", attriubutes, [
    Didact.createElement("div", {className: "mf-form__body" }, [
      Didact.createElement("h2", {className: 'mf-form__title'}, "Вход"),
      Fieldset({
        id: 'loginInput',
        nameLabel: 'Логин',
				message: 'Не корректно введены данные',
				type: 'email',
				name: 'login',
        // setParentStore: handelGetStore,
        typeStore: 'login',
        className: 'mf-form__field',
        control:ctrl
      }),
      Fieldset({
        id: 'loginPassword',
				nameLabel: 'Пароль',
				message: 'Не корректно введены данные',
				type: 'password',
				name: 'pass',
        // setParentStore: handelGetStore,
        typeStore: "password",
        className: "mf-form__field",
        control:ctrl
      }),
    ]),
    Didact.createElement("div", {className: "mf-form__footer"}, [
      Didact.createElement("input", {className:"mf-button mf-submit", value: "Авторизоваться", type: "button"},""),
      Didact.createElement("a", {className: "mf-page-link mf-page-link--top-indent", href:"../../registration.html"}, "Нет аккаунта?")
    ]),
  ]);
}
