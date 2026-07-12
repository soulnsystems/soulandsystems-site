Drop your own images into this folder using these exact filenames
(the pages already reference them, so nothing else needs to change):

hero-chess.jpg
  Used on the homepage hero, full-bleed behind the headline.
  Landscape, at least 1600px wide. A dark or moody photo works best —
  a chess board mid-move, hands over pieces, or another "strategy in
  motion" image. It sits behind a dark gradient overlay, so images
  with darker tones on the left side will keep the text most readable.

photo-placeholder.jpg
  Used as a general supporting image on the homepage, method, about,
  and contact pages. You can either add one generic photo under this
  name, or duplicate it and rename per page (see notes below) if you
  want a different image on each.

If you want a different image per page instead of reusing
photo-placeholder.jpg everywhere, open css/style.css and change the
.photo-panel background-image, or add an inline style="background-image:
url('images/your-file.jpg')" directly on the relevant <div
class="photo-panel"> in each HTML file.

Until you add real files, the pages fall back to a plain dark panel,
so the layout still looks intentional rather than broken.
