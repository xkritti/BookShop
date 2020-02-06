import React, { useState } from 'react';
import './App.css';

import BookCard from './component/BookCard'
import Form from './component/Form';

const App = () => {

  let [BookList, setBookList] = useState(
    [
      {
        title: "JOJO 1",
        imgurl: "https://f.ptcdn.info/583/012/000/1385402271-Volume1-o.jpg"
      }
      // ,{
      //   title: "JOJO 2",
      //   imgurl: "https://i.pinimg.com/originals/fe/70/50/fe705098afcd60242b4c1044510be89c.jpg"
      // },
      // {
      //   title: "JOJO 3",
      //   imgurl: "https://s.isanook.com/mv/0/ud/7/36463/jojo-01.jpg"
      // },
      // {
      //   title: "JOJO 4",
      //   imgurl: "https://neko-miku.com/images/content/0/7c945c76f4c492172ac4854688447cdd.jpg"
      // },
      // {
      //   title: "JOJO 5",
      //   imgurl: "https://image.makewebeasy.net/makeweb/0/7LODqEDPj/DefaultData/GOODS_00323109.jpg"
      // }
    ]
  );

  let handleChange = (data) => {
    setBookList(
      [...BookList, data]
    );
  }

  let deleteBook = (index) => {
    const filterBookList = BookList.filter((book, i) => {
      return i !== index;
    });
    setBookList(filterBookList);
  }

  let updateBook = (index) => {
    const updated = BookList.map((book, i) => {
      if (index === i)
        return {
          title: "Jojo 2",
          imgurl: "https://i.pinimg.com/originals/fe/70/50/fe705098afcd60242b4c1044510be89c.jpg"
        }
      else
        return book;
    });
    setBookList(updated);
  }



  return (<div>
    <div className="book-list">
      {
        BookList.map((book, index) => {
          return <BookCard
          key={index} {...book}
          deleteBook={() => { deleteBook(index) }}
          updateBook={() => { updateBook(index) }}
        />
        })
      }

    </div>
    <div>
      <Form onClick={handleChange} />
    </div>
  </div>

  )

}

export default App;
