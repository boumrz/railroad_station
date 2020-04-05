export const checkUser = (obj, params) => {
    const currentUser = {};

    obj.map((items) => {
        if (items.login === params.user.login && items.password === params.user.password) {
            currentUser.login = items.login;
            currentUser.password = items.password;
        }
    });

    return currentUser;
}