const Kiosk = {
    fruit: 'Mango'
}

Object.defineProperty(Kiosk, "getFruit", {
    get : function () {
        return this.fruit;
    }
});

Object.defineProperty(Kiosk, "changeName", {
    set : function (value) {
        this.fruit = value;
    }
});

console.log(Kiosk.fruit);
Kiosk.fruit = "banana"

console.log(Kiosk.fruit); 