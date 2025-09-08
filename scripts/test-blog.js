const { getAllBlogPosts, getBlogPost } = require('../src/lib/blog');

console.log('Testing blog functions...');

try {
  console.log('Getting all blog posts...');
  const allPosts = getAllBlogPosts();
  console.log(`Found ${allPosts.length} posts`);
  console.log('Posts:', allPosts.map(p => p.title));
  
  if (allPosts.length > 0) {
    console.log('\nGetting first post details...');
    const firstPost = getBlogPost(allPosts[0].slug);
    console.log('First post:', firstPost ? firstPost.title : 'Not found');
  }
} catch (error) {
  console.error('Error testing blog functions:', error);
}