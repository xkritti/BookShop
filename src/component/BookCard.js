import React from 'react';
import './BookCard.css'

const BookCard = (props) => {
    const title = props.title;
    const imgurl = props.imgurl;
    return (
        <div className='BookCard'>
            <p>Title : {title}</p>
            <img src={imgurl} />
            <div>
                <button onClick={props.updateBook}>update</button>
                <button onClick={props.deleteBook}>delete</button>
            </div>
        </div>

    );
}
export default BookCard;