import { RxCross2 } from "react-icons/rx";

const Bookmark = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className="bg-white p-4 rounded-md flex justify-between">
            <h3>{title}</h3> 
            <button><RxCross2 /></button>
        </div>
    );
};

export default Bookmark;