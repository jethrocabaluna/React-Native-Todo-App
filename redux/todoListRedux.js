export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE'
}

export const actionCreator = {
    add: (todo) => {
        return {type: types.ADD, payload: todo}
    },
    remove: (id) => {
        return {type: types.REMOVE, payload: id}
    }
}

const initialState = {
    todos: [
        {
            id: 0,
            title: 'todo item 1',
            done: false,
            descriptionList: ['item-a', 'item-b'],
            priority: 2
        },
        {
            id: 1,
            title: 'todo item 2',
            done: false,
            descriptionList: [],
            priority: 1
        },
        {
            id: 2,
            title: 'todo item 3',
            done: false,
            descriptionList: ['item-a', 'item-b', 'item-c'],
            priority: 1
        },
        {
            id: 3,
            title: 'todo item 4',
            done: false,
            descriptionList: ['item-a'],
            priority: 3
        },
    ]
}

export const todoListReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.ADD:
            return {
                ...state,
                todos: [
                    action.payload,
                    ...state.todos
                ]
            }
        case types.REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
    }

    return state
}