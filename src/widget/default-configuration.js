
export const defaultConfiguration = {
    titleClosed: 'Чат!',
    titleOpen: 'Техническая поддержка',
    closedStyle: 'chat', // button or chat
    closedChatAvatarUrl: '', // only used if closedStyle is set to 'chat'
    cookieExpiration: 10, // in days. Once opened, closed chat title will be shown as button (when closedStyle is set to 'chat')
    introMessage: 'Здесь можете задать любые вопросы относительно проекта.',
    autoResponse: 'Скоро ответим, пожалуйста, подождите ;-)',
    autoNoResponse: 'Прошла минута, мы не ответили, очевидно - заняты. Мы получили ваше сообщение, обязательно ответим. ' +
    'История чата не сотрется, так что, сможете и позже прочитать ответ.',
    placeholderText: 'Введите сообщение',
    displayMessageTime: true,
    mainColor: '#1f8ceb',
    visitorName: null,
    projectName: 'Тех.поддержка',
    alwaysUseFloatingButton: false,
    desktopHeight: 450,
    desktopWidth: 370
};
