import react, { Component } from "react";

const KanyeQuoter = ({ quote }) => {
    return (
        <>
            <p className='i'>
                "{quote}"
            </p>
            <p className='pl7'>-Kanye West</p>
        </>
    )
}

export default KanyeQuoter;