import PostCard from "@/components/postcard/PostCard";
import styles from "./blog.module.css"
//import { getPosts } from "@/lib/data"
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog");

    if(!res.ok){
        throw new Error("Something went wrong");
    }

    return res.json();
}
const blog = async () => {
    const posts = await getData()
    //fetching without an API
    //const posts = await getPosts()
    return (
        <div className={styles.container}>
            {
                posts.map((post) => (
                    <div className={styles.post} key={post.id}>
                        <PostCard post={post}/>
                    </div>
                ))
            }


        </div>
    )
}

export default blog;