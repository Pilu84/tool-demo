import * as React from 'react';
import style from './content.less';
import ReactTable from 'react-table';
import * as classNames from 'classnames';
import '../data/react-table.etool.css';
import { filterMethodFulltext } from '../helpers/filter_method';

interface NaceTableProps extends React.ClassAttributes<any> {

}

interface NaceTableState extends React.ClassAttributes<any> {
    data: any;
    renderEintraege: boolean;
    antworts: any;
    selectedList: Array<any>;
    showList: boolean;
    columns: Array<any>;
}

export class NaceTable extends React.Component<NaceTableProps, NaceTableState> {
    constructor(props: any) {
        super(props);

        this.state = {
            data: this.dataJson,
            renderEintraege: false,
            antworts: null,
            selectedList: [],
            showList: false,
            columns: this.columns
        };

        this.addEintraege = this.addEintraege.bind(this);
        this.onChange = this.onChange.bind(this);
        this.saveEintrage = this.saveEintrage.bind(this);
        this.renderSelectedList = this.renderSelectedList.bind(this);
        this.getCellStyle = this.getCellStyle.bind(this);

    }
    private dataJson = require('../data/nace.json');
    private mobil = window.screen.width > 450 ? false : true;
    private width = this.mobil ? 100 : 180;
    private columns = [
        {accessor: 'nace_abschnittscode', Header: 'NACE Abschnittscode', width: this.width, headerClassName: this.mobil ? 'sticky' : null},
        {accessor: 'nace_code', Header: 'NACE Code', width: this.width, headerClassName: this.mobil ? 'sticky' : null},
        {accessor: 'nace_erweiterter_code', Header: 'NACE Erweiterter Code', width: this.width,
                headerClassName: this.mobil ? 'sticky' : null },
        {accessor: 'bezeichnung', Header: 'Bezeichnung', headerClassName: this.mobil ? 'sticky' : null,
                width: this.mobil ? 300 : undefined},
        {accessor: 'a', Header: '', filterable: false, width: 42, headerClassName: this.mobil ? 'sticky' : null,
            Cell: (row: any) => {
                const dataRow = row.original;
                const selected = this.state.selectedList.find((list: any) => list.nace_code === dataRow.nace_code);

                if (selected !== undefined) {

                    const selectedID = this.state.selectedList.findIndex((list: any) => list.nace_code === dataRow.nace_code);
                    return (
                        <button className = {style.minus} onClick = {(e: any) => {
                            const selectedList = this.state.selectedList;
                            selectedList.splice(selectedID, 1);
                            this.setState({selectedList});
                        }} />
                    );
                } else {
                    return (
                        <button className = {style.plus} onClick = {(e: any) => {
                            const selectedList = this.state.selectedList;
                            selectedList.push(dataRow);
                            this.setState({selectedList});
                        }} />
                    );
                }
            }},

    ];


    render() {

        const { data, renderEintraege, showList } = this.state;

        const customColumns: Array<any> = [...this.columns];
        const columns = [...this.state.columns];
        customColumns.map((r: any) => {
            // Default Filter
            if (!r.filterMethod) {
                r.filterMethod = (filter: any, row: any) => filterMethodFulltext(filter, row, r.accessor);
            }
            if (Number.isInteger(r.index)) {
                columns.splice(r.index, 0, r);
            } else {
                columns.push(r);
            }
        });


        return (
            <div>
                <div className = {style.buttonWrapper}>
                    <button className = {style.plus} onClick = {() => this.setState({renderEintraege: true})}/>
                    <button className = {style.selectedBtn} onClick = {() => this.setState({showList: true})}>
                            Ausgewählte Einträge zeigen
                    </button>

                    {this.state.selectedList.length !== 0 &&
                        <button className = {style.selectedBtn} onClick = {() => this.setState({selectedList: []})}>
                            List entleeren
                        </button>
                    }
                </div>

                {renderEintraege &&
                    this.addEintraege()
                }

                {showList &&
                    this.renderSelectedList()
                }

                <div style={{ position: 'relative' }} >
                    <ReactTable
                        className={classNames('-striped', '-highlight', style.medium, 'ReactTableFixedHeader')}
                        data={data}
                        columns={this.columns}
                        showPagination={true}
                        previousText={'<<<<'}
                        nextText={'>>>>'}
                        pageText={'Seite'}
                        ofText={'von'}
                        showPaginationTop={true}
                        showPaginationBottom={false}
                        showPageSizeOptions={false}
                        defaultPageSize={10}
                        filterable = {true}
                        noDataText={'Keine Daten vorhanden'}
                        getTdProps={this.getCellStyle()}
                    />
                </div>
            </div>
        );
    }

