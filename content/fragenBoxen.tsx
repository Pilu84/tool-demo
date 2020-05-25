import * as React from 'react';
import style from './content.less';

interface FragenBoxenProps extends React.ClassAttributes<any> {
    contentText: any;
}

interface FragenBoxenState extends React.ClassAttributes<any> {
    antworts: any;
}

export class FragenBoxen extends React.Component<FragenBoxenProps, FragenBoxenState> {
    constructor(props: any) {
        super(props);

        this.state = {
            antworts: {}
        };

        this.setAntwort = this.setAntwort.bind(this);

    }

    render() {
        console.log(this.state.antworts);
        const contentText = this.props.contentText;

        return (
            <div>

                {contentText.map((text: any, idx: number) => {
                    return (
                        <div className={style.box} key={'frage_' + idx}>
                            <div className={style.boxTitel}>
                                <p>{text.question}</p>
                            </div>
                            <div className={style.boxContent_Column}>
                                <div className={text.type === 'radio' ? style.radioElement : style.checkBoxElement}>
                                    {text.answers.map((answer: string, id: number) => {
                                        return(<>
                                            <input
                                                type={text.type}
                                                name={text.name}
                                                value={id}
                                                onChange={(e: any) => this.setAntwort(e)}
                                            />
                                            <p>{answer}</p>
                                        </>);
                                    })}
                                    {text.extraInfo &&
                                    <div>
                                        <p>{text.extraInfo}</p>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })}

                <div className={style.box}>
                    <div className={style.boxTitel}>
                        <p>In welchem Kontext möchten Sie das vorliegende E-Tool nutzen?</p>
                    </div>
                    <div className={style.boxContent_Column}>
                        <div className={style.radioElement}>
                            <input
                                type='radio'
                                name='kontext'
                                value={1}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Energiebuch - Mittelstandsinitiative Energiewende und Klimaschutz</p>
                        </div>
                        <div className={style.radioElement}>
                            <input
                                type='radio'
                                name='kontext'
                                value={2}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Netzwerkarbeitsbuch - Initiative Energieeffizienznetzwerke (IEEN)</p>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.boxTitel}>
                        <p>Welche Energieträger werden in Ihrem Betrieb zur Wärmeerzeugung genutzt?</p>
                    </div>
                    <div className={style.boxContent_Column}>
                        <div className={style.firstList}>
                            <div className={style.checkBoxElement}>
                                <input
                                    type='checkbox'
                                    name='energietraeger'
                                    value={1}
                                    onChange={(e: any) => this.setAntwort(e)}
                                />
                                <p>Heizöl</p>
                            </div>
                            <div className={style.checkBoxElement}>
                                <input
                                    type='checkbox'
                                    name='energietraeger'
                                    value={2}
                                    onChange={(e: any) => this.setAntwort(e)}
                                />
                                <p>Biomasse</p>
                            </div>
                            <div className={style.checkBoxElement}>
                                <input
                                    type='checkbox'
                                    name='energietraeger'
                                    value={3}
                                    onChange={(e: any) => this.setAntwort(e)}
                                />
                                <p>Sonstige Energiträger 1</p>
                            </div>
                        </div>

                        <div className={style.secondList}>
                            <div className={style.checkBoxElement}>
                                <input
                                    type='checkbox'
                                    name='energietraeger'
                                    value={4}
                                    onChange={(e: any) => this.setAntwort(e)}
                                />
                                <p>Erdgas</p>
                            </div>
                            <div className={style.checkBoxElement}>
                                <input
                                    type='checkbox'
                                    name='energietraeger'
                                    value={5}
                                    onChange={(e: any) => this.setAntwort(e)}
                                />
                                <p>Fernwärme</p>
                            </div>
                            <div className={style.checkBoxElement}>
                                <input
                                    type='checkbox'
                                    name='energietraeger'
                                    value={6}
                                    onChange={(e: any) => this.setAntwort(e)}
                                />
                                <p>Sonstige Energiträger 2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.boxTitel}>
                        <p>Werden erneuerbare Energien genutzt?</p>
                    </div>
                    <div className={style.boxContent_Row}>
                        <div className={style.radioElement}>
                            <input
                                type='radio'
                                name='erneuerbare_energie'
                                value={1}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>ja</p>
                        </div>
                        <div className={style.radioElement}>
                            <input
                                type='radio'
                                name='erneuerbare_energie'
                                value={2}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Nein</p>
                        </div>
                        <div>
                            <p>(z.B. Photovoltaik, Windkraft, KWK, Solarthermie, Biomasse,…)</p>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.boxTitel}>
                        <p>Möchten Sie Daten zu Ihren Maschinen/Anlagen erfassen?</p>
                    </div>
                    <div className={style.boxContent_Row}>
                        <div className={style.radioElement}>
                            <input
                                type='radio'
                                name='maschinen'
                                value={1}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>ja</p>
                        </div>
                        <div className={style.radioElement}>
                            <input
                                type='radio'
                                name='maschinen'
                                value={2}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Nein</p>
                        </div>
                        <div className={style.checkBoxElement}>
                            <input
                                type='checkbox'
                                name='druckvorlag'
                                value={1}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Druckvorlage 'Lageplan' anzeigen</p>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.boxTitel}>
                        <p>Möchten Sie Daten zu Ihren Fahrzeugen erfassen?</p>
                    </div>
                    <div className={style.boxContent_Row}>
                        <div className={style.radioElement}>
                            <input
                                type='radio'
                                name='fahrzeug'
                                value={1}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>ja</p>
                        </div>
                        <div className={style.radioElement}>
                            <input
                                type='radio'
                                name='fahrzeug'
                                value={2}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Nein</p>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.boxTitel}>
                        <p>Möchten Sie Informationen zum Thema Zertifizierung/Alternatives System?</p>
                    </div>
                    <div className={style.boxContent_Row}>
                        <div className={style.radioElement}>
                            <input
                                type='radio'
                                name='info_alternative'
                                value={1}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>ja</p>
                        </div>
                        <div className={style.radioElement}>
                            <input
                                type='radio'
                                name='info_alternative'
                                value={2}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Nein</p>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.boxTitel}>
                        <p>Sonstige Informationen</p>
                    </div>
                    <div className={style.boxContent_Row}>
                        <div className={style.checkBoxElement}>
                            <input
                                type='checkbox'
                                name='sonst_info'
                                value={1}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Erläuterungen</p>
                        </div>
                        <div className={style.checkBoxElement}>
                            <input
                                type='checkBox'
                                name='sonst_info'
                                value={2}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Emissionsfaktoren</p>
                        </div>
                        <div className={style.checkBoxElement}>
                            <input
                                type='checkBox'
                                name='sonst_info'
                                value={3}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Glossar</p>
                        </div>
                    </div>
                </div>

                <div className={style.box}>
                    <div className={style.boxTitel}>
                        <p>Zusätzliche Tools/Hilfsmittel</p>
                    </div>
                    <div className={style.boxContent_Row}>
                        <div className={style.checkBoxElement}>
                            <input
                                type='checkbox'
                                name='zusaetlich_tool'
                                value={1}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Notizblatt</p>
                        </div>
                        <div className={style.checkBoxElement}>
                            <input
                                type='checkBox'
                                name='zusaetlich_tool'
                                value={2}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Tool: Ölverbrauch</p>
                        </div>
                        <div className={style.checkBoxElement}>
                            <input
                                type='checkBox'
                                name='zusaetlich_tool'
                                value={3}
                                onChange={(e: any) => this.setAntwort(e)}
                            />
                            <p>Tool: Zählerstandserfassung</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    setAntwort(e: any) {

        const antworts = this.state.antworts;

        if (e.target.type === 'checkbox') {
            if (antworts[e.target.name]) {
                const idx = antworts[e.target.name].indexOf(e.target.value);

                if (idx === -1) {
                    antworts[e.target.name].push(e.target.value);
                } else {
                    antworts[e.target.name].splice(idx, 1);
                }
            } else {
                antworts[e.target.name] = [e.target.value];
            }

        } else {
            antworts[e.target.name] = e.target.value;
        }

        this.setState({ antworts });
    }
}
