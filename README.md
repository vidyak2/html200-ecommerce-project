# Description

This is an assignment to build a responsive ecommerce web page. Nav and product container div will use flexbox. Sidebar/aside is a module that changes layout and location based on window size. Submitting the mailing list signup form results in user feedback on the page. Clicking a product's “add to cart” or “remove from cart” button updates cart count at top.

Students may use the provided mockups to guide their design to whatever extent they like. Matching the mockups is not required.

## Provided Materials

  - basic HTML and CSS
  - JSON list of products in script.js file
  - reset.css
  - images for all products
  - suggested design mockups

## Assignments

Lesson 03:

  - Make design decisions about how you'd like your site to look. You can use the provided mockups to guide your design to whatever extent you'd like- feel free to implement them exactly or make up your own design completely.
  - Code basic CSS for page. `reset.css` file should remain as it is. `main.css` file can be added to, changed, or completely redone.
  - `nav ul` and `.item-container` elements should be styled as flexbox containers. Implement a responsive grid system of your own design, or use a library, or don't use a grid at all. Be sure all important size values are proportional (em, rem, %).
  - We'll continue working on the CSS for this project throughout the course, in particular making it more responsive. The styling does not have to be perfect after this assignment. It's fine to change or add to the HTML as necessary for your styling.

Lesson 05:

  - Write a JS form handler function to be triggered on form submit. It should print to the console a friendly message that includes the value of the form element with name "email". Something like "Thanks for signing up for our mailing list, bobross@example.com!"

Lesson 06:

  - Serve appropriately sized images. Use GIMP or another photo-editing program to resize all images to more reasonable, consistent dimensions. This includes product images, the logo, and any background or other images you've included.

Lesson 07:

  - Write Javascript function that toggles the inclusion of a product in the "cart".
  - Add/edit HTML as necessary to trigger the function on click of a button for each product.

Lesson 08:

  - Write CSS that uses media queries to change layouts/style based on device size. There shoud be at least one obvious layout change in addition to elements fluidly changing width.
  - Finish styling the page.

Lesson 09:

  - Write Javascript that causes the total number of items in the cart to display next to the cart icon when that total changes.
  - Write Javascript that displays the friendly message on form submit in the page, not in the console.
  - Update the HTML and CSS as necessary to accomodate these changes.
  - Update the Testing section of this README with your own information.

*Extra Challenge*: Incorporate unit tests with [Qunit](https://qunitjs.com/).

*Extra Challenge*: Code a popup that toggles between hidden and displayed when user clicks on cart icon. It should show information about items in the cart (maybe list of their names, but up to you).

*Extra Challenge*: Serve appropriately sized images for user's device. Create multiple sizes of each image, and serve the appropriate one using the `srcset` and `sizes` attributes on the `img` tags. This will require naming all of the images consistently, e.g. "ombre-infinity400.jpg", "ombre-infinity200.jpg". [More](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) about [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

*Extra Challenge*: Use browser storage to save details about a user's cart so when they revisit the page, it's in the same state as when they left it. [More about browser storage](https://www.w3schools.com/html/html5_webstorage.asp)

*Extra Challenge*: Dynamically generate the HTML for product listings from the JSON objects in script.js.

## Requirements

  - Site layout looks good on all sizes of devices. At a minimum, elements are proportionally styled and aside element changes location and layout at different screen sizes. This should be tested using a variety of devices and at least one online browser compatiblity testing tool.
  - Nav and product container elements are styled using flexbox.
  - Appropriately sized images are served.
  - User can add and remove items from their cart, which changes cart count number at top of page.
  - This README is updated to include information about the testing steps taken to ensure site quality.
  - Site is live on GH Pages hosting.

## Grading
Each weekly assignment will be graded independently. There will not be a final grade for the entire project.

## Testing
[update this section with information about the testing steps you took to ensure site quality]

#1 Define who the user base is for this website, and what sort of devices they might use.

The users of this website would be teenagers, young adults, and adults, with ages varying from 18 to 49. The majority of the users would be women. There could be men looking for presents, or for themselves, and some users could be over 50. 
This analysis will focus on the majority of the users, estimated to be between 18 and 49 years of age. They would be students or parents with a career. 
These users would have a high computer experience, and would mainly be using smartphones. It is estimated, according to Pew Research Center, that 66% of women own a smartphone. Between the ages of 18 and 29, 86% of the population owns a smartphone, and between the ages of 30 and 49, 83% of the population own a smartphone. 
It is also possible that the users use a tablet or a computer. The percentage of women using these devices are, respectively, 47% and 71%.
This website should be well tailored for all devices, and especially for smartphones and computers. 


#2 Test your site across multiple browsers and devices, focusing on ones your market research highlighted, using the tools we learned about in today's class. 
#3 Update the "Testing" section of the README to include your research on users and devices, and testing steps you took to ensure site quality.

1. Testing has been done on http://responsivedesignchecker.com, to ensure that the website appears as wanted on all the main devices. With this tool, responsiveness of the website was verified. All elements moved as expected at various screen sizes. 

2. Testing has been done on https://search.google.com/test/mobile-friendly. This test verified that the website is mobile-friendly. 

3. Testing has been done on https://www.webpagetest.org, to verify load time. The grade A has been given for all tested elements, except for Cache static content (F). This last element has to be reworked before site is fully published. 
This test was done for: 
- iPhone 6: Load time: 1.940s, and first byte appeared after: 0.382s 
- Galaxy S5: Load time: 1.422s, and first byte appeared after: 0.333s
- Desktop (Toronto, Canada, Chrome, Firefox, Opera): Load time: 1.517s, and first byte appeared after: 0.310s
- Desktop (Pheonix, AZ, IE10): Load time: 1.649s, and first byte appeared after: 0.399s
These tests were done using various internet connexions as well.

4. Testing has been done on https://tools.pingdom.com. This test was done to verify how the website would respond on real browsers. 
The result of this test was: Performance grade: B (88%), Load time: 1.55s. 
This test has also flagged "Leverage browser caching: F". This must be corrected. 

5. Testing was done on https://developers.google.com/speed/pagespeed/insights/. The grade given for optimization on mobile is: 72%, and on desktop: 69%. 
The images could be compressed, and some blocking CSS resources should be removed. 

