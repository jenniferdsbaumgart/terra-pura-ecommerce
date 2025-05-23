import React from 'react';

type Post = {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    content: string;
};

const mockPosts: Post[] = [
    {
        id: 1,
        title: 'Welcome to Terra Pura Blog',
        date: '2024-06-01',
        excerpt: 'Discover the latest updates and stories from Terra Pura.',
        content: 'This is the full content of the first blog post. Stay tuned for more updates!',
    },
    {
        id: 2,
        title: 'Our Mission and Vision',
        date: '2024-06-05',
        excerpt: 'Learn about the mission and vision that drive Terra Pura forward.',
        content: 'At Terra Pura, our mission is to create a sustainable future...',
    },
    {
        id: 3,
        title: 'How You Can Get Involved',
        date: '2024-06-10',
        excerpt: 'Find out how you can contribute to our community and projects.',
        content: 'We welcome volunteers and contributors from all backgrounds...',
    },
];

const Blog: React.FC = () => {
    return (
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
            <h1>Blog</h1>
            {mockPosts.map(post => (
                <article key={post.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <h2>{post.title}</h2>
                    <small>{new Date(post.date).toLocaleDateString()}</small>
                    <p>{post.excerpt}</p>
                    {/* For a real blog, you might link to a detail page */}
                </article>
            ))}
        </div>
    );
};

export default Blog;