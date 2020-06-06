import React from 'react';
import Link from 'react-dom';

function List(props) {
    return (
        <li>
            <div className="flex-container">
                <div className="flexbox">
                    <Link to={props.data.short_url} target="_blank" rel="nopener norefferer">{props.data.short_url}</Link>
                </div>
                <div className="flexbox orig">
                    <Link to={props.data.original_link} target="_blank" rel="nopener norefferer">{props.data.original_link}</Link>
                </div>
            </div>
        </li>
    );
}

export default List;
