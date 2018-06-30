
export const defaultConfiguration = {
    titleClosed: 'Click to chat!',
    titleOpen: 'Let\'s chat!',
    closedStyle: 'chat', // button or chat
    closedChatAvatarUrl: '', // only used if closedStyle is set to 'chat'
    cookieExpiration: 1, // in days. Once opened, closed chat title will be shown as button (when closedStyle is set to 'chat')
    introMessage: 'Это чат со мной. Здесь можно задать вопрос или написать что-нибудь.',
    autoResponse: 'Спасибо за сообщение. Постраюсь отписать Вам, как можно быстрее.',
    autoNoResponse: 'Мне не удалось быстро найти ответ на Ваше сообщение или я сейчас недоступен. ' +
    'Но я обязательно отпишу Вам позже.',
    placeholderText: 'Введите сообщение',
    displayMessageTime: true,
    mainColor: '#1f8ceb',
    alwaysUseFloatingButton: false,
    desktopHeight: 450,
    desktopWidth: 370
};
