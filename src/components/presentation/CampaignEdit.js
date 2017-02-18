import React from 'react'

const CampaignEdit = ({id, title, onTitleChange, onConfirm}) => {

    const onClick = (e) =>
        onConfirm({id, title});

    return <span>
        <input type="text"
               placeholder="Edit Campaign"
               value={title}
               onChange={onTitleChange}/>
        <button onClick={onClick}>Edit Campaign</button>
    </span>;

};

export default CampaignEdit;
