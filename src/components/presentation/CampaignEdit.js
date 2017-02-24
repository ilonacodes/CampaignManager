import React from "react";
import {Link} from "react-router";

const CampaignEdit = ({id, title, onTitleChange, onConfirm}) => {

    const onClick = (e) =>
        onConfirm({id, title});

    return <div className="CampaignEdit container-fluid">
        <div className="row">
            <div className="col-xs-2">
                <Link to="/" className="glyphicon glyphicon-chevron-left Back"/>
            </div>
            <div className="col-xs-8 text-center"><h1>Edit Campaign</h1></div>
        </div>

        <div className="row">
            <div className="col-xs-2"></div>
            <div className="col-xs-8">
                <input className="form-control"
                       type="text"
                       placeholder="Edit Campaign"
                       value={title}
                       onChange={onTitleChange}/>
            </div>
        </div>

        <div className="row">
            <div className="col-xs-5"></div>
            <div className="col-xs-2">
                <button className="btn btn-success form-control" onClick={onClick}>Save</button>
            </div>
        </div>
    </div>;

    // <span>
    //     <input type="text"
    //            placeholder="Edit Campaign"
    //            value={title}
    //            onChange={onTitleChange}/>
    //     <button onClick={onClick}>Edit Campaign</button>
    // </span>;

};

export default CampaignEdit;
