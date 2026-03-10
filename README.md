## to start dev with "npm run dev"

- change the base in vite.config.ts to "/schoolProject/"
- change every path of .html in static to href="../russian/style.css"

## to build the project with "npm run build"

- change the base in vite.config.ts to "./"
- change every path of .html in static to href="./russian/style.css"
- Test run with "npx serve dist"