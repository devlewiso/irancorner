
import path from 'path';
import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';
import Head from 'next/head'; // Importa Head para manejar el SEO

export default async function BlogPostPage({ params }) {
  const { slug } = params;

  // Leer los posts desde el archivo JSON
  const postsDirectory = path.join(process.cwd(), 'public', 'content', 'blog.Posts.json');
  const fileContents = await fs.readFile(postsDirectory, 'utf8');
  const posts = JSON.parse(fileContents);

  // Encontrar el post correspondiente al slug
  const post = posts.find(post => post.slug === slug);

  if (!post) {
    // Usar notFound() para manejar el caso cuando el post no se encuentra
    notFound();
  }

  return (
    <>
      <Head>
        <title>{post.title} | Mi Blog</title>
        <meta name="description" content={post.summary} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`http://localhost:3000/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="twitter:image" content={post.image} />
      </Head>
      <div className="container mx-auto p-6">
        <div className="mb-6">
          {post.image && (
            <img
              src={post.image}
              alt={`Imagen de ${post.title}`}
              className="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-lg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          )}
        </div>
        <h1 className="text-4xl font-extrabold mb-4 text-center">{post.title}</h1>
        <p className="text-gray-600 mb-4 text-center text-sm italic">{post.date}</p>
        <div className="text-lg leading-relaxed prose prose-lg mx-auto">
          {post.content}
        </div>
      </div>
    </>
  );
}
