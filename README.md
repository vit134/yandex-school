# Приложение для создания и редактирования информации о встречах сотрудников

Написано для Node.js 8 и использует библиотеки:
* express
* sequelize
* graphql

## Запуск
```
npm i
npm run dev
```

Для сброса данных в базе:
```
npm run reset-db
```


# Решение
В данной ветке репозитория выполнены все три задания: backend, верстка, js.

Приложение обладает всем функционалом описанном в задании и отрисованном в макетах

# Задание #1

* Приложение не запускалось потому что, в файле models/index.js в new Sequelize нужно было передать 'database', 'username', 'password'
* Не открывалась GraphQL IDE потому что, в index.js была опечатка (было /graphGl, стало /graphQl)
* Были испрвлены некоторые запросы и мутации ( в них либо не передавались необходимые параметры либо они не возвращали необходимый результатб так же в файле qraphql/resolvers/index.js методы users и room, из-за которых не корректно работали свзя таблиц БД)

# Задание #2

### Приложение имеет 5 контрольных точек адаптивности
* 1280px - максимальная ширина контента
* 769px - переход на планшетную версию
* 641px - маленькие планшеты
* 415px - большие мобильные телефоны
* 376px - минимальные экраны

### Основные переходы между состояниями
* При переходе на планшетную весрию колонка с комнатами остается на месте, в расписании появляется горизонтальный скролл
* При переходе на большие мобильные телефоны скроллится вся контентаная область.
* Изменения в попапах создания и редактирования встреч выполены согласно макетам.

# Задание #3

Полоса текущего времени отобржаетсяя только в интервале от 8 утра до 23 вечера.

Судя из задания : "При клике по свободному «слоту» в списке переговорок происходит переход на форму создания встречи с заполненным временем проведения и названием переговорки", не совсем понятно что считать свободным "слотом", я предположил что это любое не забронированное время переговорки будь то интервал с 15:00 до 17:00 или с 08:00 до 23:00.

В макете, время до 8:00 и после 23:00 нарисовано таким же цветом как и занятый интервал, судя по тому что это время не может быть занято, сделал его белым. Так более наглядно видно когда начинается и заканчивается встреча.

Календарь на три месяца (на главной) в на мобильной версии урезан до 1 месяца, в угоду адаптивности (календарь на три месяца с трудом помещался на маленьких мобильных телефонах, а выбрать нужную дату не получится и подавно)

Кнопки сохранения встречи по умолчанию в состоянии disbled, если форма прошла валидацию кнопка становится активной

### Используемые инструменты
* twig.js - шаблонизатор
* moment.js - работа с датами и интервалами дат
* JQuery UI datepicker - календари (своя стилизация)
* gulp - сборка статики


### Изменения в структуре БД
В приложении добавлена новая связь таблиц Room.hasMany(Event); для выборки встреч по комнатам
Изменен запрос room, в выборку добвалены таблицы Events и Users для дальнейшей работы со встречами разбитыми по комнатам и этажам

### В приложение добавлена валидация перед отправкой данных на сервер:
* Тема встречи (required)
* Переговорка (required)
* Корректность введенного времени (pattern "^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$")


# **PS**

Логика построения расписания основана на добавлении к существующим встречам пустых "встреч" заполняющих оставшееся время, в дальнейшем проиходит расчет длины каждого интервала и отображение их в расписнии (moment-range)

В файле getRecommendation.js оставил комментарии которые, надеюсь, помогут понять ход моих мыслей.

# Обновлено
Добавлены забытые крестик и стрелочка для инпута с выпадающим списком

Исправлена ошибка в случае если попытаться создать встречу на дату меньше 10 числа месяца

Добавлены проверки к полям формы новой встречи и редактирования встречи :
    1. Проверка на время встречи (с 8 до 23)
    2. Проверка на кратность времени 15 минутам
    3. Проверка на время начала больше времени окончания и наоборот
    4. На всякий случай добавлена проверка на количесвто участников встречи
    5. Оптимизирован код в файле public/scripts/index/main.js

Русифицирован календарь

На главной календарь теперь содержит 3 месяца (на мобильной 1 месяц)



