import React from "react"

const CampaignCreate = ({title, onTitleChange, onConfirm}) => {

    const onClick = (e) =>
        onConfirm({title});

    return <div>
        <input type="text"
               placeholder="Campaign title"
               value={title}
               onChange={onTitleChange}/>
        <button onClick={onClick}>Add Campaign</button>
    </div>;

};

export default CampaignCreate;
