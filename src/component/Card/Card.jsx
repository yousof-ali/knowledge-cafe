
import { CiBookmark } from 'react-icons/ci';

const Card = ({singleBlog,handleAddToBookmark,markAsRead}) => {
    const {cover,title,author,author_img,posted_date,reading_time,hashtags}=singleBlog
    
   

    return (
        <div>
            <div className='h-60 md:h-96 mt-8'>
               <img className='w-full h-full rounded-md' src={cover} alt="" />
            </div>
            <div>
                <div className='flex justify-between items-center my-4'>
                    <div className='flex items-center gap-4'>
                        <div className='w-10 h-10'>
                            <img className='rounded-full h-full w-full' src={author_img} alt="" />
                        </div>
                        <div>
                            <h2 className='font-bold'>{author}</h2>
                            <p className='text-sm text-gray-400'>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        <p className=' text-gray-400 text-sm'><span>{reading_time}</span>min read </p>
                        <button  className='text-2xl'  onClick={() => handleAddToBookmark(singleBlog)}><CiBookmark /></button>
                    </div>
                </div>

                <div className='space-y-2'>
                    <h2 className='text-4xl'>{title}</h2>

                    <p className='flex gap-2  text-gray-400'>
                        {
                            hashtags.map((hash,index)=><span key={index}><a href="">{hash}</a></span>)
                        }
                    </p>
                    <button className='text-sm text-blue-500 underline' onClick={()=>markAsRead(reading_time)}>Mark As read</button>
                </div>

            </div>
        </div>
    );
};

export default Card;