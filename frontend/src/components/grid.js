import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import  moment from 'moment';


function dateFormatter(params) {
    return moment(params.value).format('MM/DD/YYYY hh:mm A');
}

class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            defaultColDef: {
                sortable: true,
                filter: true
            },
            columnHeaders: [
                { headerName: "Id", field: "id" }, 
                { headerName: "Time Created", field: "create_time", filter: false, valueFormatter: dateFormatter }, 
                { headerName: "Commit", field: "commit_hash" }, 
                { headerName: "Branch", field: "branch" },
                { headerName: "Operating System", field: "os" },
                { headerName: "CPU", field: "cpu", filter: "agNumberColumnFilter" },
                { headerName: "Mem", field: "mem", filter: "agNumberColumnFilter" },
                { headerName: "Note", field: "note" }
            ],
            rowData: null,
            rowClassRules: {
                "row-failure": function(params) {
                    return params.data.cpu > 30;
                }
            },
            
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/benchmarks")
            .then(response =>  {
                this.setState({
                    rowData : response.data
                });
                console.log(response);
            });
    }

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    flexGrow: 1,
                    width: '100%',
                    height: '90vh'
                }}
            >
                <AgGridReact
                    defaultColDef={this.state.defaultColDef}
                    columnDefs={this.state.columnHeaders}
                    rowData={this.state.rowData}
                    rowClassRules={this.state.rowClassRules}
                    pagination={true}
                    paginationAutoPageSize={true}
                    rowClass={this.state.rowClassRules}
                />
            </div>
        )
    }


}

export default Grid;