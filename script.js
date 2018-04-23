$(document).ready(function () {

    const MAX = 600;
    class Shape {
        constructor(height, width) {
            this.height = height;
            this.width = width;
            this.div = $('<div class="shape"></div>');
            $(this.div).css({ "height": `${this.height}px`, "width": `${this.width}px` });
            $(this.div).css({ "left": `${randomVal(0, MAX)}px`, "top": `${randomVal(0, MAX)}px` });
            $(this.div).appendTo("#canvas");
            $(this.div).click(() => {
                this.describe();
            });
            $(this.div).dblclick(() => {
                this.removeShape();
            });
        }

        //update the statistics in the sidepanel
        describe() {
            $("#shape-name span").replaceWith(`<span>${this.name}</span>`);
            $("#shape-width span").replaceWith(`<span>${this.width}</span>`);
            $("#shape-height span").replaceWith(`<span>${this.height}</span>`);
            $("#shape-radius span").replaceWith(`<span>${this.radius}</span>`);
            $("#shape-area span").replaceWith(`<span>${this.area()}</span>`);
            $("#shape-perimeter span").replaceWith(`<span>${this.perimeter()}</span>`);
        }

        //remove shape from screen
        removeShape() {
            $(this.div).remove();
        }
    }

    //Rectangle Class
    class Rectangle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.name = 'Rectangle';
            $(this.div).addClass("rectangle");
        }

        area() {
            return this.height * this.width;
        }

        perimeter() {
            return 2 * this.height + 2 * this.width;
        }
    }

    //Square Class
    class Square extends Rectangle {
        constructor(height, width) {
            super(height, width);
            this.name = "Square";
            $(this.div).css("background-color", "red");
        }
    }

    //circle class
    class Circle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.radius = 0.5 * height;
            this.name = "Circle";
            $(this.div).addClass("circle");
        }

        area() {
            return Math.PI * (this.radius) ^ 2;
        }

        perimeter() {
            return 2 * Math.PI * this.radius;
        }
    }

    //Triangle Class
    class Triangle extends Shape {
        constructor(height, width) {
            super(height, width);
            this.name = "Triangle";
            $(this.div).css({ "height": `0px`, "width": `0px` });
            $(this.div).css({
                "border-bottom": `${this.height}px solid yellow`,
                "border-right": `${this.width}px solid transparent`
            });
        }

        area() {
            return 0.5 * (this.height) * (this.width);
        }

        perimeter() {
            return 2 * this.height + (Math.sqrt(2)) * this.height;
        }
    }

    //event to add new rectangle to #canvas
    $("#insert-rectangle").click(function () {
        let height = $("#rectangle-height").val();
        let width = $("#rectangle-width").val();
        let r = new Rectangle(height, width);
    });

    //event to add new square to #canvas
    $("#insert-square").click(function () {
        let height = $("#square-length").val();
        let width = $("#square-length").val();
        let sq = new Square(height, width);
    });

    //event to add new circle
    $("#insert-circle").click(function () {
        let height = 2 * $("#circle-radius").val();
        let width = 2 * $("#circle-radius").val();
        let c = new Circle(height, width);
    });

    //event to add new triangle
    $("#insert-triangle").click(function () {
        let height = $("#triangle-height").val();
        let width = $("#triangle-height").val();
        let t = new Triangle(height, width);
    });

    function randomVal(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
});