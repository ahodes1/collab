var img, img2, img5;
var song2, button1, button2, button3, button4; 
var playingtwo = false;
var vid1, vid2, vid3, vid4, vid8;
var playingvid1 = false;
var playingvid4 = false;
var playingvid5 = true;
var playingvid6 = true;
var playingsound = false;
var playinground = false;
var flag = 1;
//var myDiv;
var expeributton;
var stateflag = false;
//var marginpop;
var border1;
var border2;
var border3;
var border4;
var w;
var h;
var canvas;
var screenshot;
var extra;
var topH;
var fs;

function preload() {

  soundFormats('wav', 'mp3');
  songround = loadSound('assets/Round.mp3');
  song2 = loadSound('assets/MargotBanWalk.mp3');
  img2 = loadImage('assets/2AmandaMap.png');
  img = loadImage('assets/2MapTwine.jpeg');
  img5 = loadImage('assets/2CanaryMap.png');
  
  vid4 = createVideo(['assets/3SeashellScaled.mp4']);
  vid4.hide();
  
  vid3 = createVideo(['assets/3MargotWalkScaled.mp4']);
  vid3.hide();
  
  vid1 = createVideo(['assets/3ZoeVideoScaled.mp4']);
  vid1.hide();
  
  vid2 = createVideo(['assets/3MadWalkScaled.mp4']);
  vid2.hide();

  
  vid8 = createVideo(['assets/2ScreenCodeVid.mp4']);
  vid8.hide();

  
  
}

function setup() {
  w = window.innerWidth;
  h = window.innerHeight;
  
  if (w > 1350 && h > 770) {
    canvas = createCanvas(w, h);
  } else {
    canvas = createCanvas(displayWidth, displayHeight);
  }
    //ORIGINALLY 1620, 861 //1400, 628
  background(0, 0, 0);        //do we want a white background?
  
  
  imageMode(CORNER);
  tint(255, 200);
  image(img2, 690, 0);
  tint(255, 200);
  image(img, 5, 393, 679, 379);
  noTint();
  
  vid1.loop();
  vid1.show();
  vid1.position(0, 0);
  vid1.size(690, 384);

  vid3.loop();
  vid3.show();
  vid3.position(640, 388);
  vid3.size(790, 384);
  
  var col = color(20, 20, 20, 200);
  var textcol = color(250, 250, 250);
  button1 = createButton('via');
  button1.style('background-color', col);
  button1.style('color:white');
  button1.style('font-size', '11px');
  button1.style('font-family', 'Georgia, sans-serif');
  button1.size(60,20);
  button1.position(5, 365);
  button1.mousePressed(toggleVideo1);
  button1.mousePressed(toggleRound);
  
  button2 = createButton('entre');
  button2.style('background-color', col);
  button2.style('color:white');
  button2.style('font-size', '11px');
  button2.style('font-family', 'Georgia, sans-serif');
  button2.size(60,20);
  button2.position(694, 365);
  button2.mousePressed(toggleSound2);
  button2.mousePressed(toggleVideo5);
  
  button3 = createButton('through');
  button3.style('background-color', col);
  button3.style('color:white'); 
  button3.style('font-size', '11px');
  button3.style('font-family', 'Georgia, sans-serif');
  button3.size(60,20);
  button3.position(5, 752);
  button3.mousePressed(toggleVideo6);
  
  button4 = createButton('between');
  button4.style('background-color', col);
  button4.style('color:white');
  button4.style('font-size', '11px');
  button4.style('font-family', 'Georgia, sans-serif');
  button4.size(60,20);
  button4.position(694, 752);
  button4.mousePressed(toggleVideo4);
  
  noFill();
  //noStroke();
  //marginpop = createDiv('');
 // marginpop.position(1100, 0);
  //marginpop.style('width', '300px');
  //marginpop.style('height', '900px');
  //marginpop.style('background-color', 'white');
  //marginpop.mouseOver(artiststate);
  //marginpop.mouseOut(noartiststate);
  //graphics = createGraphics(0, 0, displayWidth, displayHeight);
  textSize(30);
  fill(250, 250, 250);
  border1 = createDiv('');
  border1.style('width', '680px');
  border1.style('height', '380px');
  border1.position(-10, -370);
  border1.style('border', '8px solid black');
  border1.parent(button1);
  
  border2 = createDiv('');
  border2.style('width', '680px');
  border2.style('height', '375px');
  border2.position(-10, -365);
  border2.style('border', '8px solid black');
  border2.parent(button3);
  
  border3 = createDiv('');
  border3.style('width', '685px');
  border3.style('height', '380px');
  border3.position(-10, -370);
  border3.style('border', '8px solid black');
  border3.parent(button2);
  
  border4 = createDiv('');
  border4.style('width', '685px');
  border4.style('height', '375px');
  border4.position(-10, -365);
  border4.style('border', '8px solid black');
  border4.parent(button4);
  
  //inout = '>>'
  
  expeributton = createButton('>>');
  expeributton.style('background-color', col);
  expeributton.style('color:white');
  expeributton.style('font-size', '20px');
  expeributton.style('font-family', 'Georgia, sans-serif');
  expeributton.size(60,160);
  expeributton.position(5, 45); //without the topH header, it was (5,5);
  if (stateflag === false) {
    expeributton.mousePressed(artiststate);
  } 
  
  
  
  //SIDE ARTIST STATEMENT FROM ORIGINAL
  //textStyle(ITALIC);
  //textSize(20);
  //text('Spinning Walks', 1465, 50);
  //textStyle(NORMAL);
  //textSize(15);
  //text('Created collaboratively by', 1430, 80);
  //text('Madeleine Campbell', 1465, 110);
  //text('Margot Machado', 1490, 130);
  //text('Zoë Quick', 1533, 150);
  //text('and Amanda Hodes', 1470, 170);
  //noFill();
  topH = createImg('assets/headernoclose2.png');
  topH.style('width', '1385px');
  topH.position(-4,0);
}

