var canvas= new fabric.Canvas("myCanvas")
block_image_width= 30;
block_image_height= 30;

player_x= 10;
player_y= 10;
var player_object= "";
var block_image_object= "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object= Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    key_pressed= e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey== true && key_pressed=='80'){
        console.log("p and shift are pressed together");
        block_image_width+= 10;
        block_image_height+= 10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }
    if (e.shiftKey== true && key_pressed== '77'){
        console.log("m and shift are pressed together");
        block_image_width-=10;
        block_image_height-=10;
        document.getElementById("current_width").innerHTML= block_image_width;
        document.getElementById("current_height").innerHTML= block_image_height;
    }
    if (key_pressed=='38'){
        up();
        console.log("up");
    }
    if(key_pressed== '40'){
        down();
        console.log("down");
    }
    if(key_pressed== '37'){
        left();
        console.log("left");
    }
    if(key_pressed== '39'){
        right();
        console.log("right");
    }
    if(key_pressed== '84'){
        console.log("t was pressed");
        new_image('trunk.jpg');
    }
    if (key_pressed== '68'){
        console.log("d was pressed");
        new_image('dark_green.png');
    }
    if(key_pressed== '76'){
        console.log("l was pressed");
        new_image('light_green.png')
    }
    if(key_pressed== '71'){
        console.log("g was pressed");
        new_image('ground.png');
    }
    if(key_pressed== '87'){
        console.log("w was pressed");
        new_image('wall.jpg');
    }
    if(key_pressed== '89'){
        console.log("y was pressed");
        new_image('yellow_wall.png');
    }
    if(key_pressed== '82'){
        console.log("r was pressed");
        new_image('roof.jpg');
    }
    if(key_pressed== '67'){
        console.log("c was pressed");
        new_image('cloud.jpg')
    }
    if(key_pressed== '85'){
        console.log("u was pressed");
        new_image('unique.png');
    }
}

function up(){
    if(player_y>=0){
        player_y-=block_image_height;
        console.log("block image height= " +block_image_height);
        console.log("When up arrow is pressed, x value= "+player_x+" and y value= "+player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y+=block_image_height;
        console.log("block image height= "+block_image_height);
        console.log("When down arrow is pressed, x value= "+player_x+" and y value= "+player_y)
        canvas.remove(player_object)
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x-=block_image_width;
        console.log("block image width= "+block_image_width);
        console.log("when left arrow is pressed, x value="+player_x+"and y value= "+player_y)
        canvas.remove(player_object)
        player_update();
    }
}

function right(){
    if(player_x<=900){
        player_x+=block_image_width;
        console.log("block image width= "+block_image_width);
        console.log("when right arrow is pressed, x value= "+player_x+"and y value= "+player_y)
        canvas.remove(player_object)
        player_update();
    }
}