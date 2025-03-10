class Rectangle {
    constructor(width, height) {
        this.Width = width;
        this.Height = height;
    }
    sumAmounts() {
        return this.Width + this.Height

    }
    minuseAmounts() {
        return this.Width - this.Height

    }

}

class ColorRectangle extends Rectangle {
    constructor(width, height, color) {
        super(width, height); // Pass width and height to the parent class
        this.Color = color; // Add new property for color
    }

    TextRighter() {
        return `the width of the ${this.Color} Rectangle is ${this.Width} and the height is ${this.Height}`
    }
}

class mathnull {
    static add(a , b) {
        return a+ b

    }
}

export { Rectangle, ColorRectangle }