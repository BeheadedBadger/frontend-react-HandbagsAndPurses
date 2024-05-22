/* eslint-disable react/prop-types */
import React from 'react';

function Tile (props) {
    if (props.isTextOnly === true && props.isInverted === false){
        return (<>
            <section>
                <h2>{props.title}</h2>
            </section>
            <section>
                {props.children}
            </section>
        </>)
    }
    if (props.isTextOnly === true && props.isInverted === true) {
        return (<>
            <section>
                {props.children}
            </section>
            <section>
                <h2>{props.title}</h2>
            </section>
        </>)
    }

    if (props.isInverted === true) {
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

    else return (<>
        <section>
            <h2>{props.title}</h2>
            {props.children}
        </section>
        <section>
            <img src={props.image} alt={props.title}/>
        </section>
    </>)
}

export default Tile;