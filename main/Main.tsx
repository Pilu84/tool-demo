import * as React from 'react';
import style from './main.less';
import { LoginForm } from './loginForm';
import { MainContent } from '../content/MainContent';
import { slide as Menu } from 'react-burger-menu';
import './burgerMenu.css';
import menu from '../data/menu.json';

interface MainState extends React.ClassAttributes<any> {
    userName: string;
    hiddenMenu: boolean;
    selectedMenu: number;
}

export class Main extends React.Component<{}, MainState> {
    constructor(props: any) {
        super(props);

        this.state = {
            userName: '',
            hiddenMenu: false,
            selectedMenu: 1
        };

        this.handleStateChange = this.handleStateChange.bind(this);

    }

    componentDidMount() {
        const cookie = document.cookie;
        const parts = cookie.split(';');
        parts.forEach((p: string) => {
            const arr = p.split('=');
            const name = arr[0].trim();
            const value = arr[1];
            if (name === 'user') {
                this.setState({ userName: value });
            }
        });
    }

    render() {
        const img = require('../img/logo_mittel.png');
        return (
            <div>
                {!this.state.userName &&
                    <div className={style.loginWrapper}>
                        <LoginForm
                            setUserName={(userName) => {
                                const date = new Date();
                                date.setTime(date.getTime() + (1 * 24 * 3600 * 1000));
                                document.cookie = 'user=' + userName + '; expires=' + date.toUTCString() + '; path=/';
                                this.setState({ userName });
                            }
                            }
                        />
                    </div>
                }

                {this.state.userName &&
                    <div>
                        <div className={style.topWrapper}>
                            <div className={style.logoWrapper}>
                                <img src={img} width={150} />
                            </div>

                            {this.state.selectedMenu !== 1 &&
                                this.renderTitel()
                            }

                            <div style={{ width: '50px' }} onMouseLeave={() => this.setState({ hiddenMenu: false })}>
                                <Menu right
                                    isOpen={this.state.hiddenMenu}
                                    onStateChange={(state: any) => this.handleStateChange(state)}
                                >
                                    <span className='userName' >{'User: ' + this.state.userName}</span>

                                    {menu.menuPunkt.map((item: any, idx: number) => {

                                        if (item.id === 6) {
                                            return (
                                                <div className='menu-item' key = {'menu_' + idx}
                                                    onClick={() => {
                                                        if (confirm('Wirklich ausloggen?')) {
                                                            const date = new Date();
                                                            date.setTime(date.getTime() + (-1 * 24 * 3600 * 1000));
                                                            document.cookie = 'user= ; expires=' + date.toUTCString() + '; path=/';
                                                            this.setState({ userName: '', selectedMenu: 1, hiddenMenu: false });
                                                        }
                                                    }}
                                                >
                                                    <p>Ausloggen</p>
                                                </div>
                                            );
                                        }
                                        return (
                                            <div className='menu-item' key = {'menu_' + idx}
                                                onClick={() => this.setState({ selectedMenu: item.id, hiddenMenu: false })}>
                                                <p>{item.name}</p>
                                            </div>
                                        );
                                    })}

                                </Menu>
                            </div>
                        </div>

                        <div className={style.contentWrapper}>
                            <MainContent
                                selectedMenu={this.state.selectedMenu}
                            />
                        </div>
                    </div>
                }


            </div>
        );
    }


    handleStateChange(state: any) {
        this.setState({ hiddenMenu: state.isOpen });
    }

    renderTitel() {
        const selectedMenu = this.state.selectedMenu;

        return (
            <div className={style.mainTitel}>
                <p>{menu.menuPunkt[selectedMenu - 1].name}</p>
            </div>
        );

    }

}
