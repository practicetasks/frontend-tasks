# Задача

Из всех полей ввода с идентификаторами скопируйте значение `id` и создайте в каждом поле атрибут `name` с аналогичным
значением.

`html`
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Формы ввода и шрифты</title>
    <link rel="stylesheet"
          href="https://raw.githubusercontent.com/necolas/normalize.css/refs/heads/master/normalize.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="page">
    <section class="form">
        <div class="form__toggle">
            <img class="form__toggle-image" src="https://practicetasks.github.io/css/img/input/close_icon.png">
        </div>
        <div class="form__container">
            <form class="form__admin">
                <div class="form__main-container">
                    <h2 class="form__heading">Задайте параметры</h2>
                    <fieldset class="form__input-container form__input-container_ctrl_texts">
                        <label for="heading" class="form__label">Заголовок</label>
                        <input id="heading" type="text" class="form__item form__item_el_heading">

                        <label for="subheading" class="form__label">Подзаголовок</label>
                        <input id="subheading" type="text" class="form__item form__item_el_subheading">

                        <label for="main-text" class="form__label">Текст статьи</label>
                        <textarea id="main-text" class="form__item form__item_el_main-text"></textarea>

                        <label for="email" class="form__label">E-mail</label>
                        <input id="email" type="email" class="form__item form__item_el_email">

                    </fieldset>
                    <div class="form__line"></div>
                    <fieldset class="form__input-container form__input-container_ctrl_visual">
                        <label for="font-family" class="form__label">Семейство шрифтов</label>
                        <select id="font-family" class="form__item form__item_el_font-family">
                            <option>IBM Plex Serif</option>
                            <option>Ubuntu</option>
                            <option>Istok Web</option>
                        </select>
                        <label for="heading-font-size" class="form__label">Размер текста заголовка</label>
                        <input id="heading-font-size" type="number" class="form__item form__item_el_heading-fontsize">

                        <label for="text-font-size" class="form__label">Размер текста абзаца</label>
                        <input id="text-font-size" type="number" class="form__item form__item_el_text-fontsize">

                        <label for="pub-date" class="form__label">Дата создания статьи</label>
                        <input id="pub-date" type="date" class="form__item form__item_el_pubdate">

                        <label for="image" class="form__label">Обложка статьи</label>
                        <select id="image" class="form__item form__item_el_image">
                            <option>Bombardier CS300</option>
                            <option>Боинг-777 Хоббит</option>
                            <option>Тигролёт</option>
                            <option>Connected to 01000010 01001100 01010101 01000101</option>
                        </select>
                    </fieldset>
                    <fieldset class="form__input-container form__input-container_ctrl_additional">
                        <label for="text-color" class="form__label">Цвет текста</label>
                        <input id="text-color" type="color" class="form__item form__item_el_text-color">
                        <label for="content-width" class="form__label">Ширина контента</label>
                        <input id="content-width" type="range" step="10" min="30" max="80"
                               class="form__item form__item_el_content-width">
                    </fieldset>
                </div>
                <fieldset class="form__handlers">
                    <input type="submit" class="form__button">
                    <input type="reset" class="form__button">
                </fieldset>
            </form>
        </div>
    </section>
    <section class="content">
        <div class="content__container">
            <header class="content__header">
                <h1 class="content__heading">Портрет Западной Швейцарии</h1>
                <h2 class="content__subheading">Примитивист Фиштр расписывает новый бюджетный авиалайнер</h2>
            </header>
            <div class="content__image">
                <img class="content__image-item" src="https://practicetasks.github.io/css/img/input/BOMBARDIER.jpg">
                <div class="content__image-copyright">
                    Фото:
                    <a class="content__link" href="https://www.flickr.com/photos/sloppyperfectionist/35863293766/"
                       target="_blank">
                        Hans-Peter Gauster
                    </a>
                    , "Bombardier CSeries CS300 HB-JCA" © 2017
                    <a class="content__link" href="https://creativecommons.org/licenses/by-sa/2.0/legalcode"
                       target="_blank">
                        CC BY-SA 2.0
                    </a>
                    &nbsp;&nbsp;
                </div>
            </div>
            <div class="content__text">
                <p class="content__paragraph">
                    В конце 2016 года швейцарская авиакомпания Swiss получила свой первый канадский «Бомбардье CS300»
                    для полётов малой и средней дальности. Чтобы придать новой 145-местной машине неповторимую
                    индивидуальность,
                    ливрею заказали живописцу. При условии, что эскиз он выполнит в одиночку и лично поправит роспись,
                    когда её будут наносить на фюзеляж.
                </p>
                <p class="content__paragraph">
                    Выбор пал на примитивиста Матиаса Форбаша, работающего под псевдонимом Фиштр. Ему поставили задачу
                    изобразить всё лучшее во франкоговорящей части Швейцарии — горы, озёра, вина, сыры,
                    доброжелательность
                    и свободу. Заказ был выполнен в рекордный срок, всего за 5 месяцев. Самолёт получился похожим на
                    самого
                    художника: такой же добродушный и с улыбкой до ушей.
                </p>
                <p class="content__paragraph">
                    С мая 2017 года "Бомбардье" носит имя "Швейцарская Романдия" и регистрационный номер
                    <a class="content__link" href="https://www.flightradar24.com/data/aircraft/hb-jca" target="_blank">
                        HB-JCA
                    </a>
                    ; совершает в среднем 4 коммерческих полёта в сутки. Его можно видеть в "Домодедово", а также в
                    аэропортах
                    Парижа, Валенсии, Кракова, Берлина, Вены, Загреба, на Майорке, Крите и Сицилии. Самолёт останется в
                    той же
                    ливрее, пока его не купит другая авиакомпания.
                </p>
            </div>
            <div class="content__date">10.10.18</div>
            <div class="content__author">
                Пишите автору на
                <a class="content__link content__link_type_email" href="mailto:mshifrin@example.org">
                    mshifrin@example.org
                </a>
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="footer__container"></div>
    </footer>
