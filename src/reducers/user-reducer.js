export default function userReducer(state = '', { type, payload }) {
    switch(type) {
        case "updateUser":
            return payload;
    }

    // return initial state
    return state;
}