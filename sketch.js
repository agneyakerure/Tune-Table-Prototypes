var mm1button;
var mm2button;
var mm3button;
var mm4button;

var em1button;
var em2button;
var em3button;
var em4button;

var skipbutton;
var reversebutton;
var forwardbutton;

var propertyselect;
var condselect;
var numselect;


// var mm2button;
// var andButton;
// var orButton;
var draggedSprite;
var mm1 = [];
var mm2 = [];
var mm3 = [];
var mm4 = [];

var em1 = [];
var em2 = [];
var em3 = [];
var em4 = [];

var sk1 = [];
var rev1 = [];
var fwd1 = [];
var if1 = [];
// var mm2 = [];
// var and1 = [];
// var or1 = [];

var chorus1slider;
var distort1slider;
var pingpong1slider;

var chorus2slider;
var distort2slider;
var pingpong2slider;

var chorus3slider;
var distort3slider;
var pingpong3slider;

var chorus4slider;
var distort4slider;
var pingpong4slider;

var num = 0;

function setup() 
{
  createCanvas(850, 750);

  chorus1slider = createSlider(0, 1, 0, 0.001);
  chorus1slider.position(185, 420);

  distort1slider = createSlider(0, 1, 0, 0.001);
  distort1slider.position(185, 438);
  
  pingpong1slider = createSlider(0, 1, 0, 0.001);
  pingpong1slider.position(185, 456);



  chorus2slider = createSlider(0, 1, 0, 0.001);
  chorus2slider.position(185, 492.5+7);

  distort2slider = createSlider(0, 1, 0, 0.001);
  distort2slider.position(185, 510.5+7);
  
  pingpong2slider = createSlider(0, 1, 0, 0.001);
  pingpong2slider.position(185, 528.5+7);



  chorus3slider = createSlider(0, 1, 0, 0.001);
  chorus3slider.position(185, 492.5+7+85);

  distort3slider = createSlider(0, 1, 0, 0.001);
  distort3slider.position(185, 510.5+7+85);
  
  pingpong3slider = createSlider(0, 1, 0, 0.001);
  pingpong3slider.position(185, 528.5+7+85);



  chorus4slider = createSlider(0, 1, 0, 0.001);
  chorus4slider.position(185, 492.5+7+85+90);

  distort4slider = createSlider(0, 1, 0, 0.001);
  distort4slider.position(185, 510.5+7+85+90);
  
  pingpong4slider = createSlider(0, 1, 0, 0.001);
  pingpong4slider.position(185, 528.5+7+85+90);
  

  mm1button = createButton('Kick');
  mm1button.position(20, 420);
  mm1button.mousePressed(generateMM1);

  mm2button = createButton('Snare');
  mm2button.position(20, 495);
  mm2button.mousePressed(generateMM2);

  mm3button = createButton('OpenHH');
  mm3button.position(20, 585);
  mm3button.mousePressed(generateMM3);

  mm4button = createButton('ClosedHH');
  mm4button.position(20, 670);
  mm4button.mousePressed(generateMM4);

  em1button = createButton('MAKE!');
  em1button.position(340, 420);
  em1button.mousePressed(generateEM1);

  em2button = createButton('MAKE!');
  em2button.position(340, 495);
  em2button.mousePressed(generateEM2);

  em3button = createButton('MAKE!');
  em3button.position(340, 585);
  em3button.mousePressed(generateEM3);

  em4button = createButton('MAKE!');
  em4button.position(340, 670);
  em4button.mousePressed(generateEM4);


  skipbutton = createButton('Skip!');
  skipbutton.position(430, 420);
  skipbutton.mousePressed(generateSkipBlock);

  reversebutton = createButton('Reverse!');
  reversebutton.position(500, 420);
  reversebutton.mousePressed(generatereverseBlock);

  forwardbutton = createButton('Forward!');
  forwardbutton.position(590, 420);
  forwardbutton.mousePressed(generateforwardBlock);

  ifbutton = createButton('Create!');
  ifbutton.position(455, 530);
  ifbutton.mousePressed(generateIFblock);

  propertyselect = createSelect();
  propertyselect.position(448, 495);
  propertyselect.option('Reverb');
  propertyselect.option('Distort');
  propertyselect.option('pingpong');

  condselect = createSelect();
  condselect.position(540, 495);
  condselect.option('<');
  condselect.option('>');
  condselect.option('==');

  // condselect = createSelect();
  // condselect.position(540, 495);
  // condselect.option('<');
  // condselect.option('>');
  // condselect.option('==');
  // condselect.option('!=');

  numselect = createSelect();
  numselect.position(599, 495);
  numselect.option('0');
  numselect.option('0.2');
  numselect.option('0.4');
  numselect.option('0.6');
  numselect.option('0.8');
  numselect.option('1');

  // andbutton = createButton('SimpleEffectAnd');
  // andbutton.position(10, 30);
  // andbutton.mousePressed(generateSimpleEffectAnd);

  // orbutton = createButton('SimpleEffectOr');
  // orbutton.position(10, 40);
  // orbutton.mousePressed(generateSimpleEffectOr);

  

  line1 = new playLine;
}

