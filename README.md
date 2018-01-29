# Приложение для создания и редактирования информации о встречах сотрудников

Написано для Node.js 8 и использует библиотеки:
* express
* sequelize
* graphql

## Задание
Код содержит ошибки разной степени критичности. Некоторых из них стилистические, а некоторые даже не позволят вам запустить приложение. Вам необходимо найти и исправить их.

Пункты для самопроверки:
1. Приложение должно успешно запускаться
2. Должно открываться GraphQL IDE - http://localhost:3000/graphql/
3. Все запросы на получение или изменения данных через graphql должны работать корректно. Все возможные запросы можно посмотреть в вкладке Docs в GraphQL IDE или в схеме (typeDefs.js)
4. Не должно быть лишнего кода
5. Все должно быть в едином codestyle

## Запуск
```
npm i
npm run dev
```

Для сброса данных в базе:
```
npm run reset-db
```

## Решение

1. Приложение не запускалось потому что в создании Sequelize вместо параметров подключения к бд были переданы null (models/index.js)
2. GraphQL IDE не запускалась потому что была ошибка в index.js было '/graphgl' стало '/graphql'

## Запросы
    ### event
    ```
    query event {
      event(id: 3) {
        id
        title
      }
    }
    ```

    ### events
    Была допущена ошибка, передавалась неопределенная переменная arguments
    ```
    query events {
      events {
        id
        title
      }
    }
    ```

    ### user
    ```
    query user {
      user(id:1) {
        id
        login
      }
    }
    ```

    ### users
    ```
    query users {
      users {
        id
        login
      }
    }
    ```

    ### room
    ```
    query room {
      room(id: 1) {
        id
        title
      }
    }
    ```

    ### rooms
    Запрос отрабатывал корректно за исключением свойства offset: 1, которое исключало из выборки первую комнату
    ```
    query rooms {
      rooms{
        id
        title
      }
    }
    ```
## Мутации

    ### createuser
    ```
    mutation createUser {
      createUser (input: {
        login: "super man",
        homeFloor: 5
      }) {
        id
        login
        homeFloor
      }
    }
    ```

    ### updateUser
    ```
    mutation updateUser {
      updateUser(id: 5, input: {
        login: "super man was updated",
        homeFloor: 5
      }) {
        id
        login
        homeFloor
      }
    }
    ```

    ### removeUser
    ```
    mutation removeUser {
      removeUser(id: 4) {
        id
        login
      }
    }
    ```

    ### createRoom
    ```
    mutation createRoom {
      createRoom(input: {
        title: "first room",
        capacity: 10,
        floor: 5
      }) {
        id
        title
        capacity
        floor
      }
    }
    ```

    ### updateRoom
    ```
    mutation updateRoom {
      updateRoom(id: 6, input: {
        title: "first room was updated",
        capacity: 10,
        floor: 5
      }){
        id
        title
        capacity
        floor
      }
    }
    ```

    ### removeRoom
    ```
    mutation removeRoom {
      removeRoom(id: 6) {
        id
        title
      }
    }
    ```

    ### createEvent
    Запрос на создание вчтречи корректно обрабатывался за исключением того факта что он не создавал записи в таблице связей,
    проблема заключалась в файле graphql/resolvers/index.js в объекте event некорректно отрабатывали методы users и room
    ```
    mutation createEvent {
      createEvent(input: {
        title: "first event",
        dateStart: "2017-12-13T22:15:00.000Z",
        dateEnd: "2017-12-13T23:15:00.000Z"
      }, usersIds: [1,2,3], roomId: 1) {
        id
        title
        dateStart
        dateEnd
      }
    }
    ```

    ### updateEvent
    ```
    mutation updateEvent{
      updateEvent(id: 4, input: {
        title: "first event was upadated",
        dateStart: "2017-12-13T22:15:00.000Z",
        dateEnd: "2017-12-13T23:15:00.000Z"
      }) {
        id
        title
        dateStart
        dateEnd
      }
    }
    ```

    ### removeUserFromEvent
    ```
    mutation removeUserFromEvent {
      removeUserFromEvent(id: 4, userId: 2) {
        id
        title
        users {
          id
        }
      }
    }
    ```

    ### changeEventRoom
    В запросе была ошибка, вместо roomId, в функцию event.setRoom передавался id встречи
    ```
    mutation changeEventRoom {
      changeEventRoom(id: 4, roomId: 2) {
        id
        title
        room {
          id
        }
      }
    }
    ```

    ### removeEvent
    ```
    mutation removeEvent {
      removeEvent(id: 4) {
        id
        title
      }
    }
    ```
