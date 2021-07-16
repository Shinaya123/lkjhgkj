var ball;
var database;
var ballPos;


function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var dbPos = database.ref("ball/position");
    dbPos.on("value", readPosition);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
database.ref("ball/position").set({
    x:ballPos.x+x, y:ballPos.y+y
})
}

function readPosition(data){
 ballPos = data.val();
 ball.x = ballPos.x;
 ball.y = ballPos.y;
 }