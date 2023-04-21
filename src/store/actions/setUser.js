export const setUser = function (newUser) {
    
    return {
        type: 'LOGIN_USER',
        payload: { newUser },
    };
};