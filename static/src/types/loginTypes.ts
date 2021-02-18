export interface ValidInterface {
    isValid: (field: string) => Boolean
}

export class HasEmptyInterface implements ValidInterface {
    isValid(filed: string) {
        return filed !== ''
    }
}

export class MaxInterface implements ValidInterface {
		max:number
    constructor(max: number) {
			this.max = max
		}
    isValid(filed: string) {
        return filed.length <= this.max
    }
}

export class MinInterface implements ValidInterface {
		min:number
    constructor( min: number) {
			this.min = min
		}
    isValid(filed: string) {
        return filed.length >= this.min
    }
}

export class PatternInterface implements ValidInterface {
		regex: RegExp
    constructor(regex: RegExp) {
			this.regex = regex
		}
    isValid(filed: string) {
      console.log(this.regex);
      console.log(filed);
      console.log(filed.toLowerCase().match(this.regex));
      console.log(this.regex.test(filed.toLowerCase()));

      return this.regex.test(filed.toLowerCase());
    }
}
export type fieldProp = {
	field: string,
	id: string,
	idError:string,
	nameField:string
}
