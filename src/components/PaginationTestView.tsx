import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { Loader2 } from "lucide-react";


interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function sleep(milliseconds: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function PaginationTestView() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [postsPerPage, setPostsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            setLoading(true);
            await sleep(2000);
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data);
            setLoading(false);
        };
        fetchBlogPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <Card title="Blog Posts">
            {loading && 
                <div className="flex gap-2">
                    <Loader2 className="animate-spin"/>
                    <p>Loading...</p>
                </div>
            }
            {!loading && 
                <>
                    <PostList posts={currentPosts} />
                    <Pagination 
                        itemsPerPage={postsPerPage}
                        totalItems={posts.length}
                        currentItem={currentPage}
                        setCurrentItem={setCurrentPage}
                    />
                </>
            }
        </Card>
    );
}

const PostList = ({posts}: {posts: Post[]}) => {
    return (
        <ul>
            {posts.map(post => (
                <li className="mb-4 bg-indigo-100 rounded-lg p-4" key={post.id}>
                    <h3 className="font-bold mb-2">{post.title}</h3>
                    <p className=""> {post.body}</p>
                </li>))}
        </ul>
    );
}

export default PaginationTestView;