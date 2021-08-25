//main posts feed page for loggedin user  component for /home/[user]
import {posts} from '../../dummydata/dummyposts';
import PostItem from '../Post/PostItem';


const MainFeed=()=>{

    return <div className="border border-blue-600 rounded-sm shadow-md w-full min-h-[90vh] md:w-2/3 lg:w-4/5 pt-2 m-2 px-1">
        <div className="scroll_feed_div max-h-screen overflow-y-scroll">
            {posts.map((post,index)=> <PostItem key={index} post={post}/>)}
        </div>
    </div>
}

export default MainFeed;