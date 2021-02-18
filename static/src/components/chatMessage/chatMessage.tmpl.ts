export const template = `
	<p class="mf-chat__message">
		{{ text }}
		<span class="mf-chat__message-time">{{ time }}</span>
	</p>
`
export const imageTemplate = `
	<div class="mf-chat__image-message">
		<img src="{{ image }}" alt="{{ alt.image }}">
		<span class="mf-chat__image-message-time">{{ time }}</span>
	</div>
`

export const answer = `
	<div class="mf-chat__answer">
		<p class="mf-chat__answer-text">{{ answer.text }}</p>
		<span>
			<img src="{{ answer.icon }}" alt="{{ answer.alt }}">
		</span>
		<p class="mf-chat__answer-time">{{ answer.time }}</p>
	</div>
`