function t_shirt(size, message, quantity) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love AI"; }
    if (quantity === void 0) { quantity = "10pcs"; }
    console.log("There is an order of t-shirts of size ".concat(size, ", message ").concat(message, " printed on it. The customer needs quantity of ").concat(quantity, ". "));
}
t_shirt(); //Default size and message
t_shirt("small"); // size = small and default message
t_shirt("medium", "I love coding", "50pcs"); // size = medium and message = I love coding and quantity = 50pcs