    getCellStyle() {
        return (state: any, rowInfo: any) => {
            const selected = this.state.selectedList.find((list: any) => list.nace_code === rowInfo.original.nace_code);
            if (selected !== undefined) {
                return {
                    style:
                        (
                            { color: 'white', background: '#464646' }
                        )
                };
            } else {
                return {};
            }
        };
    }

    addEintraege() {
        const tableHeight = document.getElementsByClassName('contentWrapper___2Ecah');
        let top = (window.innerHeight / 2) - 250;
        let left = (window.innerWidth / 2) - 250;

        if (tableHeight.length !== 0) {
            top = (tableHeight[tableHeight.length - 1].getBoundingClientRect().height - 450) / 2;
            left = (tableHeight[tableHeight.length - 1].getBoundingClientRect().width - 600) / 2;
        }

        if (this.mobil) {
            left = 0;
        }

        return(
            <div className = {style.eintraege} style={{top: top, left: left}}>
                <div className = {style.eintraegeTitel}>
                    <p>Neue NACE hinzufüggen</p>
                    <button className = {style.ok} onClick = {() => this.saveEintrage()}
                        disabled = {this.state.antworts ? false : true } />
                    <button className = {style.cancel} onClick = {() => this.setState({renderEintraege: false})} />
                </div>
                <div className = {style.eintraegeContent}>

                    <div>
                        <p>{this.columns[0].Header}</p>
                        <input type = 'text' name = {this.columns[0].accessor} onChange = {(e: any) => this.onChange(e.target) }/>
                    </div>
                    <div>
                        <p>{this.columns[1].Header}</p>
                        <input type = 'text' name = {this.columns[1].accessor} onChange = {(e: any) => this.onChange(e.target) }/>
                    </div>
                    <div>
                        <p>{this.columns[2].Header}</p>
                        <input type = 'text' name = {this.columns[2].accessor} onChange = {(e: any) => this.onChange(e.target) }/>
                    </div>
                    <div>
                        <p>{this.columns[3].Header}</p>
                        <input type = 'text' name = {this.columns[3].accessor} onChange = {(e: any) => this.onChange(e.target) }/>
                    </div>

                </div>

            </div>
        );
    }

    onChange(e: any) {
        let antworts = this.state.antworts;

        if (!antworts) {
            antworts = {};
        }

        antworts[e.name] = e.value;

        this.setState({antworts});
    }

    saveEintrage() {
        const data = this.state.data;

        data.unshift(this.state.antworts);

        const newData = data.map( (d: any ) => ( { ...d }));

        this.setState({data: newData, renderEintraege: false, antworts: undefined});

    }

    renderSelectedList() {
        const tableHeight = document.getElementsByClassName('contentWrapper___2Ecah');
        let top = (window.innerHeight / 2) - 250;
        let left = (window.innerWidth / 2) - 250;

        if (tableHeight.length !== 0) {
            top = (tableHeight[tableHeight.length - 1].getBoundingClientRect().height - 450) / 2;
            left = (tableHeight[tableHeight.length - 1].getBoundingClientRect().width - 600) / 2;
        }

        if (this.mobil) {
            left = 0;
        }

        const list = this.state.selectedList;

        return(
            <div className = {style.eintraege} style={{top: top, left: left}}>
                <div className = {style.eintraegeTitel}>
                    <p>Selected Einträge</p>
                    <button className = {style.cancel} onClick = {() => this.setState({showList: false})} />
                </div>
                <div className = {style.selectedContent}>
                    {list.length === 0 &&
                        <p>Es ist keine Eintrag ausgewählt.</p>
                    }

                    {list.map((element: any, idx: number) => {
                        return(
                            <ul key = {'selectedList_' + idx}>
                             {Object.keys(element).map((e: any, i: number) => {
                                return(
                                    <li key = {'listElement_' + i}>{this.columns[i].Header + ': ' + element[e]}</li>
                                );
                            })}
                            </ul>
                        );
                    })}

                </div>

            </div>
        );
    }


}
