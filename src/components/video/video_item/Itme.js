import React from "react";
import '../../../style/layout/item/video/item.css'
import "../../../style/layout/item/video/item.resposinv.css"
function Item() {
    return(
        <div className="video_item_container">
            <div className="image_item">
                <p className="time_info">34:45</p>
            </div>
            <div className="video_info">
                <div className="studeo_logo">
                </div>
                <div className="text_info">
                    <h3 className="title_info">Molodaya Armyanka perejayet damoi</h3>
                </div>
            </div>
        </div>
    )
}

export default Item;
