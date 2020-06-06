import React, { Component } from 'react';

import List from '../components/list';
import SubmitForm from '../components/submit-form';

class UrlList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [],
        };
        this.addUrl = this.addUrl.bind(this);
    }

    addUrl(data) {
        this.setState({
            urls: [[...data], ...this.state.urls],
        });
    }

    componentDidMount() {
        // Get all the lists
    }

    render() {
        return (
            <div className="container">
                <SubmitForm callback={this.addUrl} />

                <ul className="url-list">
                    {
                        this.state.urls.map(el => (
                            <List data={el} key={el.id} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default UrlList;
