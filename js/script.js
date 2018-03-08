// As an extra challenge, you can build the product listings
// by looping over this array and creating HTML for each element.
// This will be best accomplished after we do lesson 09.
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

//Function to Search, triggered on submission
function search() {
  //Prevent default refresh
  event.preventDefault();
  console.log("Form Submitted")

  //Retrieve Search input by user
  var SearchBar = document.research.searchbar.value

  //Output to the console
  console.log("You searched for " + SearchBar)
}

//Function to retrieve Chatbox input 
function chatting() {
  event.preventDefault();
  console.log("Form Submitted")

  var ChatBox = document.question.chatarea.value

  console.log("Thank you for asking: " + ChatBox + ". The next available associate will be able to help you.")
}

//Function to retrieve Mailing list input 
function capture() {
  event.preventDefault();
  console.log("Form Submitted")

  var EMail = document.custInfo.email.value

  console.log("Thank you " + EMail + " for singing up to our mailing list!")
}

//Function to retrieve Sort By value
function sortchoice() {
  event.preventDefault();
  console.log("Form Submitted")

  var Sorted = document.getElementById("sort").value;

  console.log("You have chosen to sort by " + Sorted + ".")
}

//function to hide left side form, when under 542px
function toggleMenu() {
  //Choose elements that have the class "small"
  var element = document.getElementById("small")
  //Hide the chosen elements
  element.classList.toggle("hidden-under-542px")
}

//Items in shopping cart
var cart = [
]

//function to add and remove items in cart
//Retrieve information from form, with argument "item"
function updatedCart(item) {
  //Check if value is already in the shopping cart
  var i = cart.indexOf(item)
  //If no, insert item
  if (i == -1) {
    cart.push(item)
    console.log(item + " has been added to your cart.")
    console.log("You have " + cart.length + " items in the cart.")
  }
  //If yes, remove item
  else {
    //Remove 1 item from the index of the chosen item
    cart.splice(i, 1)
    console.log(item + " has been removed from your cart.")
    console.log("You have " + cart.length + " items in the cart.")
  }
}

//Extra challenge #1
//function to see what items are in the cart
function totalCart() {
  console.log("Items in cart: " + cart)
}

//Extra challenge #2
//Prices in shopping cart
var price = [
]

//function to display cost in cart
function calculate(itemPrice) {

  var i = price.indexOf(itemPrice)

  if (i == -1) {
    price.push(itemPrice)
    console.log(itemPrice + "$")

  } else {
    price.splice(i, 1)
    console.log("-" + itemPrice + "$")
  }
}

//Declare i as index, and sum as 0 to begin iterations
var i = 0;
var sum = 0;

//function to calculate the total cost
function totalCost() {

  //Iterate from 0 until the number of prices added
  for (i = 0; i < price.length; i++) {
    //Convert all strings into numbers when they are added to cart
    priceValue = parseFloat(price[i])
    //Sum to find the total in cart
    sum = sum + priceValue
  }

  console.log("Cost of items in cart: " + sum + "$")
}
