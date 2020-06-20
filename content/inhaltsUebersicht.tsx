import * as React from 'react';
import style from './content.less';

interface InhaltsUebersichtProps extends React.ClassAttributes<any> {

}

interface InhaltsUebersichtState extends React.ClassAttributes<any> {
    antworts: any;
}

export class InhaltsUebersicht extends React.Component<InhaltsUebersichtProps, InhaltsUebersichtState> {
    constructor(props: any) {
        super(props);

        this.state = {
            antworts: {}
        };



    }

    render() {
        return (
            <div>
               <div className = {style.row} style = {{backgroundColor: 'rgb(189, 215, 238)'}}>
                    <div className = {style.leerFirstColumn}>
                    </div>

                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>Theme Register</p>
                        </div>

                        <div className = {style.column}>
                            <p className = {style.bold}>Detail-Register</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.leerFirstColumn}>
                    </div>

                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>0. Allgemeine Information</p>
                        </div>

                        <div className = {style.column}>
                            <p>Verbrauchsüberblick</p>
                            <p>Energiebuch: Hintergrund & Erläuterung</p>
                            <p>Umrechnungstabelle & Glossar</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.firstColumn} style = {{backgroundColor: 'white'}}>
                        <p>Strom</p>
                    </div>
                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>1. Strom</p>
                            <div className = {style.inputFielWrapper}>
                                <div className = {style.inputTextWrapper}>
                                    <p>Zuständig im Betrieb:</p>
                                </div>
                                <div className = {style.inputField}>
                                    <input type = 'text' name = 'strom' onChange = {(e: any) => this.changeValue(e)} />
                                </div>
                            </div>
                        </div>

