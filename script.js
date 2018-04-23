$(document).ready(function() {

    const MAX = 600;
    class Shape {
        constructor(height, width) {
            this.height = height;
            this.width = width;
            this.div = $('<div class="shape"></div>');
            $(this.div).css({"height": `${this.height}px`, "width": `${this.width}px`})
            $(this.div).css({"left": `${randomVal(0, MAX)}px`, "top": `${randomVal(0, MAX)}px`});
            $(this.div).appendTo("#canvas");
            $(this.div).click( () => {
                this.describe();
            });
            $(this.div).dblclick( () => {
                this.removeShape();
            });
        }
        
        //update the statistics in the sidepanel
        describe() {

        }

        //remove shape from screen
        removeShape() {

        }
        //draw itself on screen
        // draw() {
        //     //takes in the parameters when the shape was created
        //     //palce in random location in the #canvas div
        // }
    }
    let s1 = new Shape(10, 10);
    console.log(s1);

    function randomVal(min, max) {
        return Math.floor(Math.random() * (max-min)) + min;
    }
});