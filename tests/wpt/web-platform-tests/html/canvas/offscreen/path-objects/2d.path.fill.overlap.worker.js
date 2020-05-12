// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.fill.overlap
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, 100, 50);
ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
ctx.rect(0, 0, 100, 50);
ctx.closePath();
ctx.rect(10, 10, 80, 30);
ctx.fill();
_assertPixelApprox(offscreenCanvas, 50,25, 0,127,0,255, "50,25", "0,127,0,255", 1);
t.done();

});
done();