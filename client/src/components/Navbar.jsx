import React from 'react';
import XLSX from "xlsjs";

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = { fileName: 'Choose file...' }
    }

    fileReceived(file) {
        this.setState({ fileName: file.files[0].name })

        let reader = new FileReader();
        reader.onload = function (e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, { type: 'binary' });
            console.log(workbook)
            /* DO SOMETHING WITH workbook HERE */
        };
        reader.readAsBinaryString(file.files[0]);
    }

    render() {
        let excelFile = null;

        return (
            <div>
                <nav class="pt-navbar">
                    <div class="pt-navbar-group pt-align-left">
                        <div class="pt-navbar-heading">qMatch</div>
                    </div>
                    <div class="pt-navbar-group pt-align-right">
                        <button class="pt-button pt-minimal pt-icon-help">Help</button>
                    </div>
                </nav>
                <label class="pt-file-upload">
                    <input
                        type="file"
                        accept=".xls"
                        ref={(input) => { excelFile = input }}
                        name="file"
                        onChange={() => { this.fileReceived(excelFile) }}
                    />
                    <span class="pt-file-upload-input">{this.state.fileName}</span>
                </label>
            </div>
        );
    }
}