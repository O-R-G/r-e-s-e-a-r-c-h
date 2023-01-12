/* 
    badge.js
    
    generic, should be replaced per site
    to draw and update the badge
*/

var canvas,
    context,
    step,
    steps,
    frames,
    delay;
var centerX,
    centerY,
    radius,
    direction;
var counter;

function badge_init() {
    var badge = document.getElementById("badge");
    canvas = badge.getElementsByTagName("canvas")[0];
    context = canvas.getContext("2d");

    // set canvas size based on container
    // canvas is always a square of the minimum dimension
    var computed_width = window.getComputedStyle(badge, null).getPropertyValue('width');
    var computed_width = parseFloat(computed_width, 10)
    var computed_height = window.getComputedStyle(badge, null).getPropertyValue('height');
    var computed_height = parseFloat(computed_height, 10)
    var min_ = Math.min(computed_width, computed_height);
    context.canvas.width = min_;
    context.canvas.height = min_;
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    // debug
    console.log('computed_width = ' + computed_width);
    console.log('computed_height = ' + computed_height);
    console.log('canvas.width = ' + canvas.width);
    console.log('canvas.height = ' + canvas.height);
    console.log('centerX = ' + centerX);
    console.log('centerY = ' + centerY);

    context.fillStyle = "#FFFFFF";
    context.lineWidth = 8;
    context.strokeStyle = '#000';

    // load sprite sheet
    sprite_sheet = new Image();
    sprite_sheet.src = '/media/png/badge-sheet.png';
    sprite_height = 414;
    sprite_width = 410;
    sprite_computed_width = context.canvas.width;
    sprite_computed_height = (sprite_computed_width * 500) / 500;
    sprite_X = (context.canvas.width - sprite_computed_width) / 2;;
    sprite_Y = (context.canvas.height - sprite_computed_height) / 2;
    sprite_sheet_columns = 3;
    sprite_sheet_rows = 3;
    frames = sprite_sheet_columns * sprite_sheet_rows;    // frames in sprite_sheet

    // adjust delay by mouse y

    delay = 250;    // adjust this as needed to match gif 
    canvas.onmousemove = function(e){delay = e.offsetY}

    counter = 0;
    badge_animate();
}

increment = -1;

function badge_animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    _x = counter % sprite_sheet_columns;
    _y = Math.floor(counter % (sprite_sheet_columns * sprite_sheet_rows) / sprite_sheet_columns);
    context.drawImage(sprite_sheet, sprite_width * _x, sprite_height * _y, sprite_width, sprite_height, sprite_X, sprite_Y, sprite_computed_width, sprite_computed_height);

    // flip counter?
    // console.log(counter + ' ---> ' + _x + ' , ' + _y + ' ... ' + increment); 
    increment *= (counter == 0 || counter == (sprite_sheet_columns * sprite_sheet_rows - 1)) ? -1 : 1;
    counter += increment;
    t = setTimeout('badge_animate()', delay);
}

function badge_start_stop() {
    if (t) {
        clearTimeout(t);
        t = null;
    } else {
        setTimeout('badge_animate()', delay);
    }
}
