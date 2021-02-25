import { PageFormValidatorService } from "../services/PageFormValidator";
import { BaseComponent } from "../components/BaseComponent";
import { loginPageView } from "../view/loginPageView";

type InputStateType = {
  value: string;
  isValid: boolean;
}

type InputValue = {
  value: string;
}

export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
export class LoginPageController<P extends UserPageOptions> extends BaseComponent<P> {

  public readonly view = loginPageView;

  public validatorService: PageFormValidatorService = new PageFormValidatorService();

  handleOnInput(event: InputValue, type: string) {
    const isCorrect: InputStateType = this.validatorService.validateValue(event.value, type)
    console.log(isCorrect);
  }
  handleOnBlur(event: InputValue, type: string) {
    const isCorrect: InputStateType = this.validatorService.validateValue(event.value, type)
    console.log(isCorrect);

  }
  getStore(){
  }
}
