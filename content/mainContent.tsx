import * as React from 'react';
import * as classNames from 'classnames';
import style from './content.less';
import { HomeContent} from './home';
import { FragenBoxen } from './fragenBoxen';
import text from '../data/text.json';


interface MainContentProps extends React.ClassAttributes<any> {
    selectedMenu: number;
}

interface MainContentState extends React.ClassAttributes<any> {
}

export class MainContent extends React.Component<MainContentProps, MainContentState> {
    constructor(props: any) {
        super(props);


    }

    render() {
        return (
            <div>

                <div className={style.mainContentBox}>

                    {this.props.selectedMenu === 1 &&
                        <HomeContent contentText={text.wilkommen}/>
                    }
                    {this.props.selectedMenu === 2 &&
                        <div style = {{width: '100%'}}>
                            <FragenBoxen contentText={text.config}/>
                        </div>
                    }

                </div>

            </div>
        );
    }
}
