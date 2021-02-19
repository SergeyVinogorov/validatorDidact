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

  public validatorService:PageFormValidatorService = new PageFormValidatorService();

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
