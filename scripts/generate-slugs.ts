import connectToDB from "../lib/mongodb";
import Post from "../models/post";

async function generateSlug(title: string) {
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function run() {
  try {
    await connectToDB();
    const posts = await Post.find({});

    for (const post of posts) {
      if (post.slug) continue;
      const base = await generateSlug(post.title || post.description || String(post._id));
      let slug = base;
      let counter = 1;
      while (await Post.findOne({ slug })) {
        slug = `${base}-${counter++}`;
      }
      post.slug = slug;
      await post.save();
      console.log(`Updated post ${post._id} -> slug=${slug}`);
    }

    console.log("Done generating slugs");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
