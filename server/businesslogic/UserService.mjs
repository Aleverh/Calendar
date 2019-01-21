import { User } from '../models/User'
import UserDAO from '../dataaccess/UserDAO.mjs';
import jsonfile from 'jsonfile';

export default class UserService {

    constructor() {
        this._userDAO = new UserDAO();
    }

    isPasswordCorrect(login, password) {
        return this._userDAO.getUser(login)
            .then(user => user.password === password ? user.id : null);
    }

    createLogin(login, pass){
        const newUser = new User({
            login : login,
            password: pass,
            events: []
        });
        newUser.save();
        return newUser;
    }

    async getUserEvents(login) {
        return await this._userDAO.getUserByLogin(login)
            .then(user => user.event);
    }

    async createEvent({ login, title, start, duration }) {
        return await this._userDAO.createUserEvent(login, { title, start, duration });
    }

    async deleteUserEvent(login, eventName) {
        return await this._userDAO.deleteUserEvent(login, eventName);
    }
    async exportUserEventData(login) {
        let userData = await this._userDAO.getUserByLogin(login);
        jsonfile.writeFile('userData.json', userData.event);
    }

}
