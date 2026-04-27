import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "hankadev.com",
    description:
      "I build. I break. I fix. Practical lessons from writing and debugging code.",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      author: "Hana Klingová (@hankadev)",
      pubDate: post.data.pubDate,
      description: post.data.description,
      categories: post.data.tags,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `/blog/${post.id}/`,
    })),
  });
}
