//app/sitemap.xml.svelte

const site = "https://pt.gerastucter.site"

const pages = ["sobre", "recursos", "perguntas-frequentes"]


const ebooks = {
    page: "ebooks",
    slug: "recursos/ebooks", 
}

const ebooksdemos = [
  {
    title: "Ebook-001",
    slug: "top-10-steps-to-become-a-poliglot-by-yourself-and-without-spending-money-ebook-demo",
    updatedAt: "2023-07-22"
  }
  ]

const blog = {
    page: "blogue",
    slug: "recursos/blogue",
    languages: [
      {
        value: 'espanhol',
        slug: 'recursos/blogue/espanhol',
        updatedAt: "2023-07-22"
      }
    ]
}

const spanishblogposts = [
  {
    title: "Spanish-001",
    slug: "qual-a-diferenca-do-espanhol-da-espanha-para-com-o-resto-do-mundo", 
    language: 'spanish',
    updatedAt: "2023-06-18"
  }
  ]
  


const tutoring = {
    page: "tutoria",
    slug: "recursos/tutoria", 
}

const tutoringposts = [
  {
    title: "Tutoring-001",
    slug: "japanese-learning-map-with-only-free-tools", 
    updatedAt: "2023-07-24"
  }
  ]
  
  
/** @type {import('./$types').RequestHandler} */
export async function GET({
    url
}) {
    const body = sitemap(spanishblogposts, pages);
    const response = new Response(body);
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
}

const sitemap = (posts, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>${site}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  ${pages.map((page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  `).join('')}
    <url>
  <loc>${site}/${blog.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/${tutoring.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${site}/${ebooks.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  ${blog.languages.map((post) => post.visible ? null : `
  <url>
    <loc>${site}/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
  ${spanishblogposts.map((post) => post.visible ? null : `
  <url>
    <loc>${site}/${blog.slug}/${post.language}/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
		  ${ebooksdemos.map((post) => post.visible ? null : `
  <url>
    <loc>${site}/${ebooks.slug}/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
		${tutoringposts.map((post) => post.visible ? null : `
  <url>
    <loc>${site}/${tutoring.slug}/${post.slug}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${post.updatedAt}</lastmod>
    <priority>0.3</priority>
  </url>
  `
		)
		.join('')}
</urlset>`;