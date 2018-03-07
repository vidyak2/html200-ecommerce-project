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

//Function to retrieve Style value in dropdown
function stylechoice() {
  event.preventDefault();
  console.log("Form Submitted")

  var Style = document.getElementById("style").value;

  console.log("You have chosen to see scarves of " + Style + " style.")
}

//Function to retrieve Length in dropdown
function lengthchoice() {
  event.preventDefault();
  console.log("Form Submitted")

  var Length = document.getElementById("length").value;

  console.log("You have chosen to see scarves of " + Length + " length.")
}

//Actual shopping cart
var cart = [
]

//Function will be redone for every element, except item name will change
//Retrieve information from form, by adding directly when calling function
function updatedCart(item) {
  //  event.preventDefault()
  //Check if value is already in the shopping cart
  var i = cart.indexOf(item)
  //If no, insert item
  if (i == -1) {
    cart.push(item)
    console.log(item + ' has been added to your cart.')
    console.log('You have ' + cart.length + ' items in the cart.')
  }
  //If yes, remove item
  else {
    //Remove 1 item from the index of the chosen item
    cart.splice(i, 1)
    console.log(item + ' has been removed from your cart.')
    console.log('You have ' + cart.length + ' items in the cart.')
  }
}

//Extra challenge #1
//Function to see what items are in the cart
function totalCart() {
  console.log("Items in cart: " + cart)
}

//Actual shopping cart
var price = [
]

//Extra challenge #2
//Function to calculate cost in cart
function calculate(itemPrice) {

  var i = price.indexOf(itemPrice)

  if (i == -1) {
    //    itemPrice = parseInt(itemPrice)
    price.push(itemPrice)
    console.log(itemPrice)


  } else {
    //    itemPrice = parseInt(itemPrice)
    price.splice(i, 1)
    console.log('-' + itemPrice)
  }

  //Display array of prices in cart
  console.log(price)
}

//Function to see what items are in cart
function totalCost() {
  //Convert total cart price strings into numbers (with decimals)
  priceValue = parseFloat(price)

  console.log(priceValue)

  //  console.log("Price of items in cart: " + priceValue + "$")
}


////Extra challenge #2
////Function to see what items are in the cart
//function calculate(itemPrice) {
//  var i = price.indexOf(itemPrice)
//  console.log(i)
//  //Add or substract prices in cart
//  if (i == -1) {
//    //Convert price string into a number
//    priceValue = parseInt(itemPrice)
//    price.push(priceValue)
//    console.log('Your total is ' + priceValue + '$.')
//  }
//  //If yes, remove item
//  else {
//    //Remove 1 item from the index of the chosen item
//    priceValue = parseInt(itemPrice)
//    price.splice(i, 1)
//    console.log(itemPrice + ' has been removed from your cart.')
//  }
//}
