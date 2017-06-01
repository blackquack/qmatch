import React from 'react';

export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {filesInput: 'sd'}
    }

    uploadFileButton(kkk) {
        console.log(this.state.filesInput, kkk)
    }

    render() {
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
                        ref={(input) => { this.state.filesInput = input; }}
                        name="file" />
                    <span class="pt-file-upload-input">Choose file...</span>
                </label>
                <button onClick={(event) => {this.uploadFileButton(event)}}>CLICK HERE</button>
            </div>
        );
    }
}