# My chat messandger

## Проблема:

### Не корректно работает валидация не пойму что не хватает?!

***
Есть вот такой класс
> путь: static/src/services/PageFormValidator.ts
```Javascript
import { HasEmptyInterface, MaxInterface, MinInterface, PatternInterface } from "../types/loginTypes";

export class PageFormValidatorService {
  public validateValue(value: string, type: string) {
    let hasError: boolean = false

    switch (type) {
      case 'tel':
        const max = new MaxInterface(11)
        const min = new MinInterface(4)
        const pattern = new PatternInterface(new RegExp("[0-9]{3}-[0-9]{2}-[0-9]{3}"))
        hasError = max.isValid(value)
        hasError = min.isValid(value)
        hasError = pattern.isValid(value)
        break;
        case 'email':
        const email = new PatternInterface(new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'))
        hasError = email.isValid(value)
      default:
        const hasEmpty = new HasEmptyInterface
        hasError = hasEmpty.isValid(value)
        break;
      }
      return {value: value, isValid: hasError}
  }
}
```
Данный класс вызавается в LoginPageController

>путь: static/src/controllers/LoginPageController.ts

```Javascript
import { PageFormValidatorService } from "../services/PageFormValidator";

type InputStateType = {
  value: string;
  isValid: boolean;
}

type InputValue = {
  value: string;
}

type StoreType = {
  state: {
    login: InputStateType,
    password: InputStateType
  },
  onStateChanged: () => void
  setState: (nextState: any) => void
}
export class LoginPageController {

  private validatorService:PageFormValidatorService = new PageFormValidatorService();

  store: StoreType = {
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

  handleOnInput(event: InputValue, type: string) {
    const isCorrect: InputStateType = this.validatorService.validateValue(event.value, type)
    this.store.setState(isCorrect)
  }
  handleOnBlur(event: InputValue, type: string) {
    const isCorrect: InputStateType = this.validatorService.validateValue(event.value, type)
    this.store.setState(isCorrect)
  }
  getStore(){
    return this.store.state
  }
}
```
Все соединяется на странице Fieldset компоненте
>путь: static/src/components/Fieldset/index.ts

не срабатывает валидация  потому что LoginPageController.ts

вот эта строка выдает uindefined, не пойму почему
```Javascript
private validatorService:PageFormValidatorService = new PageFormValidatorService();
```
если сделать поле выше public то в таком случае становится виден сервис, но валидация все равно отрабатывает в true
