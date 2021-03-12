var x = 100;
var y = 100;
var angle1 = 0.0;
var segLength = 50;
var add=5;
var flag=true;

function boubouche_eye(x, y, a) {
    // tout dans une seule et même forme
    fill(0,0,0);
    translate(x, y);
    rotate(a);
    ellipse(0+(segLength/10), 0-(segLength/4), segLength/6, segLength/6);
    if(add<20&&flag==true){
        add++;
    } else if(add==20 && flag==true) {
        flag=false;
    } else{
        add--;
        if(add==5){
            flag=true;
        }
    }
    triangle(0, 0, 0+(segLength/1.9)+add, 0+(segLength/1.9)-add, 0+(segLength/1.9)+add, 0-(segLength/1.9)+add);
}

function setup(){
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(0);
    noStroke();

    var dx = mouseX - x;
    var dy = mouseY - y;
    angle1 = atan2(dy, dx);
    x = mouseX - (cos(angle1) * segLength);
    y = mouseY - (sin(angle1) * segLength);

    // corps
    fill(255,244,0);
    ellipse(x, y, segLength, segLength);
    push();

    // bouche et nieu
    boubouche_eye(x,y,angle1);
    push();

}

