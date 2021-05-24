# Paul Adokiye Iruene's Corsali Full stack interview challenge

## DESCRIPTION
This mini file editor is for editing files ranging from different types like markdown, plaintext, javascript and json

# USAGE

- run `npm install && npm run dev`
- Open `localhost:3000` in your browser

## DEVELOPMENT AND APP integration Guide:

- app structure tree:

          - /components
            - /CodeEditor      # -- contains the component for editing files of type javascript or json, more can be added based on request and input
            - /MarkdownEditor       # -- contains the component for editing and previewing markdown files
            - /PlaintextEditor        # -- contains the component for editing and previewing plain text files
            - style.css        # -- contains the global styles for all the editors

          - /pages
            -  _app.js_       # -- This is the initial file that nextjs calls before rendering components
            -  index.js    # -- this is the file that will be rendered first on the browser
            -  style.module.css          # -- it contains the css styles for all components to use
