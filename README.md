# Soul & Systems — website

A 5-page static site: Home, Method, Services, About, Contact.
No build step, no framework — plain HTML/CSS, so it deploys as-is.

## Add your images

See `images/README.txt` for the exact filenames the pages expect.
Drop your photos into `/images` and refresh — nothing else to configure.

## Deploy on GitHub Pages (free)

1. Create a new repository on GitHub (e.g. `soul-and-systems`).
2. Upload everything in this folder to the repo, keeping the same
   structure (`index.html`, `css/style.css`, `images/`, etc. all at
   the repo root — not inside a subfolder).
3. In the repo, go to Settings → Pages.
4. Under "Build and deployment", set Source to "Deploy from a branch".
5. Set Branch to `main` and folder to `/ (root)`, then Save.
6. Wait a minute or two — GitHub will give you a live URL, usually
   `https://your-username.github.io/soul-and-systems/`.

## Connect the contact form

The form on contact.html posts to Formspree (free tier available):

1. Go to formspree.io and create a free account.
2. Create a new form and copy the endpoint it gives you
   (looks like `https://formspree.io/f/abcd1234`).
3. Open contact.html, find `YOUR_FORM_ID` in the form's `action`
   attribute, and replace it with your real endpoint.

## Connect a booking link

In contact.html, replace the placeholder text near "Prefer to book
directly?" with a real Calendly or Cal.com link (both have free plans).

## Using a custom domain

If you buy a domain later, GitHub Pages supports it directly:
Settings → Pages → Custom domain, then follow GitHub's DNS instructions.

## Editing copy

Every page has plain HTML you can edit directly — headings are in
`<h1>`/`<h2>` tags, paragraphs in `<p>` tags. The About page has two
paragraphs marked with `[Replace this...]` — that's your real story,
swap it in before launching.
