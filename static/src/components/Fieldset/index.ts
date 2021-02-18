import { createVNode } from "../../core/didact";
import { LoginPageController } from "../../controllers/LoginPageController";

type FormFieldsetProps = {
  id: string;
  name: string;
  message?: string;
  type: string;
  placeholder?: string;
  className: string;
  classNameLabel?: string;
  classNameInput?: string;
  nameLabel: string;
  setParentStore: (store: object, type: string)=>any,
  typeStore: string;
  isSetting?: boolean;
}

export const Fieldset = (props: FormFieldsetProps) => {
  const {
    id,
    name,
    type,
    message = '',
    placeholder = '',
    className,
    classNameLabel = 'mf-form__label',
    classNameInput = 'mf-form__input',
    nameLabel,
    setParentStore,
    typeStore,
    isSetting
  } = props
  const loginContrl = new LoginPageController()

  const handlePassStore = () => {
    const store = loginContrl.getStore()
    setParentStore(store, typeStore)
  }

  const initChild = () => {
    const result: Array<Function> = []
    const input = createVNode(
      'input',
      {
        type: type,
        id: id,
        name: name,
        placeholder: placeholder,
        class: classNameInput,
        oninput: (e: Event) => {
          const target = e.target as HTMLInputElement;
          loginContrl.handleOnInput(target, type)
          handlePassStore()
        },
        onblur: (e: Event) => {
          const target = e.target as HTMLInputElement;
          loginContrl.handleOnBlur(target, type)
          handlePassStore()
        }
      },
      ""
      )

    const label = createVNode(
      'label',
      {
        for: id,
        class: classNameLabel,
      },
      nameLabel
      )

    const errorMessage = createVNode(
      'div',
      {
        class: "mf-form__error visually-hidden",
      },
      message
      )
    if(isSetting){
      result.push(label, input)
    }else{
      result.push(input, label, errorMessage)
    }
    return result
  }
return createVNode('fieldset', {class: className}, initChild())
}
