var Time = 0;

var Level = {
  i1: 10,
  i2: 20,
  i3: 30,
  i4: 40,
  i5: 50,
  i6: 60,
  i7: 70,
  i8: 80,
  i9: 90,
  i10: 100,
  i11: 110,
  i12: 120,
  i13: 130,
  i14: 140,
  i15: 150,
  i16: 160,
  i17: 170,
  i18: 180,
  i19: 190
  
}

var Score = {
  point: 0,
  lvl: 1000
}

var border = {
  topline: 50,
  botline: 350,
}

var killer = {
  x: 20,
  y: 200,
  movingspeed: 5,
}

var bullets = {
  x: killer.x,
  y: killer.y,
  speed: 5,
  fire: 0
}

var bubbles = {
  x: 0,
  y: 0,
  size: 20
}


function preload() {
  soundFormats('mp3', 'wav', 'ogg');
  mySound1 = loadSound('Gunshot.ogg');
  mySound2 = loadSound('Gameover.wav');
  mySound3 = loadSound('Boom.wav');
}

function setup() {
  createCanvas(600, 400);
  bubbles.x = random(590, 600);
  bubbles.y = random(60, 340);
  mySound1.setVolume(0.5);
  mySound2.setVolume(0.5);
  mySound3.setVolume(0.5);
  
}

function draw() {
  background(153, 80, 84);

  //Draw the Border
  line(0, border.topline, width, border.topline);
  line(0, border.botline, width, border.botline);

  //Other information
  textSize(16);
  text("Player Score: " + Score.point, 50, 30);
  text("Timer: " + Time + " (Do not pass " + Score.lvl + ")", 50, 380);
  Time++

  //Draw the Killer  
  rectMode(CENTER);
  rect(killer.x, killer.y, 20, 10);
  rect(killer.x + 2, killer.y + 9, 8, 8);
  rect(killer.x + 2, killer.y - 9, 8, 8);

  //Player input
  if (keyIsDown(UP_ARROW)) {
    killer.y -= killer.movingspeed;
  }

  if (keyIsDown(DOWN_ARROW)) {
    killer.y += killer.movingspeed;
  }

  if (killer.y < border.topline + 13) {
    killer.y = border.topline + 13;
  }
  if (killer.y > border.botline - 13) {
    killer.y = border.botline - 13;
  }

  //Draw the Bullets
  if (keyIsDown(32)) {
    mySound1.play();
    bullets.fire = 1
    bullets.x = killer.x
    bullets.y = killer.y
  }

  if (bullets.fire == 1) {
    rect(bullets.x, bullets.y, 5, 1);
    bullets.x = bullets.x + bullets.speed
  }

  //Draw the Bubble
  ellipse(bubbles.x, bubbles.y, bubbles.size);

  //Coming closer
  if (Time > Score.lvl) {
    Time = 0;
    bubbles.x = bubbles.x - 50
  }

  //Next level
  if (dist(bullets.x, bullets.y, bubbles.x, bubbles.y) < 10) {
    mySound3.play();
    bubbles.x = random(590, 600);
    bubbles.y = random(50, 350);
    Time = 0;
    Score.point++;

    if (Score.point == Level.i1) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i2) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i3) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i4) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i5) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i6) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i7) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i8) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i9) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i10) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i11) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i12) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i13) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i14) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i15) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i16) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i17) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i18) {
      Score.lvl = Score.lvl - 50
    }
    if (Score.point == Level.i19) {
      Score.lvl = Score.lvl - 50
    }
  }

	if (Score.point == 200) {
    text("You win!", 265, 200)
    noLoop()
  }
  
  if (bubbles.x < 0) {
    mySound2.play();
    text("Game Over!", 265, 200)
    noLoop()
  }
}
