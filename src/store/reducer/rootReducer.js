const initState = {
    user: [
         {bearerToken: "1", expirdTime: "2023-04-25", time: "2023-04-18", type: "..", username: ".."}
    ],

    isLogin: false
}
const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_USER':
            return { user: action.payload.newUser, isLogin: true };
            
        case 'LOGOUT_USER':
            return { user: initState.user, isLogin: false };
        default:
            return state;
    }
    //return state;
}


export default rootReducer;