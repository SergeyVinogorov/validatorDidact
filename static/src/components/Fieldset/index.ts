// import { createVNode } from "../../core/didact";
import Didact from "../../core/didactClass";
// import { LoginPageController } from "../../controllers/LoginPageController";

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
  setParentStore?: (store: object, type: string)=>any,
  typeStore: string;
  isSetting?: boolean;
  control?: any
}

type ElementType = {
  type: typeof Didact.Component | string,
  props: any
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
    // setParentStore,
    // typeStore,
    isSetting,
    control
  } = props

  // const handlePassStore = () => {
  //   const store = control.getStore()
  //   setParentStore(store, typeStore)
  // }

  const initChild = ( ) => {
    const result: Array<ElementType> = []
    const input = Didact.createElement(
      'input',
      {
        type: type,
        id: id,
        name: name,
        placeholder: placeholder,
        className: classNameInput,
        oninput: (e: Event) => {
          const target = e.target as HTMLInputElement;
          control.handleOnInput(target, type)
          // handlePassStore()
        },
        onblur: (e: Event) => {
          const target = e.target as HTMLInputElement;
          control.handleOnBlur(target, type)
          // handlePassStore()
        }
      },
      ""
      )

    const label = Didact.createElement(
      'label',
      {
        for: id,
        className: classNameLabel,
      },
      nameLabel
      )

    const errorMessage = Didact.createElement(
      'div',
      { className: "mf-form__error visually-hidden" },
      message
      )
    if(isSetting){
      result.push(label, input)
    }else{
      result.push(input, label, errorMessage)
    }
    return result
  }
return Didact.createElement('fieldset', {className: className}, initChild())
}
