import './pages/index.css';

class DrawInCanvas {
  constructor(options) {
    this.name = options.name;
    this.canvas = document.getElementById(options.selector);
    this.size = options.size;
    this.strokeStyle = options.strokeStyle;
    this.fillStyle = options.fillStyle;
    this.lineWidth = options.lineWidth;
    this.ctx = this.canvas.getContext('2d');
  }
  drawRect() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.strokeStyle;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.rect.apply(this.ctx, this.size);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }
  drawArc() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.strokeStyle;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.arc.apply(this.ctx, this.size.concat([2 * Math.PI, false]));
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }
  drawTriangle() {
    this.ctx.beginPath();
    this.ctx.moveTo.apply(this.ctx, this.size[0]);
    this.ctx.lineTo.apply(this.ctx, this.size[1]);
    this.ctx.lineTo.apply(this.ctx, this.size[2]);
    this.ctx.strokeStyle = this.strokeStyle;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.lineCap = 'butt';
    this.ctx.fillStyle = this.fillStyle;
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }
  drawFigure() {
    switch (this.name) {
      case 'arc':
        this.drawArc();
        break;
      case 'rect':
        this.drawRect();
        break;

      case 'triangle':
        this.drawTriangle();
        break;
    }
  }
  draw() {
    this.drawFigure();
  }
}

var drawRect = new DrawInCanvas({
  selector: 'canvas',
  name: 'rect',
  size: [450, 350, 300, 200],
  strokeStyle: 'lime',
  lineWidth: 5,
  fillStyle: 'purple',
});
var drawSquare = new DrawInCanvas({
  selector: 'canvas',
  name: 'rect',
  size: [100, 350, 200, 200],
  strokeStyle: 'magenta',
  lineWidth: 5,
  fillStyle: 'orange',
});
var drawArc = new DrawInCanvas({
  selector: 'canvas',
  name: 'arc',
  size: [200, 150, 100],
  strokeStyle: 'red',
  lineWidth: 5,
  fillStyle: 'green',
});
var drawTriangle = new DrawInCanvas({
  selector: 'canvas',
  name: 'triangle',
  size: [
    [500, 250],
    [600, 50],
    [700, 250],
  ],
  strokeStyle: 'blue',
  lineWidth: 5,
  fillStyle: 'yellow',
});

drawArc.draw();
drawTriangle.draw();
drawRect.draw();
drawSquare.draw();
