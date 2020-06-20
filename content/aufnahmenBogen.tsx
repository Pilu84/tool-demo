import * as React from 'react';
import style from './content.less';
import ReactTooltip from 'react-tooltip';
import * as classNames from 'classnames';


interface AufnahmebogenProps extends React.ClassAttributes<any> {

}

interface AufnahmebogenState extends React.ClassAttributes<any> {
    antworts: any;
    rechnungsTage: Array<number>;
}

export class Aufnahmebogen extends React.Component<AufnahmebogenProps, AufnahmebogenState> {
    constructor(props: any) {
        super(props);
        this.tooltip_id = 'tooltip_' + Date.now() + '_' + Math.floor(Math.random() * 10000);

        this.state = {
            antworts: {},
            rechnungsTage: [0, 0]
        };

        this.changeValue = this.changeValue.bind(this);
    }

    private tooltip_id: string = null;

    render() {
        const rechnungsTage = this.state.rechnungsTage;
        let eigenverbrauch = this.state.antworts.eigenverbrauch;
        const antworts = this.state.antworts;

        if (antworts.dateVon && antworts.dateBis) {
            rechnungsTage.splice(0, 1, (antworts.dateBis - antworts.dateVon) / (24 * 3600 * 1000));
        }

        if (antworts.dateVonEigen && antworts.dateBisEigen) {
            rechnungsTage.splice(1, 1, (antworts.dateBisEigen - antworts.dateVonEigen) / (24 * 3600 * 1000));
        }


        if (antworts.gesamtanlage && antworts.netzeinspeisung && !antworts.eigenverbrauch ) {
            eigenverbrauch = antworts.gesamtanlage - antworts.netzeinspeisung;
        }
        return (
            <div className = {style.aufnahmebogenWrapper}>
               <div className = {style.rowAufnahmebogenTitel} style = {{backgroundColor: 'rgb(189, 215, 238)'}}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}>
                        <p>Strom</p>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'text' name = 'jahr' onChange = {this.changeValue}
                            data-tip={'Hier bitte das Erste Jahr eingeben, für das Sie Daten erfassen möchten (StartJahr)'}
                            data-for={this.tooltip_id}
                            value = {antworts.jahr}
                        />
                        <div className = {style.arrow_left}
                            data-tip={'Hier bitte das Erste Jahr eingeben, für das Sie Daten erfassen möchten (StartJahr)'}
                            data-for={this.tooltip_id}
                        ></div>

                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>Einheit</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <p>Bemerkungen</p>
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}>
                        <p>Rechnung vorhanden</p>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <div className = {style.radioElement}>
                            <input type = 'radio' name = 'rechnung' value = {1} onChange = {this.changeValue} /><p>Ja</p>
                        </div>
                        <div className = {style.radioElement}>
                            <input type = 'radio' name = 'rechnung' value = {2} onChange = {this.changeValue} /><p>Nein</p>
                        </div>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>Einheit</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'rechnung_bemerkung' placeholder = 'Bemerkung'
                        value = {antworts.rechnung_bemerkung} onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={'Daten gemäß versorgerrechnung'}
                        data-for={this.tooltip_id}
                    >
                        <p>Abrechnungszeitraum</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'date' name = 'dateVon' onChange = {this.changeValue}
                            value = {antworts.jahr && !antworts.dateVon ? this.state.antworts.jahr + '-01-01' :
                            undefined}
                        />
                        <p> - </p>
                        <input type = 'date' name = 'dateBis' onChange = {this.changeValue}
                            value = {antworts.jahr && !antworts.dateBis ? this.state.antworts.jahr + '-12-31' :
                            undefined}
                        />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>---</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'abrechnungzeitraum_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.abrechnungzeitraum_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={'Berechnung erfolgt automatisch'}
                        data-for={this.tooltip_id}
                    >
                        <p>Rechnungstage</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <p>{rechnungsTage[0]}</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>Tage</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'rechnungstage_bemerkung' placeholder = 'Bemerkung'
                        value = {antworts.rechnungstage_bemerkung} onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={'Verbrauch gemäß Versorgerrechnung'}
                        data-for={this.tooltip_id}
                    >
                        <p>Stromverbrauch</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'text' name = 'stromverbrauch' onChange = {this.changeValue}
                            value = {antworts.stromverbrauch} />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>kWh</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'stromverbrauch_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.stromverbrauch_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={'Netto-Kosten gemäß Versorgerrechnung; gemeint sind die Gesammtnettokosten inkl. aller Steuern,' +
                                    'Grundgebühr, etc.'}
                        data-for={this.tooltip_id}
                    >
                        <p>Stromkosten (netto)</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'text' name = 'stromverkosten' onChange = {this.changeValue}
                        value = {antworts.stromverkosten} />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>€</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'stromkosten_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.stromkosten_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={`Lastspitzen im Betrachtungszeitraum auf Basis der Stromrechnung des
                                    Energieversorgers (oder einer separaten Lastgang-Anfordrung); bei Sondervertragskunden
                                    sind diese Informationen auf der Rechnung meist unter dem Stichpunkt "Leistung" zu finden`}
                        data-for={this.tooltip_id}
                    >
                        <p>Spitzenlast</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'text' name = 'spitzenlast' onChange = {this.changeValue}
                            value = {antworts.spitzenlast} />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>kW</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'spitzenlast_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.spitzenlast_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={`Versorger müssen Ihre Stromkennzeichnung (gCO2/kWh) gemäß §42 EnWG immer erst
                                    zum 31.12 des Folgejahres veröffentlichen, z. B. für 2016 erst am 31.12.2017.
                                    Um den Jahresabschluss für das Vergangene Jahr möglichst zügig abschließen
                                    zu können wird hier immer mit dem Vorjahreswert gerechnet, d.h. für das Jahr
                                    2016 mit der Stromkennzeichnung von 2015 - die Kennzeichnung für den Strommix
                                    des Vorjahres ist typischerweise auch auf der aktuallen Rechnung ausgeweisen.
                                    (Durch diese Berechnung ensteht ein systematischer Fehler, der aber in Kauf
                                    genommen wird - diese Vorgehensweise ist auch im EMAS-Verfahren üblich).
                                    Sofern hier keine Zahl eingetragen wird, werden die Berechnungen automatisch mit
                                    den Standard-Emissionswerten (Blatt Umrechnung) durchgeführt.`}
                        data-for={this.tooltip_id}
                    >
                        <p>CO<span style = {{verticalAlign: 'text-bottom'}}>2</span>-Emissionen (Versorger-Strom)</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'text' name = 'coemission' onChange = {this.changeValue}
                            value = {antworts.coemission} />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>gCo<span style = {{verticalAlign: 'text-bottom'}}>2</span>/kWh</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'coemission_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.coemission_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}>
                        <p style={{textDecoration: 'underline'}}>Eigenstromgeneration</p>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <div className={style.checkboxEigen}>
                        <input
                            type = 'checkbox'
                            name = 'eigenstrom'
                            value = {1}
                            onChange = {this.changeValue}
                        /> <p>Photovoltaik</p>
                        </div>
                        <div className={style.checkboxEigen}>
                        <input
                            type = 'checkbox'
                            name = 'eigenstrom'
                            value = {1}
                            onChange = {this.changeValue}
                        /> <p>Windkraft</p>
                        </div>
                        <div className={style.checkboxEigen}>
                        <input
                            type = 'checkbox'
                            name = 'eigenstrom'
                            value = {1}
                            onChange = {this.changeValue}
                        /> <p>KWK</p>
                        </div>
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={'Daten gemäß versorgerrechnung'}
                        data-for={this.tooltip_id}
                    >
                        <p>Abrechnungszeitraum</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'date' name = 'dateVonEigen' onChange = {this.changeValue}
                            value = {this.state.antworts.jahr && !this.state.antworts.dateVonEigen ?
                                this.state.antworts.jahr + '-01-01' : undefined}
                        />
                        <p> - </p>
                        <input type = 'date' name = 'dateBisEigen' onChange = {this.changeValue}
                            value = {this.state.antworts.jahr && !this.state.antworts.dateBisEigen ?
                                this.state.antworts.jahr + '-12-31' : undefined}
                        />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>---</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'zeitraumEigen_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.zeitraumEigen_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={'Berechnung erfolgt automatisch'}
                        data-for={this.tooltip_id}
                    >
                        <p>Rechnungstage</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <p>{rechnungsTage[1]}</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>Tage</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'zeitraum_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.zeitraum_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={'Gesammtjahresproduktion der EE-Anlage in kWh gemäß Einspeiesevergütungsabrechnung'}
                        data-for={this.tooltip_id}
                    >
                        <p>--> Gesamtproduktion Anlage</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'text' name = 'gesamtanlage' onChange = {this.changeValue}
                            value = {antworts.gesamtanlage} />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>kWh</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'gesamtanlage_bemerkung' placeholder = 'Bemerkung'
                           value = {antworts.gesamtanlage_bemerkung} onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={'Anteil der Eigenstromproduktion der in das Versorgernetz eingespeist wird.'}
                        data-for={this.tooltip_id}
                    >
                        <p>--> Netzeinspeisung</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'text' name = 'netzeinspeisung' onChange = {this.changeValue}
                            value = {antworts.netzeinspeisung} />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>kWh</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'netzeinspeisung_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.netzeinspeisung_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={`Anteil der Eigenstromproduktion der für betreibliche Zwecke selbst genutzt wird.
                                --> wird automatisch berechnet, kann aber überschreiben werden.`}
                        data-for={this.tooltip_id}
                    >
                        <p>--> Eigenverbrauch</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'text' name = 'eigenverbrauch' onChange = {this.changeValue}
                            value = {eigenverbrauch}
                        />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>kWh</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'eigenverbrauch_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.eigenverbrauch_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={`Prozentualer Anteil der Eigenstromproduktion der für betriebliche Zwecke selbst
                                    genutzt wird --> wird automatisch berechnet`}
                        data-for={this.tooltip_id}
                    >
                        <p>--> Eigenverbrauchsquete</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <p>{this.state.antworts.gesamtanlage && eigenverbrauch ?
                            ((eigenverbrauch / this.state.antworts.gesamtanlage) * 100).toFixed(2) + ' %' : '0%' }</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>%</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'eigenverbrauchsquete_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.eigenverbrauchsquete_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={`NETTO-Vergütung des Versorgers für den Eigenstromanteil, der ins Netz
                                    eingespeist wurde`}
                        data-for={this.tooltip_id}
                    >
                        <p>--> Vergütung</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'text' name = 'verguetung' onChange = {this.changeValue}
                            value = {antworts.verguetung} />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>€</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'verguetung_bemerkung' placeholder = 'Bemerkung'
                            value = {antworts.verguetung_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <div className = {style.rowAufnahmebogen}>
                    <div className = {classNames(style.aufnahmebogenColumn, style.first)}
                        data-tip={`Wie wurde die Verbrauchte Strommenge gemessen?
                                    => Typischerweise: in Form eines geeichten Zählers des Versorges`}
                        data-for={this.tooltip_id}
                    >
                        <p>Mess-System (Kalibrierung)</p>
                        <div className = {style.arrow_left}></div>
                    </div>

                    <div className = {classNames(style.aufnahmebogenColumn, style.second)}>
                        <input type = 'text' name = 'messsystem' onChange = {this.changeValue}
                            value = {antworts.messsystem} />
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.third)}>
                        <p>---</p>
                    </div>
                    <div className = {classNames(style.aufnahmebogenColumn, style.fourth)}>
                        <input type = 'text' name = 'messsystem_bemerkung' placeholder = 'Bemerkung' value = {antworts.messsystem_bemerkung}
                            onChange = {this.changeValue} />
                    </div>
               </div>

               <ReactTooltip
                    className={style.tooltip}
                    id={this.tooltip_id}
                    place={'right'}
                    type='info'
                    effect='solid' />
            </div>
        );
    }

    changeValue(e: any) {
        const antworts = this.state.antworts;

        if (e.target.name === 'dateBis' || e.target.name === 'dateVon' ||
            e.target.name === 'dateBisEigen' || e.target.name === 'dateVonEigen') {
            antworts[e.target.name] = Date.parse(e.target.value);
        } else {
            if (e.target.type === 'checkbox') {
                if (antworts[e.target.name]) {
                    antworts[e.target.name].push(e.target.value);
                } else {
                    antworts[e.target.name] = [e.target.value];
                }
            } else {
               antworts[e.target.name] = e.target.value;
            }
        }

        this.setState({antworts});
    }

}