function generateMM1()
{
  mm1.push(new musicmaker1(120, 440, "kick.wav"))
}
function generateMM2()
{
  mm2.push(new musicmaker1(120, 495+20, "snare.wav"))
}
function generateMM3()
{
  mm3.push(new musicmaker1(120, 585+20, "closedhh.wav"))
}
function generateMM4()
{
  mm4.push(new musicmaker1(120, 670+20, "openhh.wav"))
}




function generateEM1()
{
  em1.push(new effectmaker(360, 460))
}
function generateEM2()
{
  em2.push(new effectmaker(360, 495+40))
}
function generateEM3()
{
  em3.push(new effectmaker(360, 585+40))
}
function generateEM4()
{
  em4.push(new effectmaker(360, 670+40))
}




function generateSkipBlock()
{
  sk1.push(new skipblock(430+20, 420+40))
}

function generatereverseBlock()
{
  rev1.push(new reverseblock(500+20, 420+40))
}

function generateforwardBlock()
{
  fwd1.push(new forwardblock(590+20, 420+40))
}


function generateIFblock()
{
  if1.push(new playIF(700, 520))
}



function draw() 
{
  background(90);
  line(0,400, 850, 400);
  line(0,415, 850, 415);

  textSize(11);
  text("Play IF", 410, 509);
  

  line(0, 487.5, 850, 487.5);
  line(0, 575, 400, 575);
  line(0, 662.5, 400, 662.5);

  line(90, 400, 90, 750);
  textSize(10);
  text("Sound", 30, 410);

  line(160, 400, 160, 750);
  textSize(10);
  text("Effect", 210, 410);

  line(330, 400, 330, 750);
  line(400, 400, 400, 750);

  // line(90, 400, 90, 750);

  textSize(10);
  text("R", 175, 430);
  textSize(10);
  text("D", 175, 450);
  textSize(10);
  text("PP", 175-4, 470);

  textSize(10);
  text("R", 175, 492.5+20);
  textSize(10);
  text("D", 175, 510.5+20);
  textSize(10);
  text("PP", 175-4, 528.5+20);

  textSize(10);
  text("R", 175, 492.5+20+85);
  textSize(10);
  text("D", 175, 510.5+20+85);
  textSize(10);
  text("PP", 175-4, 528.5+20+85);

  textSize(10);
  text("R", 175, 492.5+20+85+90);
  textSize(10);
  text("D", 175, 510.5+20+85+90);
  textSize(10);
  text("PP", 175-4, 528.5+20+85+90);

//   var radio = createRadio('name');
// radio.option('apple', '1');
// radio.option('pear', '2');

  line1.show();
  line1.move();


  if (draggedSprite != null) 
  {
    draggedSprite.position.x = mouseX;
    draggedSprite.position.y = mouseY;
  }


  for(var i = 0; i<mm1.length; i++)
  {
    if(intersect(mm1[i].asterisk.position.x, line1.x1))
    {
      if(mm1[i].asterisk.position.y<400)
      {
        if(mm1[i].playflag == true)
        {
          mm1[i].sound.start();
        }
        
      }
    }
  }
  for(var i = 0; i<mm2.length; i++)
  {
    if(intersect(mm2[i].asterisk.position.x, line1.x1))
    {
      if(mm2[i].asterisk.position.y<400)
      {
        if(mm2[i].playflag == true)
        {
          mm2[i].sound.start();
        }
      }
    }
  }
  for(var i = 0; i<mm3.length; i++)
  {
    if(intersect(mm3[i].asterisk.position.x, line1.x1))
    {
      if(mm3[i].asterisk.position.y<400)
      {
        if(mm3[i].playflag == true)
        {
          mm3[i].sound.start();
        }
      }
    }
  }
  for(var i = 0; i<mm4.length; i++)
  {
    if(intersect(mm4[i].asterisk.position.x, line1.x1))
    {
      if(mm4[i].asterisk.position.y<400)
      {
        if(mm3[i].playflag == true)
        {
          mm3[i].sound.start();
        }
      }
    }
  }

  for(var i = 0; i<sk1.length; i++)
  {
    if(intersect(sk1[i].asterisk.position.x, line1.x1))
    {
      if(sk1[i].asterisk.position.y<400)
      {
        line1.skip();
      }
    }
  }
  for(var i = 0; i<rev1.length; i++)
  {
    if(intersect(rev1[i].asterisk.position.x, line1.x1))
    {
      if(rev1[i].asterisk.position.y<400)
      {
        line1.flag = 0;
      }
    }
  }
  for(var i = 0; i<fwd1.length; i++)
  {
    if(intersect(fwd1[i].asterisk.position.x, line1.x1))
    {
      if(fwd1[i].asterisk.position.y<400)
      {
        line1.flag = 1;
      }
    }
  }


  for(var i = 0, k = 0; i<mm1.length, k<em1.length; i++, k++)
  {
	    {
	      if(mm1[i].asterisk.overlap(em1[k].asterisk))
	      {
	          mm1[i].freeverb.wet.value = chorus1slider.value();
            mm1[i].distort.wet.value = distort1slider.value();
            mm1[i].pingPong.wet.value = pingpong1slider.value();
          }
	      else
	      {
	        mm1[i].freeverb.wet.value = 0;
	        mm1[i].distort.wet.value = 0;
          mm1[i].pingPong.wet.value = 0;
	      }
	    }
  }


  for(var i = 0, k = 0; i<mm2.length, k<em2.length; i++, k++)
  {
      {
        if(mm2[i].asterisk.overlap(em2[k].asterisk))
        {
            mm2[i].freeverb.wet.value = chorus2slider.value();
            mm2[i].distort.wet.value = distort2slider.value();
            mm2[i].pingPong.wet.value = pingpong2slider.value();
          }
        else
        {
          mm2[i].freeverb.wet.value = 0;
          mm2[i].distort.wet.value = 0;
          mm2[i].pingPong.wet.value = 0;
        }
      }
  }


    for(var i = 0, k = 0; i<mm3.length, k<em3.length; i++, k++)
  {
      {
        if(mm3[i].asterisk.overlap(em3[k].asterisk))
        {
            mm3[i].freeverb.wet.value = chorus3slider.value();
            mm3[i].distort.wet.value = distort3slider.value();
            mm3[i].pingPong.wet.value = pingpong3slider.value();
          }
        else
        {
          mm3[i].freeverb.wet.value = 0;
          mm3[i].distort.wet.value = 0;
          mm3[i].pingPong.wet.value = 0;
        }
      }
  }


    for(var i = 0, k = 0; i<mm4.length, k<em4.length; i++, k++)
  {
      {
        if(mm4[i].asterisk.overlap(em4[k].asterisk))
        {
            mm4[i].freeverb.wet.value = chorus4slider.value();
            mm4[i].distort.wet.value = distort4slider.value();
            mm4[i].pingPong.wet.value = pingpong4slider.value();
          }
        else
        {
          mm4[i].freeverb.wet.value = 0;
          mm4[i].distort.wet.value = 0;
          mm4[i].pingPong.wet.value = 0;
        }
      }
  }



  for(var i = 0, k = 0; i<mm1.length, k<if1.length; i++, k++)
  {
         if(mm1[i].asterisk.overlap(if1[k].asterisk))
           {
            if(if1[k].cond == '==')
               {
                   if(if1[k].prop == 'Reverb')
                   {
                    if(mm1[i].freeverb.wet.value == if1[k].numselect)
                    {
                      mm1[i].playflag = true;
                    }
                    else
                    {
                      mm1[i].playflag = false;
                    }
                   }
                  else if(if1[k].prop == 'Distort')
                  {
                    if(mm1[i].distort.wet.value == if1[k].numselect)
                    {
                      mm1[i].playflag = true;
                    }
                    else
                    {
                      mm1[i].playflag = false;
                    }
                  }
                  else if(if1[k].prop == 'pingpong')
                  {
                    if(mm1[i].pingPong.wet.value == if1[k].numselect)
                    {
                      mm1[i].playflag = true;
                    }
                    else
                    {
                      mm1[i].playflag = false;
                    }
                }
              }

              else if(if1[k].cond == '<')
               {
                   if(if1[k].prop == 'Reverb')
                   {
                    if(mm1[i].freeverb.wet.value < if1[k].numselect)
                    {
                      mm1[i].playflag = true;
                    }
                    else
                    {
                      mm1[i].playflag = false;
                    }
                   }
                  else if(if1[k].prop == 'Distort')
                  {
                    if(mm1[i].distort.wet.value < if1[k].numselect)
                    {
                      mm1[i].playflag = true;
                    }
                    else
                    {
                      mm1[i].playflag = false;
                    }
                  }
                  else if(if1[k].prop == 'pingpong')
                  {
                    if(mm1[i].pingPong.wet.value < if1[k].numselect)
                    {
                      mm1[i].playflag = true;
                    }
                    else
                    {
                      mm1[i].playflag = false;
                    }
                }
              }

              else if(if1[k].cond == '>')
               {
                   if(if1[k].prop == 'Reverb')
                   {
                    if(mm1[i].freeverb.wet.value > if1[k].numselect)
                    {
                      mm1[i].playflag = true;
                    }
                    else
                    {
                      mm1[i].playflag = false;
                    }
                   }
                  else if(if1[k].prop == 'Distort')
                  {
                    if(mm1[i].distort.wet.value > if1[k].numselect)
                    {
                      mm1[i].playflag = true;
                    }
                    else
                    {
                      mm1[i].playflag = false;
                    }
                  }
                  else if(if1[k].prop == 'pingpong')
                  {
                    if(mm1[i].pingPong.wet.value > if1[k].numselect)
                    {
                      mm1[i].playflag = true;
                    }
                    else
                    {
                      mm1[i].playflag = false;
                    }
                }
              }
            }
else
{
  mm1[i].playflag = true;
}
}



  drawSprites();
}




