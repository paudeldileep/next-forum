//component for MainFeed
import Image from 'next/image';


const PostItem=(props)=>{

    const {post}=props;

    return <div>
        <h3>{post.title}</h3>
        {/* {post.imageUrl && <Image alt={post.imageUrl} src={post.imageUrl} layout="responsive" /> } */}
        { post.content && <p>{post.content}</p> }
    </div>
}

export default PostItem;