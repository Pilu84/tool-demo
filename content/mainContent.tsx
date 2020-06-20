import * as React from 'react';
import * as classNames from 'classnames';
import style from './content.less';
import { HomeContent} from './home';
import { FragenBoxen } from './fragenBoxen';
import { InhaltsUebersicht } from './inhaltsUebersicht';
import { Aufnahmebogen } from './aufnahmenBogen';
import { NaceTable } from './naceTable';
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

                    {this.props.selectedMenu === 3 &&
                        <div style = {{width: '100%'}}>
                            <InhaltsUebersicht />
                        </div>
                    }

                    {this.props.selectedMenu === 4 &&
                        <div style = {{width: '100%'}}>
                            <Aufnahmebogen />
                        </div>
                    }

                    {this.props.selectedMenu === 5 &&
                        <div style = {{width: '100%'}}>
                            <NaceTable />
                        </div>
                    }
                </div>

            </div>
        );
    }
}