function intersect( a, b)
{
  if(a==b)
  {
    return true;
  }
}

function playLine()
{
  this.x1 = 0;
  this.x2 = 0;
  this.y1 = 0;
  this.y2 = 400;
  this.flag = 1;
  
  this.show = function()
  {
    line(this.x1,this.y1,this.x2,this.y2);
  }

  this.move = function()
  {
    if(this.flag == 1)
    {
      this.x1=this.x1+1;
      this.x2=this.x2+1;
      if(this.x1>850)
      {
        this.x1=0;
        this.x2=0;
      }
    }
    else
    {
      this.revflag = true;
      this.x1=this.x1-1;
      this.x2=this.x2-1;
      if(this.x1<0)
      {
        this.x1=850;
        this.x2=850;
      }
    }
  }
    

  this.skip = function()
  {
    if(this.flag == 1)
    {
      this.x1  = this.x1+100;
      this.x2  = this.x2+100;
    }
    else
    {
      this.x1  = this.x1-100;
      this.x2  = this.x2-100;
    }
    
  }

  // this.reverse = function()
  // {
  //   this.revflag = true;
  //   this.x1=this.x1-1;
  //   this.x2=this.x2-1;
  //   if(this.x1<0)
  //   {
  //     this.x1=850;
  //     this.x2=850;
  //   }
  // }
}

