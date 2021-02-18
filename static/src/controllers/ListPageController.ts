import { HasEmptyInterface, MaxInterface, MinInterface, PatternInterface } from "../types/loginTypes";

// import { reflection } from "../../../node_modules/first-di";

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

// @reflection
export class ListPageController {

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

  validateValue(value: string, type: string) {
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

  handleOnInput(event: InputValue, type: string) {
    const isCorrect: InputStateType = this.validateValue(event.value, type)
    this.store.setState(isCorrect)
  }
  handleOnBlur(event: InputValue, type: string) {
    const isCorrect: InputStateType = this.validateValue(event.value, type)
    this.store.setState(isCorrect)
  }
  getStore(){
    return this.store.state
  }
}
