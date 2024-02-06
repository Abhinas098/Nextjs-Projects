import styles from "./blog.module.css";
import Card from "@/components/Card/Card";
import { getPosts } from "@/components/data/TempData";

const Blog = () => {
  const posts = getPosts();

  return (
    <>
      <h2 className={styles.heading}>My Posts</h2>
      <div className={styles.container}>
        {posts.map((post) => (
          <div className={styles.post} key={post.id}>
            <Card post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
