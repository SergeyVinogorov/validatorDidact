export type InputStateType = {
  value: string;
  isValid: boolean;
}

export type StoreType = {
  state: {
    login: InputStateType,
    password: InputStateType
  },
  onStateChanged: () => void
  setState: (nextState: any) => void
}
export type StateType = {
  login: InputStateType,
  password: InputStateType
}

export enum AuthEnum {
  login ='login',
  password = 'password'
}
