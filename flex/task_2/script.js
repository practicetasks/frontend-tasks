const buttons = document.querySelectorAll('.tabs button');
const content = document.querySelector('.tablist-content');

const texts = [
    'Вид отрицательно окрашенной эмоции или настроения. Пассивное психическое состояние, для которого характерны снижение активности и отсутствие интереса к какой-либо деятельности, окружающему миру и другим людям. Сопровождается раздражительностью и беспокойством.',
    'Отсутствие или недостаток трудолюбия. Предпочтение свободного времяпрепровождения, а не трудовой деятельности. Традиционно расценивается как порок, поскольку считается, что такой человек — нахлебник общества.',
    'Внутреннее чувство удовлетворения, удовольствия, весёлого настроения и счастья.'
];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        content.textContent = texts[index];

        document.querySelector('.active').classList.remove('active');
        button.classList.add('active');
    });
});