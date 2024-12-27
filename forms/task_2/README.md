# Задача

Начнём дорабатывать форму с радиокнопок. Чтобы объединить радиокнопки в одну группу, укажите им одинаковое значение
атрибута `name` и разное `value` (например, копируйте значение `id` для `value`):

`html`
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Поля формы</title>
    <link rel="stylesheet" href="./style.css" />
</head>
<body>
<form action="submit" class="main">
    <h2 class="question">Когда легче концентрироваться?</h2>
    <fieldset class="concentration">
        <div>
            <!-- добавьте ↓ name="concentration" value="morn" -->
            <input type="radio" id="morn" />
            <label for="morn">Утром</label>
        </div>
        <div>
            <!-- задайте такое же имя, но другое значение -->
            <input type="radio" id="day" />
            <label for="day">Днём</label>
        </div>
        <div>
            <!-- задайте такое же имя, но другое значение -->
            <input type="radio" id="evn" />
            <label for="evn">Вечером</label>
        </div>
        <div>
            <!-- задайте такое же имя, но другое значение -->
            <input type="radio" id="night" />
            <label for="night">Ночью</label>
        </div>
    </fieldset>
    <button type="submit">Поделиться</button>
</form>
</body>
</html>
```

`css`
```css
* {
    box-sizing: border-box;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 650px;
    min-height: 100vh;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-image: url(https://practicetasks.github.io/css/img/dotted-l.svg);
}

h2 {
    margin-top: 0;
}

div {
    display: flex;
    align-items: center;
    gap: 10px;
}

fieldset {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 0 10px;
    border: none;
}

button {
    display: block;
    border: 1px solid #000;
    padding: 10px 65px;
    color: #000;
    font-family: inherit;
    font-weight: 800;
    font-size: inherit;
    text-transform: uppercase;
    background-color: #ffc802;
}

button:hover {
    box-shadow: inset 0 0 0 100px rgb(0 0 0 / 0.15);
    cursor: pointer;
}

button:focus {
    outline: 2px solid #000;
    outline-offset: 0;
}

label {
    display: block;
    margin: 0 0 5px;
    font-weight: 800;
    font-size: 12px;
    text-transform: uppercase;
}

input[type=checkbox] {
    width: 27px;
    height: 27px;
    margin: 0;
    accent-color: #000;
}

input[type=checkbox]:focus {
    outline: 2px solid #000;
    outline-offset: 0;
}

input[type=radio] {
    width: 27px;
    height: 27px;
    accent-color: #000;
}

input[type=radio]:focus {
    outline: 2px solid #000;
    outline-offset: 0;
}

form {
    border: 1px solid #000;
    padding: 45px;
    background-color: #80d994;
}

.agree {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    overflow: hidden;

    /* clip: rect(0 0 0 0); */
    clip-path: inset(0, 0, 0, 0);
}
```