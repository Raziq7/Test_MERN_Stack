Brief introduction about the application
using technologies for application.
Front-end as React. Backend as a Node, Database as a Mongodb, Backend Framework as an Express.js
I used redux on the front end for state management

# How to start the application?

First go to client folder and install all packages in package.json using npm install command.
If you have any problem using this command use --force in command. Like `npm install --force`
after that. Run the code using the npm start command and it will start on port 300

Secondly go to back-end folder and you can install all such packages in package.json
Important :- Add .env file in back end folder. Variables:"NODE_ENV
PORT
MONGO_URI
JWT_SECRET"
Don't forget to add this file including these variables. If you forget, you will see an error.
After that. You can start the server with the npm start command using port 5000 or a port you added in the .env.

# HOME PAGE

Open a web browser and enter the URL http://localhost:3000 in the address bar.

You can view the home page without logging in as a guest user. You can see some dummy products and carousel for the interface.
If you scroll down, you can see the products you have added.
If you don't add product, you will see "First login as admin and add product, only then you can see products".

image.png

# Register Page

Go to register page for registration.
You can see 3 field input and 1 field switch

3 fields:

1. Email,
2. Password,
3. Confirm the password.

   1 Field Switch: This switch is to register as an admin. If you turn on the switch, you can register as an admin. Ad Product can be accessed if you register on it.
   There is button validation if you submit. If everything is satisfactory it will redirect to home

# Login Page

Validation in all fields there. If you are logged in, you cannot be redirected to the login page

# cart page

in home page you see products you added. you can see there on the product card 'add to cart' button. if you click on this you can see on the cart icon increment numbers. if you click more time on the cart button product quantity will increase but you can't see
in home page you see products you added. you can see there on the product card 'add to cart' button. if you click on this you can see on the cart icon increment numbers. if you click more time on the cart button product quantity will increase but you can't see on the icon. you can see in cart page

if you go to cart page you can see products you added also quntity and details.

_Subtotal_ You can see the subtotal, which is the total of all cart products.
If you click the plus button, the product quantity will increase, while the subtotal will increase

You will see the Remove button. If you click on it, the product will be removed from the cart, while the number in the cart icon will decrease
