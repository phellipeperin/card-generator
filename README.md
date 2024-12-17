# Card Generator

## Setup

`npm install`

## Run

`npm run dev`
Then open on your browser: <http://localhost:5173>

## Add Spells

In the data folder there are 9 files already created (one for each spell level), just create new variables like the example and add then to the exported array at the bottom of the file.

If you want to see only specific spells on the list (for reprinting or something), you can export only the ones you want and ignore the rest.

The full list is assembled together in the allSpells.ts inside the same folder.

I've used a simple GPT command to generate the base of the spells, as you can see here: <https://chatgpt.com/share/6761258c-0d84-8011-8b2f-3abf0d9c3338>

## Adjust Visuals

The basic visuals are easily adjustable via properties on CSS. Just checkout the *card.css* and *card-container.css* inside the /components folder. It's pretty straight forward.

## Translations

There's a specific file called translations.ts inside the constants folder, you can adjust them there. If you need more, just let me know.