</div>
</body>
</html>
```


<br>

`css`
```css
/*
 * Сглаживание шрифтов для всей страницы, подробнее об этом —
 * в уроках про адаптацию страницы под различные устройства
 */

.page {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  -webkit-text-size-adjust: 100%;
  -ms-font-feature-settings: "kern" 1;
  font-feature-settings: "kern";
}

/*
 * Всю секцию, в которой расположена форма, мы прибили
 * к левому краю при помощи фиксированного позиционирования
 */

.form {
  width: 320px;
  height: 100vh;
  background: rgba(255, 255, 255, .95);
  border-right: 1px solid #000;
  position: fixed;
  top: 0;
  left: 0;
  transition: left .5s;
  font-family: 'Alegreya Sans', sans-serif;
}

/*
 * Класс, созданный для анимации секции с формой.
 * Свойство left будет плавно меняться, убирая секцию
 * за пределы экрана в нужный момент
 */

.form_is-closed {
  left: -320px;
}

/* Блок с иконкой, сворачивающей и раскрывающей секцию с формой */

.form__toggle {
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, .95);
  position: absolute;
  top: 0;
  right: -50px;
  display: flex;
  cursor: pointer;
  transition: opacity .4s;
}

.form__toggle:hover {
  opacity: .8;
}

.form__toggle-image {
  width: 12px;
  height: 20px;
  margin: auto;
}

/* Поворот иконки, отвечающей за анимацию секции с формой */

.form_is-closed .form__toggle-image {
  transform: rotate(180deg);
}

/*
 * Высота контейнера вычисляется функцией calc,
 * которую мы рассмотрим в уроках про адаптивную и отзывчивую верстку.
 * Свойство overflow отвечает за поведение внешнего контейнера в случае,
 * если содержимое не помещается в его размеры.
 * В данном случае — появится вертикальная прокрутка.
 */

.form__main-container {
  height: calc(100vh - 40px);
  overflow-y: scroll;
}

/* Заголовок формы */

.form__heading {
  font-size: 28px;
  line-height: 32px;
  width: 240px;
  margin: 23px auto 0;
}

.form__heading_type_ctrl-el-heading {
  margin: 35px auto 0;
  font-size: 20px;
  line-height: 30px;
  font-weight: normal;
}

/* Непосредственно форма */

.form__admin {
  height: 100vh;
}

/* Стили всех элементов fieldset */

.form__input-container {
  width: 240px;
  margin: auto;
  padding-bottom: 50px;
  border: 0;
}

