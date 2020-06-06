import React from 'react';
import { config } from './constant'; 

function List(props) {
    var data = props.data;

    return (
        <li>
            <div className="flex-container">
                <div className="flexbox short">
                    <a href={`${config.SERVER}/${data.short_name}/`} target="_blank" rel="noopener noreferrer">{data.short_name}</a>
                </div>
                <div className="flexbox orig">
                    <a href={data.original_url} target="_blank" rel="noopener noreferrer">{data.original_url}</a>
                </div>
                <div className="flexbox num">{data.clicked}</div>
            </div>
        </li>
    );
}

export default List;
