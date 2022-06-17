# Restaurant Page

A three-tab restaurant page with a homepage, a menu page, and a contact information page. Unlike previous projects, everything is generated entirely through JavaScript instead of relying on HTML. This project serves as practice for using ES6 Modules, OOP principles, factory functions and modules, and Webpack. 

# Features
- A hero area and a header with a navigation bar to switch between the three tabs
- A main content page that's dynamically deleted and generated based on which tab was clicked through JS
- Uses webpack to bundle the source files 
- Each page is separated into their own ES6 Module files, and imported/exported accordingly


# Roadblocks
- It was difficult to figure out what the best method is for separating the various functions into ES6 modules. For example, I wasn't sure if I should include the function to create the contents of the header and hero in loader.js or in the three different tab pages. I decided to store the setup code for the hero area in loader.js, and then modified only the Header depending on which tab is loaded. 

- I decided to create a separate helper function called "mainElement" that lets me add an image with a caption and a short description to the left of the image. I simply had to pass the title, description text, and image source to the function to generate it. This let me generate multiple menu items without repeating the same code over and over and bloating the menu.js module. 

- It was a bit difficult getting used to using webpack, such as using it to bundle css stylesheets and images along with the code. Also, it took a while to get used to having to run webpack or run the webpack --watch command to automatically watch for changes so webpack can rebundle the files in the src folder.

