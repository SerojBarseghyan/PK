import React from "react";
import '../../style/layout/video/video.css'
import '../../style/layout/video/video_responsive.css'
import Item from './video_item/Itme'
function Video(props) {
    return (
        <div className="video_main_container">
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>

        </div>
    )
}
export default Video;