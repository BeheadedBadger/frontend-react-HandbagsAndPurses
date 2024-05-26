/* eslint-disable react/prop-types */
import React from 'react';

function Tile (props) {

    if (props.title === null) {
        return (<section>
            <img src={props.image} alt="image tile"/>
        </section>)
    }

    if (props.image === null) {
        return (<section>
            <h2>{props.title}</h2>
            {props.children}
        </section>)
    }

    else {
        return (<>
            <section>
                <img src={props.image} alt={props.title}/>
            </section>
            <section>
                <h2>{props.title}</h2>
                {props.children}
            </section>
        </>)
    }
}

export default Tile;