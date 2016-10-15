import delay from "./delay";

const users = [
    {
        id: "1",
        name: "Michael",
        username: "blakem",
        password: "secret"
    }
];

class AuthApi {
    static login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = users.find(x => x.username == username && x.password == password);
                if(user) {
                    resolve({
                        token: '1234567'
                    });
                } else {
                    reject('Bad request');
                }
            }, delay);
        });
    }
}

export default AuthApi;