function artiststate() {
  if (stateflag === false) {
    expeributton.html('<<');
    extra = createImg('assets/chatspin.png') //1130, 5, 250, 800);
    extra.position(925, 30);  //without the header, it was (920, 5)
    extra.style('width', '455px');
    extra.mousePressed(artiststate);
    
    
    //extra.tint()
    //myDiv.parent(extra)
    //myDiv = createP('Spinning Walks<br/><br/><br/>< THROUGH > @57.2503576, -6.2516006, 398m-@40.8062679, -75.6021669, 1264m- @52.4189819, -3.7213852, 33165m- @28.1848642, -16.8090115, 3049m < /THROUGH > <br/><br/><br/>< ENTRE > feminine-body-[of-land]-as-exquisite-corpse-corps-cadavre-exquis?-[violence-of-linearity-&&-polyvocal-multiplicity-liminality-latency-cycles-site-specificity] < /ENTRE > <br/><br/><br/>< BETWEEN > foot-prints-walking-hem-lines-in-canon-[rhythms-of-multiple-pacings-mapping-the-translocal]-singing-translations-spinning-&&-circles-overflow-digital-squares < /BETWEEN > <br/><br/><br/>< VIA > four-prepositions-side-stepping-lines-that-never-meet-[clicking-&&-collaborating]-sound-unravelling-strings-[audience-enters-contrapuntal-tempos] < /VIA ><br/>');
        //myDiv.style('font-family,' 'American Typewriter, serif');
    //myDiv.style('padding', '12pt');
    //myDiv.style('font-size', '17px');
    //myDiv.style('width', '250px');
    //myDiv.style('word-wrap', 'break-word');
    //myDiv.style('background-color', 'white');
    //myDiv.style('opacity', '0.7');
    //myDiv.position(1130, -18); // 1130, -18
    stateflag = true;
    //myDiv.mousePressed(artiststate);
  } else {
    //myDiv.remove();
    expeributton.html('>>');
    extra.remove();
    stateflag = false;
  }
}

function noartiststate() {
  if (stateflag === true) {
    //myDiv.remove();
    expeributton.html('<<');
    stateflag = false;
  }
}
  

function toggleSound2() {
  if (playingtwo) {
    playingtwo = true;

    
  } else {
   
    song2.play(0, 0, 0.01);
    song2.amp(0.1, 1.5);
    
  }
  playingtwo = true;
}  

function draw() {
  frameRate(10);
  if (playingtwo === true) {
    if (!song2.isPlaying()) {
      song2.play();
      song2.amp(0.1, 1.5);
      
    }
  }
  if (playinground === true) {
''
    if (!songround.isPlaying()) {
      songround.play();
      songround.amp(0.2, 1.5);
    }
  }
}

function toggleVideo1() {
  
  if (playingvid1) { 
    
    vid2.hide();
    vid2.pause();
    vid1.loop();
    vid1.show();
    vid1.position(0, 0);
    vid1.size(690, 384);
    
  } else {
    vid1.hide();
    vid1.pause();
    vid2.loop();
    vid2.show();
    vid2.position(0,0);
    vid2.size(690, 384);
    
    
  }
  
playingvid1 = !playingvid1; 

}

function toggleVideo4() {
  
  if (playingvid4) {
    vid4.hide();
    vid4.pause();
    vid3.loop();
    vid3.show();
    vid3.position(640, 388);
    vid3.size(790, 384);

    
  }
  else {
    vid3.hide();
    vid3.pause();
    vid4.loop();
    vid4.show();
    vid4.position(640, 388);
    vid4.size(790, 384);

  }
  
  playingvid4 = !playingvid4;
  
}

function toggleVideo5() {
  
  if (playingvid5) {
    fill(0, 0, 0);
    rect(690, 0, 690, 384);
    tint(255, 200);
    image(img5, 690, 3);
    noTint();

  } 
  else {
    fill(0, 0, 0);
    rect(690, 0, 690, 384);
    
    tint(255, 200);
    imageMode(CORNER);
    image(img2, 690, 0);
    
  }
  playingvid5 = !playingvid5;
}

function toggleVideo6() {
  if (playingvid6) {
    
    
    vid8.loop();
    vid8.show();
    vid8.position(-138, 390);
    vid8.size(967, 384);
    
  }
  else {
    vid8.hide();
    vid8.pause();
  }
  playingvid6 = !playingvid6;
}

function toggleRound() {
  if (playinground) {
    playinground = true;
  } else {
    songround.play(0, 0, 0.01);
    songround.amp(0.2, 1.5);
    
    playinground = true;
  }
}
window.onresize = function() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  if (w > 1350 && h > 770) {
    canvas.resize(w,h);
  } else {
    canvas.resize(displayWidth, displayHeight);
  }
  background(0, 0, 0); 
  tint(255, 200);
  image(img2, 690, 0);
  tint(255, 200);
  image(img, 5, 393, 679, 379);
  
}
function mousePressed() {
  if (flag === 1) {
    if (mouseX > 0 && mouseX < 2000 && mouseY > 0 && mouseY < 2000) {
     fs = fullscreen();
      fullscreen(!fs);
      flag = 2;
    }
  }
}