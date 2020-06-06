import React, { Component } from 'react';

import axios from 'axios';
import { config } from '../components/constant'; 

import List from '../components/list';
import SubmitForm from '../components/submit-form';

require("../static/style.css");

class UrlList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [],
            link: `${config.SERVER}/api/v1/url-shortner/?page=1`
        };
        this.addUrl = this.addUrl.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    addUrl(data) {
        var prevData = [...this.state.urls];
        prevData.push(data);
        this.setState({
            urls: prevData
        });
    }

    getUrls(){
        if(this.state.link){
            axios.get(this.state.link)
            .then(data => {
                this.setState({
                    urls: [...this.state.urls, ...data.data.results],
                    link: data.data.next
                })
            })
        }
    }

    getPosition(el){
		var xPos = 0, yPos = 0;
		while (el) {
			if (el.tagName === "BODY") {
				// deal with browser quirks with body/window/document and page scroll
				var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
				var yScroll = el.scrollTop || document.documentElement.scrollTop;

				xPos += el.offsetLeft - xScroll + el.clientLeft;
				yPos += el.offsetTop - yScroll + el.clientTop;
			} else {
				// for all other non-BODY elements
				xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
				yPos += el.offsetTop - el.scrollTop + el.clientTop;
			}

			el = el.offsetParent;
		}
		return { x: xPos, y: yPos };
	}

    handleScroll(){
        if(this.state.anchor){
            let position = this.getPosition(this.state.anchor);
            if(position.y < (window.innerHeight + 200) && this.state.link) this.getUrls();
        }
        else this.setState({
            anchor: document.getElementById('loading-anchor')
        });
    }

    componentDidMount() {
        // Get all the lists
        this.getUrls();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <div className="container">
                <SubmitForm callback={this.addUrl}/>

                <ul className="url-list">
                    <li className="heading">
                        <div className="flex-container">
                            <div className="flexbox short">Short url</div>
                            <div className="flexbox orig">Original url</div>
                            <div className="flexbox num">Clicked</div>
                        </div>
                    </li>
                    {
                        this.state.urls.map(el => (
                            <List data={el} key={el.uuid} />
                        ))
                    }
                </ul>
                <div className="loading-anchor" id="loading-anchor"></div>
            </div>
        );
    }
}

export default UrlList;
