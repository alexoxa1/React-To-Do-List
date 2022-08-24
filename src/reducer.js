export default function(state, action) {
    switch (action.type) {
/* Adding a new todo to the state. */
        case "add":
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ]
/* Toggling the completed property of the todo with the id that matches the payload. */
        case "toggle":
            return state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
/* Filtering out the todo with the id that matches the payload. */
        case "remove":
            return state.filter(todo => todo.id !== action.payload )   
        default:
            return state
    }
}