/* Линия-разделитель между fieldset'ами */

.form__line {
  height: 1px;
  background-color: #000;
}

/* Общие стили для всех лейблов */

.form__label {

  margin: 35px auto 0;
  font-size: 20px;
  line-height: 30px;
}

/* Общие стили для всех полей ввода */
/*
.form__item {
  border: 0;
  width: 100%;
  height: 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #bcbcc4;
  background-color: transparent;
  margin-top: 5px;
  font-size: 14px;
  font-family: inherit;
}
*/

/* Замена цвета внешней линии при фокусе поля ввода */

/* Стилизуем плейсхолдеры */

/* Поля ввода */

/* Селектор класса поля ввода основного текста {
  background: #fff;
  height: 150px;
  font-size: 14px;
  padding: 6px 6px 4px;
  border: 1px solid #bcbcc4;
}
*/

/* Селектор поля ввода с типом "число" {
  background-color: white;
  color: black;
  border: 1px solid #bcbcc4;
  padding: 0 4px;
}
*/

/* Селектор поля ввода с типом "дата" {
  background-color: white;
  color: black;
  border: 1px solid #bcbcc4;
  padding: 0 4px;
  font-family: 'Alegreya Sans', sans-serif;
}
*/

/* Селектор поля ввода с типом "цвет" {
  height: 30px;
  width: 48px;
  border-bottom: 0;
  padding: 0;
}
*/

/* Селектор поля ввода с типом "диапазон" {
  width: 144px;
}
*/

/* Поле выпадающего списка с классом form_item */
/* select.form__item {
  background-color: white;
  color: black;
  border: 1px solid #bcbcc4;
}
*/

/* Селектор поля единичного выбора {
  display: inline-block;
  width: 16px;
  height: 16px;
}
*/

/* Селектор поля единичного выбора со значением атрибута value "two-columns" {
  margin-left: 25px;
}
*/

/* Селектор поля множественного выбора {
  display: inline-block;
  width: 16px;
  height: 16px;
  vertical-align: middle;
  margin: 0;
}
*/

.form__label_direction_right {
  display: inline;
  font-size: 14px;
  line-height: 30px;
  margin-left: 10px;
}

/* Зона кнопок и сами кнопки */

.form__handlers {
  border: 0;
  margin: 0;
  height: 40px;
}

/* Общие стили для всех кнопок */
/* .form__button {
  width: 50%;
  height: 40px;
  font-size: 14px;
  border: 0;
  margin: 0;
  padding-bottom: 5px;
  cursor: pointer;
  transition: opacity .4s;
  color: white;
  font-family: inherit;
}

.form__button:hover {
  opacity: .7;
}
*/

/* Замена цвета внешней линии при фокусе кнопки */

/* Селектор кнопки отправки данных {
  background-color: #000;
}
*/

/* Селектор кнопки сброса формы {
  background-color: #ea3a3a;
}
*/

/* Стили страницы */

.content {
  font-family: 'Playfair Display', serif;
  width: 90%;
  margin: 0 auto;
  padding-top: 60px;
}

.content__heading {
  font-size: 55px;
  width: 523px;
  margin: auto;
  line-height: 60px;
  text-align: center;
  font-weight: bold;
}

.content__subheading {
  text-align: center;
  width: 430px;
  font-size: 20px;
  line-height: 30px;
  margin: 40px auto;
}

.content__image-item {
  width: 100%;
}

.content__image-copyright {
  font-size: 14px;
  margin-top: 20px;
}

/*
 * В этом элементе мы применяем свойства column-count
 * и column-gap, они новые для вас.
 * Эти свойства разбивают текст на колонки.
 * column-count: 1; — означает текст в одну колонку
 * column-gap: 40px; — рекомендуемое расстояние между колонками
 */

.content__text {
  width: 70%;
  font-size: 20px;
  line-height: 30px;
  margin: 30px auto;
  column-count: 1;
  column-gap: 40px;
}

.content__paragraph {
  margin: 30px 0;
}

.content__link {
  color: black;
}

.content__date {
  font-size: 20px;
  width: 70%;
  margin: 90px auto 0;
  text-decoration: underline;
}

.content__author {
  font-size: 20px;
  width: 70%;
  margin: 20px auto 0;
}

.footer__container {
  height: 100px;
}
```