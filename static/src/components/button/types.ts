export interface BaseButton {
	type: string
	onClick?: (event: Event) => unknown,
	text: string
}