import fm from 'front-matter';

export function getAllPosts() {
  const files = import.meta.glob('/src/posts/*.md', { as: 'raw', eager: true });

  return Object.entries(files).map(([path, rawContent]) => {
    const slug = path.split('/').pop().replace('.md', '');
    const { attributes } = fm(rawContent);

    return {
      slug,
      title: attributes.title || slug,
      summary: attributes.summary || '',
      date: attributes.date || '',
      tags: attributes.tags || [],
    };
  });
}
