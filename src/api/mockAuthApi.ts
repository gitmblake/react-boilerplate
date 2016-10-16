import delay from "./delay";

const users = [
    {
        id: "1",
        name: "Michael",
        username: "blakem",
        password: "secret",
        token: "1234567"
    }
];

class AuthApi {
    static login(username: string, password: string) {
        return new Promise((resolve, reject)  => {
            setTimeout(() => {
                const user = users.find(x => x.username == username && x.password == password);
                if(user) {
                    resolve({
                        data: {
                            token: user.token,
                            username: user.username,
                            isAuthenticated: true
                        }
                    });
                } else {
                    reject('Bad request');
                }
            }, delay);
        });
    }
    static loginWithToken(token: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = users.find(x => x.token == token);
                if(user) {
                    resolve({
                        data: {
                            token: user.token,
                            username: user.username,
                            isAuthenticated: true
                        }
                    });
                } else {
                    reject('Bad request');
                }
            }, delay)
        })
    }
}

export default AuthApi;