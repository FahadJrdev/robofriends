import React from "react";

const Scroll = (props) => {
    return (
        <div className="bG" style={{position:'fixed', border:'1px solid #000', top:'0', left:'0', right:'0', zIndex:'1'}}>
            {props.children}
        </div>
    );
};

export default Scroll;