import React, { Component } from 'react';
import axios from 'axios';

import { config } from './constant'; 

class SubmitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            sname: ''
        };
    }

    submitForm(e) {
        e.preventDefault();
        axios.post(`${config.SERVER}/api/v1/url-shortner/`, {
            original_url: this.state.url,
            short_name: this.state.sname
        })
        .then((data) => {
            this.props.callback(data.data);
        })
        .catch(err => {
            // console.log(err.response.data);
            alert(err.response.data[0])
        })
    }

    render() {
        return (
            <div className="form-container">
                <h3 className="heading">Create/Edit Url shortner</h3>
                <form method="post" onSubmit={e => this.submitForm(e)}>
                    <div className="flex-container form-cont">
                        <div className="flexbox">
                            <div className="form-group">
                                <label htmlFor="url">Paste big url</label>
                                <input type="text" className="input" placeholder="Write down the url" id="url" value={this.state.url} onChange={e => this.setState({ url: e.target.value })} />
                            </div>
                        </div>
                        <div className="flexbox">
                            <div className="form-group">
                                <label htmlFor="sname">Write down the shortname</label>
                                <input type="text" className="input" placeholder="Write down the shortname" id="sname" value={this.state.sname} onChange={e => this.setState({ sname: e.target.value })} />
                            </div>
                        </div>
                        <div className="flexbox button">
                            <button type="submit" className="btn" disabled={!this.state.url || !this.state.sname}>Short it</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SubmitForm;
