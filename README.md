# Template for the blog of @martin-hughes

This is based on the existing [blog-starter template from Next.js](https://github.com/vercel/next.js/tree/canary/examples/blog-starter).

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

# Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).

# Setup

* Clone to your preferred location
* Set the values you want in `src/lib/constants.ts`
* Write blog posts
* Set the environment variable `BUILD_BASE_URL` to the root of your website
* `npm run build` - generates the website in the `out` directory
* Publish that directory.
