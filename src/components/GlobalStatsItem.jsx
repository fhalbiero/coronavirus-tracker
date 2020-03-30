import React from 'react';


export default function GlobalStatsItem({title, value}) {
  return (
        <div className="div-globalinfo-box-item">
            <h4 className="global-info-value">{parseInt(value).toLocaleString()}</h4>
            <span className="global-info-title">
                { title.replace(/_/g,' ').toUpperCase() }
            </span>
        </div>  
  );
}
