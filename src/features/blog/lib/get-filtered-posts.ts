import { cache } from "react";
import { type Post } from "../data/posts";

function _getFilteredPosts(
  posts: Post[], // Assuming Post type has title, description, markdown
  searchQuery: string,
): Post[] {
  const normalizedSearchQuery = searchQuery.toLocaleLowerCase().trim();
  const keywords = normalizedSearchQuery.split(/\s+/).filter(Boolean);

  if (keywords.length === 0) {
    return posts;
  }

  return posts.filter((post) => {
    const postTitle = post.title.toLocaleLowerCase();
    const postDescription = post.description.toLocaleLowerCase();
    const postMarkdown = post.markdown.toLocaleLowerCase();

    const allKeywordsMatch = keywords.every((keyword) => {
      return (
        post.published &&
        (postTitle.includes(keyword) ||
          postDescription.includes(keyword) ||
          postMarkdown.includes(keyword))
      );
    });

    return allKeywordsMatch;
  });
}

export const getFilteredPosts = cache(_getFilteredPosts);
