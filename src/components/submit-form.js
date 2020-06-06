import React, { Component } from 'react';
import axios from 'axios';

// import { CONFIG } from './constant'; 

class SubmitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
        };
    }

    submitForm(e) {
        e.preventDefault();
        axios.post(`${CONFIG.SERVER}/api/v1/url-shortner/`, {
            url: this.state.url,
        })
        .then((data) => {
            this.props.callback(data.data.url);
        });
    }

    render() {
        return (
            <div className="form-container">
                <form method="post" onSubmit={e => this.submitForm(e)}>
                    <div className="flex-container">
                        <div className="flexbox">
                            <label htmlFor="url">Paste big url</label>
                            <input type="text" placeholder="write down the url" id="url" value={this.state.url} onChange={e => this.setState({ url: e.target.value })} />
                        </div>
                        <div className="flexbox button">
                            <button type="submit" className="btn">Short it</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SubmitForm;
