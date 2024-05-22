import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({book,readingTime}) => {
    return (
        
        <div className="md:w-1/3 rounded-md mt-8 bg-slate-100 p-4 text-center space-y-4">
            <h2 className="bg-white p-4 font-bold rounded-md">Reading Time : {readingTime} min</h2>
            <h2 className="font-bold text-left">Bookmarked Blogs : {book.length}</h2>
            {
                book.map((b,index)=><Bookmark key={index} bookmark={b}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;