                        <div className = {style.column}>
                            <p>1.1 Auswertung</p>
                            <p>1.2 Rechnungen</p>
                            <p>1.3 Vertrag</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.firstColumn} style = {{backgroundColor: 'rgb(242,242,242)'}}>
                        <p>Wärme</p>
                    </div>
                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>2. Wärme</p>
                            <div className = {style.inputFielWrapper}>
                                <div className = {style.inputTextWrapper}>
                                    <p>Zuständig im Betrieb:</p>
                                </div>
                                <div className = {style.inputField}>
                                    <input type = 'text' name = 'waerme' onChange = {(e: any) => this.changeValue(e)} />
                                </div>
                            </div>
                        </div>

                        <div className = {style.column}>
                            <p>2.1 Auswertung</p>
                            <p>2.2 Rechnungen</p>
                            <p>2.3 Vertrag</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.firstColumn} style = {{backgroundColor: 'rgb(217,217,217)'}}>
                        <p>Kraftstoffe</p>
                    </div>
                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>3. Kraftstoffe</p>
                            <div className = {style.inputFielWrapper}>
                                <div className = {style.inputTextWrapper}>
                                    <p>Zuständig im Betrieb:</p>
                                </div>
                                <div className = {style.inputField}>
                                    <input type = 'text' name = 'kraftstoffe' onChange = {(e: any) => this.changeValue(e)} />
                                </div>
                            </div>
                        </div>

                        <div className = {style.column}>
                            <p>3.1 Auswertung</p>
                            <p>3.2 Rechnungen</p>
                            <p>3.3 Vertrag</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.firstColumn} style = {{backgroundColor: 'rgb(191,191,191)'}}>
                        <p>Wasser</p>
                    </div>
                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>4. Wasser</p>
                            <div className = {style.inputFielWrapper}>
                                <div className = {style.inputTextWrapper}>
                                    <p>Zuständig im Betrieb:</p>
                                </div>
                                <div className = {style.inputField}>
                                    <input type = 'text' name = 'wasser' onChange = {(e: any) => this.changeValue(e)} />
                                </div>
                            </div>
                        </div>

                        <div className = {style.column}>
                            <p>4.1 Auswertung</p>
                            <p>4.2 Rechnungen</p>
                            <p>4.3 Vertrag</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.firstColumn} style = {{backgroundColor: 'rgb(166,166,166)'}}>
                        <p>Anlagen/ Fuhrpark</p>
                    </div>
                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>5. Anlagen / Maschinen /Fuhrpark</p>
                            <div className = {style.inputFielWrapper}>
                                <div className = {style.inputTextWrapper}>
                                    <p>Zuständig im Betrieb:</p>
                                </div>
                                <div className = {style.inputField}>
                                    <input type = 'text' name = 'anlagen_fuhrpark' onChange = {(e: any) => this.changeValue(e)} />
                                </div>
                            </div>
                        </div>

                        <div className = {style.column}>
                            <p>5.1 Kenndaten (Anlage / Fahrzeug / Betriebszeit / ...)</p>
                            <p>5.2 Lageplan und Einzeldaten (ggf. Bewertungen)</p>
                            <p>5.3 Wartungen und Prüfungen</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.firstColumn} style = {{backgroundColor: 'rgb(128,128,128)', color: 'white'}}>
                        <p>Energidatenbilanz</p>
                    </div>
                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>6. Energidatenbilanz</p>
                            <div className = {style.inputFielWrapper}>
                                <div className = {style.inputTextWrapper}>
                                    <p>Zuständig im Betrieb:</p>
                                </div>
                                <div className = {style.inputField}>
                                    <input type = 'text' name = 'energiedatenbilanz' onChange = {(e: any) => this.changeValue(e)} />
                                </div>
                            </div>
                        </div>

                        <div className = {style.column}>
                            <p>6.1 Energiekennzahlen</p>
                            <p>6.2 Emissionen</p>
                            <p>6.3 Messprotokolle / Lastgangprofile</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.firstColumn} style = {{backgroundColor: 'rgb(117,113,113)', color: 'white'}}>
                        <p>Gebäude</p>
                    </div>
                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>7. Gebäude</p>
                            <div className = {style.inputFielWrapper}>
                                <div className = {style.inputTextWrapper}>
                                    <p>Zuständig im Betrieb:</p>
                                </div>
                                <div className = {style.inputField}>
                                    <input type = 'text' name = 'gebaude' onChange = {(e: any) => this.changeValue(e)} />
                                </div>
                            </div>
                        </div>

                        <div className = {style.column}>
                            <p>7.1 Planunterlagen & Fotos</p>
                            <p>7.2 Statische Berechnungen & Wärmeschutz</p>
                            <p>7.3 Sanierungen</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.firstColumn} style = {{backgroundColor: 'rgb(102,98,98)', color: 'white'}}>
                        <p>Zertifizierung</p>
                    </div>
                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>8. Optionale Zertifizierung</p>
                            <div className = {style.inputFielWrapper}>
                                <div className = {style.inputTextWrapper}>
                                    <p>Zuständig im Betrieb:</p>
                                </div>
                                <div className = {style.inputField}>
                                    <input type = 'text' name = 'zertifizierung' onChange = {(e: any) => this.changeValue(e)} />
                                </div>
                            </div>
                        </div>

                        <div className = {style.column}>
                            <p>8.1 Generelle Information</p>
                            <p>8.2 Alternatives System (gemäß SpaEfV)</p>
                            <p>8.3 Vorleistung des Betriebs</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.firstColumn} style = {{backgroundColor: 'rgb(64,64,64)', color: 'white'}}>
                        <p>Sammelregister</p>
                    </div>
                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>9. Sammelregister</p>
                            <div className = {style.inputFielWrapper}>
                                <div className = {style.inputTextWrapper}>
                                    <p>Zuständig im Betrieb:</p>
                                </div>
                                <div className = {style.inputField}>
                                    <input type = 'text' name = 'sammelregister' onChange = {(e: any) => this.changeValue(e)} />
                                </div>
                            </div>
                        </div>

                        <div className = {style.column}>
                            <p>9.1 Gesprächsprotokoll / Einverständniserklärungen</p>
                            <p>9.2 Kommunikation mit Berater / Beratungsberichte</p>
                            <p>9.3 Noch unsortierte Energiedaten (Rechnungen etc.)</p>
                        </div>
                    </div>
               </div>

               <div className = {style.row}>
                    <div className = {style.firstColumn} style = {{backgroundColor: 'rgb(0,176,240)', color: 'white'}}>
                        <p>Netzwerkregister</p>
                    </div>
                    <div className = {style.secondColumn}>
                        <div className = {style.column}>
                            <p className = {style.bold}>10. Energieeffizienz-Netzwerk</p>
                            <div className = {style.inputFielWrapper}>
                                <div className = {style.inputTextWrapper}>
                                    <p>Zuständig im Betrieb:</p>
                                </div>
                                <div className = {style.inputField}>
                                    <input type = 'text' name = 'netzwerkregister' onChange = {(e: any) => this.changeValue(e)} />
                                </div>
                            </div>
                        </div>

                        <div className = {style.column}>
                            <p>10.1 Netzwerk-Informationen / Teilnahmeerklärung</p>
                            <p>10.2 Betriebsberatung / Netzwerkveranstaltungen</p>
                            <p>10.3 Spezifische Datenerhebung / Monitoring etc.</p>
                        </div>
                    </div>
               </div>

            </div>
        );
    }

    changeValue(e: any) {
        const antworts = this.state.antworts;
        antworts[e.target.name] = e.target.value;

        this.setState({antworts});
    }

}
