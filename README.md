
# Задание на верстку

## Структура
    index.html - главная страница
    newevent.html - создание встречи
    editevent.html - редктирование встречи

## Описание

### Общие элементы
Логотип является ссылкой на главную страницу сайта

### Главная

 - По клику на дату можно открыть/закрыть календарь. В календаре закрашенным кружком обозначается выбранная дата, не закрашенным - текущая дата.
 **Логика работы календаря будет реализована в следующей части.**
 - По клику на первой встрече в переговорке "Ржавый Фред" открывается/закрывается тултип с описанием встречи. ** Корректная логика работы будет реализована в следующей части.** Так сделал лишь для того чтобы показать верстку.
 - По клику на иконку "карандаш" в тултипе встречи, произойдет переход на страницу редактирования встречи.
 - По клику на кнопку "Создать встречу" произойдет переход на страницу создания встречи.
 - На разрешении больше 1280px по hover на свободное время появляется "+", кликнув по которому, произойдет переход на страницу создания встречи. **Временное решение для того чтобы показать верстку** Так как время встреч кратно 15 минутам, может так случиться, что промежуток между двумя бронями переговорки, будет равно 15 минутам, по hover на такой промежуток времени "+" займет все доступное место промежутка, т.к отобрженный "+" на макете не поместится туда физически.
 - В мобильной версии, на макете расстояние от начала расписания до 8:00 больше чем на десктопной версии, но т.к переговорки можно бронировать только с 8:00, это место получается бесполезным, сделал его таким же как в десктопе чтобы не нарушать концепцию, но оставить больше места для расписания.
 
 # PS
 Данная часть была вынесена из основной ветки после просмотра онлайн трансляции. В 3 части верстка отчасти понесла изменения но суть её осталась тойже. 
