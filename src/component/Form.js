import React, { useState } from 'react';

const Form = (props) => {
    const [titel, setTitel] = useState('');
    const [imgurl, setImage] = useState('');
    return (
        <div>
            <input placeholder='Title' onChange={(e) => { setTitel(e.target.value) }} /> <br />
            <input placeholder='Image Url' onChange={(e) => { setImage(e.target.value) }} /> <br />
            <button onClick={() => { props.onClick({ titel, imgurl }) }}>add</button>
        </div>
    )
}
export default Form;