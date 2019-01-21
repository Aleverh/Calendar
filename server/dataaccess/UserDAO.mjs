import { User } from '../models/User';

export default class UserDAO {

    getUser(login) {
        return User.findOne({ login: login })
    }

    getUserByLogin(id) {
        return User.findOne({ _id: id })
    }

    createUserEvent(login,data) {
        User.findById(login, (error, user) =>{
            user.event.push(data);
            user.save();
        });
        return User.findOne({ _id: login })
    }

    deleteUserEvent(login,eventId) {
        User.findById(login, (error, user) =>{
            user.event = user.event.filter( elem => elem._id.toString() !== eventId );
            user.save();
        });
        return User.findOne({ _id: login })
    }
}
