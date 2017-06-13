import React from 'react';

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = { fileName: 'Choose file...' }
    }

    fileReceived(file) {
        this.setState({ fileName: file.files[0].name })
        console.log(file.files[0])
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