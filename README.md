# Portfolio

One-page developer portfolio built with React, Vite and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # local preview
npm run build    # production build in /dist
```

## Make it yours

| What                          | Where                                   |
| ----------------------------- | --------------------------------------- |
| Name, links, bio, projects... | `src/data.js` (all content)             |
| Colours, fonts, new themes    | `src/theme.css` (then list in `themes`) |
| Photos                        | `public/photos/`, referenced as `/photos/name.jpg` |
| CV                            | `public/cv.pdf`                         |

Leave an image `src` as `null` to keep the placeholder. Set `live: ""` on a
project to hide its demo link, and `availability: ""` to hide the badge.

## Add a theme

1. Copy a block in `src/theme.css`, rename `[data-theme="..."]` and change the colours.
2. Add `{ id: "yourname", label: "Your Name" }` to `themes` in `src/data.js`.

## Deploy

Push to GitHub and import the repo into Vercel or Netlify (build command
`npm run build`, output folder `dist`).
