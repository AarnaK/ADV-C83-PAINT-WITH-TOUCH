canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "";
var width_of_line = "";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = "color";
    width_of_line = "width_of_line";

    MouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e)
{
    MouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave)
function my_mouseleave(e)
{
    MouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX = canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY = canvas.offsetTop;

    if (MouseEvent = "mouseDown")
    {
        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