function musicmaker1(x,y,path)
{

  this.asterisk = createSprite(x,y, 30, 30);
  this.asterisk.shapeColor = color(30,20,90, 100);
  this.playflag = true;
  this.distort = new Tone.Distortion().toMaster();
  this.freeverb = new Tone.Freeverb().toMaster();
  this.pingPong = new Tone.PingPongDelay("4n", 0.2).toMaster();
  this.freeverb.wet.value = 0;
  this.distort.wet.value = 0;
  this.pingPong.wet.value = 0;

  this.sound = new Tone.Player(path).connect(this.freeverb).connect(this.distort).connect(this.pingPong);

	this.asterisk.onMousePressed = function() 
  {
    if (draggedSprite == null) 
    {
      draggedSprite = this;
    }
  }

  this.asterisk.onMouseReleased = function() 
  {
    if (draggedSprite == this) 
    {
      draggedSprite = null;

    }
  }
}

function effectmaker(x,y)
{

  this.asterisk = createSprite(x,y, 30, 30);
  this.asterisk.shapeColor = color(90,10,200, 100);

  this.asterisk.onMousePressed = function() 
  {
    if (draggedSprite == null) 
    {
      draggedSprite = this;
    }
  }

  this.asterisk.onMouseReleased = function() 
  {
    if (draggedSprite == this) 
    {
      draggedSprite = null;

    }
  }
}

