import React from 'react';

function Newline({ text }) {

    const hasWhiteSpace = (str) => {
        return /^[^ ]* [^ ]*$/.test(str);
    }

    return (
        <span className="font-josefin">
            {hasWhiteSpace(text) ? (text.split(" ").map(str => <p>{str}</p>)) : text}
        </span>
    )
}

export default Newline
