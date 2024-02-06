"use client";
import Image from "next/image";
import styles from "./singlePost.module.css";

import { getPost } from "@/components/data/TempData";
import { useParams } from "next/navigation";

const SinglePost = () => {
  const { id } = useParams();

  const post = getPost(+id);

  return (
    <div className={styles.container}>
      {post && (
        <div className={styles.imgContainer}>
          <Image src={post?.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>About {post?.title}</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
};

export default SinglePost;
