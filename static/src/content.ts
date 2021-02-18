
export const data: any = {
	notFound: {
		"title": "404",
		"subtitle": "Не туда попали",
		"link": {
			"source": "./",
			"title": "Назад к чатам"
		}
	},
	notResponse:{
		"title": "500",
		"subtitle": "Мы уже фиксим",
		"link": {
			"source": "./",
			"title": "Назад к чатам"
		}
	},
	feed: {
		aside: {
			toProfile: {
				link: "./settings-profile.html",
				text: "Профиль"
			},
			icon: {
				row: "./images/svg/shevron.svg",
				search: "./images/svg/search.svg"
			},
			alt: {
				row: "Иконка для ссылки на страницу профиль",
				search: "Иконка поиска"
			},
			btn: {
				search: "Поиск"
			},
			items: [
				{
					link: {
						chat: "#"
					},
					title: "Design Destroyer",
					text: "В 2008 году художник Jon Rafman  начал собирать...",
					time: "10:49",
					messages: "3"
				},
				{
					link: {
						chat: "#"
					},
					title: "Day.",
					text: "Так увлёкся работой по курсу, что совсем забыл его анонсир...",
					time: "10:49",
					messages: "1"
				}
			]
		},
		main: {
			icon:{
				settings: "./images/svg/three-dots.svg",
				clip: "./images/svg/clip.svg",
				send: "./images/svg/arrow.svg"
			},
			alt: {
				settings: "Иконка открытия меню настройки",
				clip: "Иконка кнопки добавить файлы для сообщения",
				send: "Иконка кнопки отправить сообщение"
			},
			placeholder: "Сообщение",
			user: {
				"name": "Вадим",
				"timeVisit": "Был 5 минут назад"
			},
			time: "19 июня",
			items: [
				{
					text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.	Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро",
					time: "11:56"
				},
				{
					image: "./images/camera.jpg",
					icon: {
						readed: "./images/camera.jpg",
					},
					alt: {
						image:"моя камера"
					},
					time: '11:58'
				},
				{
				answer: {
					text: "Круто!",
					icon: "./images/svg/viewed.svg",
					alt: "Иконка просмотренное",
					time: "12:00"
					},
				}
			]
		}
	},
	list:{
		aside:{
			profile:'Профиль',
			link:{
				profile: './'
			},
			icon:{
				toProfile: './images/svg/shevron.svg',
				search: './images/svg/search.svg'
			},
			alt:{
				toProfile: 'Профиль',
				search: 'Иконка поиска'
			},
			search: 'Поиск',
			items:[
				{
					link: './',
					name: 'Поиск',
					text: 'Изображение',
					time: '10:49',
					count: '2'
				},
				{
					link: './',
					name: 'тет-а-теты',
					text: 'И Human Interface Guidelines и Material Design рекомендуют...',
					time: '10:49',
					count: '1'
				},
				{
					link: './',
					name: 'Киноклуб',
					text: 'Изображение',
					time: '10:49',
					count: '5'
				}
			]
		},
		main:{
			text: 'Выберите чат чтобы отправить сообщение'
		}
	},
	login: {
		items:[
			{
        id: 'loginInput',
				name: 'Логин',
				message: 'Не корректно введены данные',
				type: 'email',
				nameField: 'login'
			},
			{
        id: 'loginPassword',
				name: 'Пароль',
				message: 'Не корректно введены данные',
				type: 'password',
				nameField: 'pass'
			}
		]
	},
	registration: {
		items:[
			{
				name: 'Имя',
				message: 'Не корректно введены данные',
				type: 'text',
				nameField: 'firstName'
			},
			{
				name: 'Фамилия',
				message: 'Не корректно введены данные',
				type: 'text',
				nameField: 'lastName'
			},
			{
				name: 'Логин',
				message: 'Не корректно введены данные',
				type: 'email',
				nameField: 'login'
			},
			{
				name: 'Почта',
				message: 'Не корректно введены данные',
				type: 'email',
				nameField: 'mail'
			},
			{
				name: 'Телефон',
				message: 'Не корректно введены данные',
				type: 'tel',
				nameField: 'phone'
			},
			{
				name: 'Пароль',
				message: 'Не корректно введены данные',
				type: 'password',
				nameField: 'pass'
			}
		]
	}
}
