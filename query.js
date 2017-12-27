query getUser {
  user(id:4) {
    login
    homeFloor
  }
}

query getAllUser {
  users {
    id
  }
}

query getRoom {
  room(id:6) {
    id
    title
    capacity
    floor
  }
}

query getEvent {
  event(id: 5) {
    id
    title
    users {
      id
    }
    dateStart
    dateEnd
    room {
      id
    }
  }
}

mutation createUser {
  createUser(input:{login: "vit"}) {
    id
  }
}

mutation updateUser {
  updateUser(id: 4, input: {login: "vit134"}) {
    id
  }
}

mutation removeUser {
  removeUser(id: 4) {
    id
  }
}

mutation createRoom {
  createRoom(input: {title: "room 1", capacity: 12, floor: 1}) {
    id
  }
}

mutation updateRoom {
  updateRoom(id: 6, input: {title: "room 2", capacity: 12, floor: 3}) {
    id
  }
}

mutation removeRoom {
  removeRoom(id: 6) {
    id
  }
}

mutation createEvent {
  createEvent(
    input: {
      title: "new Event with user",
      dateStart: "2017-12-26T15:05:00.000Z",
      dateEnd: "2017-12-27T15:05:00.000Z"
    },
    usersIds: [1,2],
    roomId: 2
  ) {
    id
    title
    users {
      id
    }
    room {
      id
    }
  }
}

mutation updateEvent {
  updateEvent(
    id: 5,
    input: {
      title: "update New Event",
      dateStart: "2017-12-26T15:05:00.000Z",
      dateEnd: "2017-12-27T15:05:00.000Z"
    }
  ) {
    id
  }
}

mutation addUserToEvent {
  addUserToEvent(id: 7, userId: 2) {
    id
  }
}
