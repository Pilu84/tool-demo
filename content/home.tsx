import * as React from 'react';


interface HomeContentProps extends React.ClassAttributes<any> {
    contentText: any;
}

export class HomeContent extends React.Component<HomeContentProps, {}> {
    constructor(props: any) {
        super(props);


    }

    render() {
        const homeText = this.props.contentText;
        return (
            <>
                <h2>{homeText.headTitel}</h2>

                <h3>{homeText.unterTitel}</h3>

                {homeText.paragraphs.map((item: string, idx: number) => {
                    return(
                        <p key={'contentparagraph_' + idx}>
                            {item}
                        </p>
                    );
                })}

            </>
        );
    }
}
