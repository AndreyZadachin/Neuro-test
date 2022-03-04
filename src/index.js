import './pages/index.css';

class Draw {
  constructor(options) {
    this.name = options.name;
    this.canvas = document.getElementById(options.selector);
    this.size = options.size;
    this.ctx = this.canvas.getContext('2d');
  }
  drawRect() {
    this.ctx.beginPath();
    this.ctx.rect.apply(this.ctx, this.size);
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }
  drawArc() {
    this.ctx.beginPath();
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
    this.ctx.lineCap = 'butt';
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
}

const drawRect = new Draw({
  selector: 'canvas',
  name: 'rect',
  size: [450, 350, 300, 200],
});
const drawSquare = new Draw({
  selector: 'canvas',
  name: 'rect',
  size: [100, 350, 200, 200],
});
const drawArc = new Draw({
  selector: 'canvas',
  name: 'arc',
  size: [200, 150, 100],
});
const drawTriangle = new Draw({
  selector: 'canvas',
  name: 'triangle',
  size: [
    [500, 250],
    [600, 50],
    [700, 250],
  ],
});

drawArc.drawFigure();
drawTriangle.drawFigure();
drawRect.drawFigure();
drawSquare.drawFigure();
