var customerName = 'bob'; // Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Modify the customerName variable directly to its uppercase version.
}

function setBestCustomer() {
  bestCustomer = 'not bob'; // Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Write a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
}

const leastFavoriteCustomer = 'someone'; // Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // Write a function called changeLeastFavoriteCustomer() that attempts to change that constant.
  // When you try to change a constant, JavaScript throws a TypeError: Assignment to constant variable.
}
