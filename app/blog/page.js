'use client'; // Asegúrate de que esta línea esté al inicio del archivo

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/blog.module.css';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [mostViewedPosts, setMostViewedPosts] = useState([]);

  useEffect(() => {
    // Cargar el archivo JSON de los posts
    fetch('/content/blog.Posts.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setPosts(data);
          // Suponiendo que los posts más vistos son los primeros en el JSON
          setMostViewedPosts(data.slice(0, 5)); // Ajusta según tu lógica de "más vistos"
        } else {
          console.error('Data format is incorrect');
        }
      })
      .catch(error => console.error('Error al cargar los posts:', error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>Blog</h1>
        <div className={styles.postList}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.slug} className={styles.postCard}>
                <Link href={`/blog/${post.slug}`}>
                  <div className={styles.postTitle}>{post.title}</div>
                </Link>
                <p className={styles.postExcerpt}>{post.summary}</p>
              </div>
            ))
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>

      <aside className={styles.sidebar}>
        <h2 className={styles.sidebarTitle}>Most Viewed Posts</h2>
        <ul className={styles.sidebarList}>
          {mostViewedPosts.length > 0 ? (
            mostViewedPosts.map((post) => (
              <li key={post.slug} className={styles.sidebarItem}>
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </li>
            ))
          ) : (
            <li>No most viewed posts available.</li>
          )}
        </ul>
      </aside>
    </div>
  );
}
