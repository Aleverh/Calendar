import React, {Component} from 'react';

export class Login extends Component {
    render() {
        const onLogin = () => {
            const data = {
                login: this.login.value,
                password: this.password.value,
            };
            this.props.login(data);
        };
        const createLogin = () => {
            const data = {
                login: this.createLogin.value,
                password: this.createPassword.value,
            };
            this.props.createLogin(data);
        };
        return (
            <div>
                <div className='new_event__container'>
                    <input type="text" placeholder='Create login' ref={login => this.createLogin = login}/>
                    <input type="password" placeholder='Create password' ref={password => this.createPassword = password}/>
                    <button onClick={ createLogin }>Login</button>
                </div>
                <div className='new_event__container'>
                    <input type="text" placeholder='Add login' ref={login => this.login = login}/>
                    <input type="password" placeholder='Add password' ref={password => this.password = password}/>
                    <button onClick={ onLogin }>Login</button>
                </div>
            </div>
        );
    }
}