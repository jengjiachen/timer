let blockX = 0;
let blockY = 0;
let blockColor = 'pink';
let drawTimer;
const speed = 10;
const distance = 14;

function setup() {
  createCanvas(800, 800);
  background('teal');
}

function drawBlock(x, y, color) {
  // fill(color || 255);
  rect(x, y, 100, 100);
}

function keyTyped() {
  let keyToNumber = Number(key);
  if (isNaN(keyToNumber)) {
    return;
  }
  keyToNumber = map(keyToNumber, 1, 9, 1, 'pink');
  console.log('converted number', keyToNumber);
  blockColor = keyToNumber;
  console.log('key to number', keytoNumber);
}

window.setTimeout(() => {
  drawTimer = window.setInterval(() => {
    if (blockY - 100 <= height) {
      drawBlock(blockX, blockY, blockColor);
      blockY += distance;
    } else {
      blockY = 0;
      blockX += 100;
    }
    if (blockY - 100 > height && blockX - 100 > width) {
      // cancels timer
      window.clearInterval(drawTimer);
      alert('done');
    }
  }, speed);
}, 1000);