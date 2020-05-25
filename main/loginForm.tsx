import * as React from 'react';
import style from './main.less';

interface LoginFormProps extends React.ClassAttributes<any> {
    setUserName: (userName: string) => void;
}

interface LoginFormState extends React.ClassAttributes<any> {
    userName: string;
    error: boolean;
}

export class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
    constructor(props: any) {
        super(props);

        this.state = {
            userName: '',
            error: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e: any) {
        e.preventDefault();
        if (this.state.userName) {
            this.props.setUserName(this.state.userName);
        } else {
            this.setState({error: true});
        }
    }

    render() {
        const img = require('../img/logo_mittel.png');

        return (
            <div>
                <div style = {{marginBottom: '20px'}}>
                    <img src={img} />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className={style.loginBox}>
                        <input type='text' name='userName' placeholder = 'Benutzername'
                                className={this.state.error ? style.error : null}
                                onChange = {(e: any) => {
                                    this.setState({userName: e.target.value});
                                    if (this.state.error) { this.setState({error: false}); }
                                }}/>
                        {this.state.error &&
                            <p style = {{color: 'red', margin: 0}}>Bitte Feld 'Benutzername' ausfüllen</p>
                        }
                        <input type='password' name='userPass' placeholder = 'Kennwort' />
                        <button
                            className = {style.button}
                        >
                            Einloggen
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