function skipblock(x,y)
{
  this.asterisk = createSprite(x,y, 30, 30);
  this.asterisk.shapeColor = color(140,100,20, 100);

  this.asterisk.onMousePressed = function() 
  {
    if (draggedSprite == null) 
    {
      draggedSprite = this;
    }
  }

  this.asterisk.onMouseReleased = function() 
  {
    if (draggedSprite == this) 
    {
      draggedSprite = null;

    }
  }

}


function reverseblock(x,y)
{
  this.asterisk = createSprite(x,y, 30, 30);
  this.asterisk.shapeColor = color(2,100,20);

  this.asterisk.onMousePressed = function() 
  {
    if (draggedSprite == null) 
    {
      draggedSprite = this;
    }
  }

  this.asterisk.onMouseReleased = function() 
  {
    if (draggedSprite == this) 
    {
      draggedSprite = null;

    }
  }

}


function forwardblock(x,y)
{
  this.asterisk = createSprite(x,y, 30, 30);
  this.asterisk.shapeColor = color(70,100,2);

  this.asterisk.onMousePressed = function() 
  {
    if (draggedSprite == null) 
    {
      draggedSprite = this;
    }
  }

  this.asterisk.onMouseReleased = function() 
  {
    if (draggedSprite == this) 
    {
      draggedSprite = null;

    }
  }

}

function playIF(x,y)
{

  this.asterisk = createSprite(x,y, 20, 20);
  this.asterisk.shapeColor = color(255, 255, 0, 70);
  this.prop = propertyselect.value();
  this.num = numselect.value();
  this.cond = condselect.value();

  this.asterisk.onMousePressed = function() 
  {
    if (draggedSprite == null) 
    {
      draggedSprite = this;
    }
  }

  this.asterisk.onMouseReleased = function() 
  {
    if (draggedSprite == this) 
    {
      draggedSprite = null;

    }
  }
}

// function SimpleEffectOr(x,y)
// {

//   this.asterisk = createSprite(x,y, 30, 30);
//   this.asterisk.shapeColor = color(10,180,10, 50);

//   this.andFlag = false;

//   this.asterisk.onMousePressed = function() 
//   {
//     if (draggedSprite == null) 
//     {
//       draggedSprite = this;
//     }
//   }

//   this.asterisk.onMouseReleased = function() 
//   {
//     if (draggedSprite == this) 
//     {
//       draggedSprite = null;

//     }
//   }
// }


