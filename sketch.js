function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  
  background(200,50);
  
  var colorList = ['#e86584',
                 '#3c5979',
                 '#018cb7',
                 '#fae093',
                 '#ffe2e6',
                 '#6eb66d',
                 '#ffa960',
                 '#2b61ce',
                 '#c496d7',
                 '#6faaec',
                 '#fea24d'
                 ];
    for(var i=0; i < touches.length; i++) {
    
    
    var touch = touches[i];
    fill(colorList[i]);
    ellipse(touch.x, touch.y, 150, 150);
  }

//just try how to edit again     
    
    
    
    

}