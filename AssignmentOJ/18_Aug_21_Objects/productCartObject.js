var cartObject = {
    data: [],

    products: function (name, quantity, price) {
        var list = {
        productName: name,
        productQuantity: quantity,
        productPrice: price
        }
        this.data.push(list)
    },
    total: function () {
        var sum = 0;
        for (var i = 0; i < this.data.length; i++){
            var out = this.data[i].productQuantity * this.data[i].productPrice
            sum = sum + out
        }
        console.log(sum)
    }
}

cartObject.products("Rice", 2, 60)
cartObject.products("Dal", 3, 50)
cartObject.products("Salt", 1, 20)

cartObject.total()