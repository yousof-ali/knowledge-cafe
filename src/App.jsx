
import { useState } from 'react'
import './App.css'
import Blogs from './component/blogs/Blogs'
import Bookmarks from './component/bookmarks/Bookmarks'
import Header from './component/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime]=useState(0);


  const handleAddToBookmark = blog =>{
    const newbookmarks = [...bookmarks,blog]
    setBookmarks(newbookmarks);
  }

  const markAsRead = time =>{
    setReadingTime(readingTime+time);
  }

  return (
    <>
      
      <Header></Header>
      <main className='md:flex container mx-auto px-2 md:px-0 gap-4 lg:gap-12'>
        <Blogs handleAddToBookmark = {handleAddToBookmark} markAsRead={markAsRead}></Blogs>
        <Bookmarks book = {bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
