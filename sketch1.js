var mm1 = [];
var em1 = [];

var skipbutton;
var reversebutton;
var forwardbutton;

var sk1 = [];
var rev1 = [];
var fwd1 = [];
var if1 = [];
var var1 = [];	

var j = 0;
var k;
var path1;

//var asses;

var liney = [];

var sb1, sb2, sv3, sb4, sb5, sb6, sb7;

var draggedSprite;

var value = 0;

var chorus1slider;
var distort1slider;
var pingpong1slider;

var propertyselect;
var condselect;
var numselect;

var em1button;
var note;

var vol = new Tone.Volume(1);
var chillkick = new Tone.Player("kick.wav").toMaster();
var chillhat = new Tone.Player("closedhh.wav").toMaster();
var chillsnare = new Tone.Player("snare.wav").toMaster();
var chillopenhh = new Tone.Player("openhh.wav").toMaster();
var chillyeah = new Tone.Player("yeah1.wav").toMaster();
var chillnem1 = new Tone.Player("nem2.wav").toMaster();
var chillsticks = new Tone.Player("sticks.wav").toMaster();

var autoFilter = new Tone.AutoFilter(0.2).toMaster().start();

var synth = new Tone.PolySynth(6, Tone.Synth).chain(vol, Tone.Master).connect(autoFilter);
synth.set("detune", 100);


//SETUP
function setup() 
{
	createCanvas(displayWidth, displayHeight);	
	print(displayWidth);


	// for(var i = 1; i<8; i++)
	// {
	// 	tp[i] = new statbutton(1440*1*i/28+90, 900*7/13 + 30, "kick.wav");
	// }
	sb1 = new statbutton1(1440*1*1/28+90, 900*7/13 + 30);
	sb2 = new statbutton2(1440*1*2/28+90, 900*7/13 + 30);
	sb3 = new statbutton3(1440*1*3/28+90, 900*7/13 + 30);
	sb4 = new statbutton4(1440*1*4/28+90, 900*7/13 + 30);
	sb5 = new statbutton5(1440*1*5/28+90, 900*7/13 + 30);
	sb6 = new statbutton6(1440*1*6/28+90, 900*7/13 + 30);
	sb7 = new statbutton7(1440*1*7/28+90, 900*7/13 + 30);
	

	chorus1slider = createSlider(0, 1, 0, 0.001);
	chorus1slider.position(185, 650);

	distort1slider = createSlider(0, 1, 0, 0.001);
	distort1slider.position(185, 670);

	pingpong1slider = createSlider(0, 1, 0, 0.001);
	pingpong1slider.position(185, 690);

	em1button = createButton(' EFFECT MAKER!');
	em1button.position(340, 650);
	em1button.mousePressed(generateEM1);

	liney[0] = new playLine;

	skipbutton = createButton('Skip!');
	skipbutton.position(448+120, 495+10+90+50);
	skipbutton.mousePressed(generateSkipBlock);

	reversebutton = createButton('Reverse!');
	reversebutton.position(448+120+50+5, 495+10+90+50);
	reversebutton.mousePressed(generatereverseBlock);

	forwardbutton = createButton('Forward!');
	forwardbutton.position(448+120+100+30, 495+10+90+50);
	forwardbutton.mousePressed(generateforwardBlock);

	ifbutton = createButton('Create IF!');
	ifbutton.position(455+340, 515-10);
	ifbutton.mousePressed(generateIFblock);

	varbutton = createButton('Variable');
	varbutton.position(155, 550);
	varbutton.mousePressed(generateVarBlock);


	propertyselect = createSelect();
	propertyselect.position(448+120, 495+10);
	propertyselect.option('Reverb');
	propertyselect.option('Distort');
	propertyselect.option('pingpong');

	condselect = createSelect();
	condselect.position(540+120, 495+10);
	condselect.option('<');
	condselect.option('>');
	condselect.option('==');

	numselect = createSelect();
	numselect.position(599+120, 495+10);
	numselect.option('0');
	numselect.option('0.2');
	numselect.option('0.4');
	numselect.option('0.6');
	numselect.option('0.8');
	numselect.option('1');

	soundselect = createSelect();
	soundselect.position(55, 550);
	soundselect.option('Kick');
	soundselect.option('Closed HH');
	soundselect.option('Snare');
	soundselect.option('Open HH');
	soundselect.option('Yeah');
	soundselect.option('Tabla');
	soundselect.option('Sticks');


}


//DRAW
function draw() 
{

	background('#bfd8d2');

	textSize(10);
	text("Chorus", 140, 663);
	text("Distort", 140, 683);
	text("PingPong", 140, 703);
	text("Z", displayWidth*1*1/28+90 - 5, displayHeight*7/13 + 30);
	text("X", displayWidth*1*2/28+90 - 5, displayHeight*7/13 + 30);
	text("C", displayWidth*1*3/28+90 - 5, displayHeight*7/13 + 30);
	text("V", displayWidth*1*4/28+90 - 5, displayHeight*7/13 + 30);
	text("B", displayWidth*1*5/28+90 - 5, displayHeight*7/13 + 30);
	text("N", displayWidth*1*6/28+90 - 5, displayHeight*7/13 + 30);
	text("M", displayWidth*1*7/28+90 - 5, displayHeight*7/13 + 30);

	rect(455+340+200, 515-10, 340, 280);
	if(mouseX>455+340+200 && mouseY> 515-10 && mouseX<455+340+200+340 && mouseY<515-10+280)
	{
		j = map(mouseX, 455+340+200, 455+340+200+340, 0, 32);
		k = map(mouseY, 515-10, 515-10+280, 100, 0);
		print(j + " and " + k);
		autoFilter.frequency.value = j;
		synth.detune.value = k;

	}

	line(0, displayHeight*7/13, displayWidth, displayHeight*7/13);
	line(displayWidth*1/4, 0, displayWidth*1/4, displayHeight*7/13);
	line(displayWidth*2/4, 0, displayWidth*2/4, displayHeight*7/13);	
	line(displayWidth*3/4, 0, displayWidth*3/4, displayHeight*7/13);
	if(liney[0].x1 ==   displayWidth*1/4 + 5 || liney[0].x1 == displayWidth*2/4 + 5|| liney[0].x1 == displayWidth*3/4 + 5 || liney[0].x1 == 5)
	{
		chillhat.start();
	}

	//SETTING DRAGGEDSPRITE for DRAG FUNCTION - IMPORTANT 
	if (draggedSprite != null)
	{
		draggedSprite.position.x = ceil(mouseX/5)*5;
		draggedSprite.position.y = ceil(mouseY/5)*5;
	}

	//PLAY IF LINE AND OBJECT INTERSECT
	for(var i = 0; i<mm1.length; i++)
	{
		if(mm1[i].asterisk.position.x+5 == liney[0].x1 && mm1[i].asterisk.position.y < (900*7/13))
		{
			mm1[i].playflag == true;
			for(var k = 0; k < em1.length; k++)
			{
				if(mm1[i].asterisk.overlap(em1[k].asterisk)) 
				{
					mm1[i].freeverb.wet.value = em1[k].chorus;
					mm1[i].distort.wet.value = em1[k].distort;
					mm1[i].pingPong.wet.value = em1[k].pingpong;
				}
				else
				{
					mm1[i].freeverb.wet.value = 0;
					mm1[i].distort.wet.value = 0;
					mm1[i].pingPong.wet.value = 0;
				}
			}
			mm1[i].checkflagandplay();
		}
		else
		{
			mm1[i].playflag == false;
		}

		
  	// else
  	// {
  	// 	mm1[i].playflag = false;
  	// }
  	//mm1[i].playfunct();
  }
  for(var i = 0; i<var1.length; i++)
  {
  	if(var1[i].asterisk.position.x+5 == liney[0].x1 && var1[i].asterisk.position.y < (900*7/13))
		{
			//print("here");
			//print(var1[i].path);
			var1[i].sound.start();
		}
	}



  for(var i = 0; i<mm1.length; i++)
  {
  	for(var k = 0; k < if1.length; k++)
  	{
  		if(mm1[i].asterisk.overlap(if1[k].asterisk))
  			if(mm1[i].asterisk.overlap(em1[i].asterisk))
  		{
  			if(if1[k].cond == '==')
  			{
  				//print('==');
  				if(if1[k].prop == 'Reverb')
  				{
  					if(mm1[i].freeverb.wet.value == if1[k].num)
  					{
  						mm1[i].playflag = true;
					//print(mm1[i].playflag);
					}
					else
					{
						mm1[i].playflag = false;
					//print(mm1[i].playflag);
					}
				}
				else if(if1[k].prop == 'Distort')
				{
					print('distort == ');
					if(mm1[i].distort.wet.value == if1[k].num)
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
					print('pingpong ==');
					if(mm1[i].pingPong.wet.value == if1[k].num)
					{
						mm1[i].playflag = true;
					}
					else
					{
						mm1[i].playflag = false;
					}
				}
			}

			if(if1[k].cond == '>')
  			{
  				//print('==');
  				if(if1[k].prop == 'Reverb')
  				{
  					if(mm1[i].freeverb.wet.value > if1[k].num)
  					{
  						mm1[i].playflag = true;
					//print(mm1[i].playflag);
					}
					else
					{
						mm1[i].playflag = false;
					//print(mm1[i].playflag);
					}
				}
				else if(if1[k].prop == 'Distort')
				{
					//print('distort == ');
					if(mm1[i].distort.wet.value > if1[k].num)
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
					//print('pingpong ==');
					if(mm1[i].pingPong.wet.value > if1[k].num)
					{
						mm1[i].playflag = true;
					}
					else
					{
						mm1[i].playflag = false;
					}
				}
			}

			if(if1[k].cond == '<')
  			{
  				//print('==');
  				if(if1[k].prop == 'Reverb')
  				{
  					if(mm1[i].freeverb.wet.value < if1[k].num)
  					{
  						mm1[i].playflag = true;
					//print(mm1[i].playflag);
					}
					else
					{
						mm1[i].playflag = false;
					//print(mm1[i].playflag);
					}
				}
				else if(if1[k].prop == 'Distort')
				{
					//print('distort == ');
					if(mm1[i].distort.wet.value < if1[k].num)
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
					//print('pingpong ==');
					if(mm1[i].pingPong.wet.value < if1[k].num)
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



		else//KEEP THIS PLEASE!!!
		{
			mm1[i].playflag = true;
		}
	}

}


for(var i = 0; i<sk1.length; i++)
{
	if(sk1[i].asterisk.position.x+5 == liney[0].x1)
	{
		//print("yessssssss");
		if(sk1[i].asterisk.position.y<displayHeight*7/13)
		{
			liney[0].skip();
		}
	}
}
for(var i = 0; i<rev1.length; i++)
{
	if(rev1[i].asterisk.position.x+5 == liney[0].x1)
	{
		if(rev1[i].asterisk.position.y<displayHeight*7/13)
		{
			liney[0].flag = 0;
		}
	}
}
for(var i = 0; i<fwd1.length; i++)
{
	if(fwd1[i].asterisk.position.x+5 == liney[0].x1)
	{
		if(fwd1[i].asterisk.position.y<displayHeight*7/13)
		{
			liney[0].flag = 1;
		}
	}
}




	 //EFFECT MAKER OVERLAP EFFECT
	 // for(var k = 0; k<em1.length; k++)
	 // {
	 // 	for(var i = 0; i < mm1.length; i++)
	 // 	{
	 // 		if(mm1[i].asterisk.overlap(em1[k].asterisk))
	 // 		{
	 // 			print("effect"+i);
	 // 			mm1[i].freeverb.wet.value = em1[k].chorus;
	 // 			mm1[i].distort.wet.value = em1[k].distort;
	 // 			mm1[i].pingPong.wet.value = em1[k].pingpong;
	 // 		}
	 // 		else
	 // 		{
	 // 			print("no effect"+i);
	 // 			mm1[i].freeverb.wet.value = 0;
	 // 			mm1[i].distort.wet.value = 0;
	 // 			mm1[i].pingPong.wet.value = 0;
	 // 		}
	 // 	}
	 // }


	 liney[0].show();
	 liney[0].move();




	 if(soundselect.value() == 'Kick')
	{
		path1 = "kick.wav";
		//print("working");
	}
		if(soundselect.value() == 'Closed HH')
	{
		path1 = "closedhh.wav";
	}
		if(soundselect.value() == 'Snare')
	{
		path1 = "snare.wav";
	}
		if(soundselect.value() == 'Open HH')
	{
		path1 = "openhh.wav";
	}
		if(soundselect.value() == 'Yeah')
	{
		path1 = "yeah1.wav";
	}
		if(soundselect.value() == 'Tabla')
	{
		path1 = "tabla.wav";
	}
		if(soundselect.value() == 'Sticks')
	{
		path1 = "nem2.wav";
	}

	drawSprites();								//IMPORTANT!
}

function keyTyped() 
{
	if(key == 'z')
	{
		mm1.push(new musicMaker1(liney[0].x1, 50, "kick.wav"));
		//chillkick.start();
	}
	if(key == 'x')
	{
		mm1.push(new musicMaker1(liney[0].x1, 100, "closedhh.wav"));
		//chillhat.start();
	}
	if(key == 'c')
	{
		mm1.push(new musicMaker1(liney[0].x1, 150, "snare.wav"));
		//chillsnare.start();
		//print(keyCode);
	}
		if(key == 'v')
	{
		mm1.push(new musicMaker1(liney[0].x1, 200, "openhh.wav"));
		//chillkick.start();
	}
		if(key == 'b')
	{
		mm1.push(new musicMaker1(liney[0].x1, 250, "yeah1.wav"));
		//chillkick.start();
	}
		if(key == 'n')
	{
		mm1.push(new musicMaker1(liney[0].x1, 300, "nem2.wav"));
		//chillkick.start();
	}
		if(key == 'm')
	{
		mm1.push(new musicMaker1(liney[0].x1, 350, "sticks.wav"));
		//chillkick.start();
	}

}


function keyPressed()
{
	//print(keyCode);
	if(keyCode == 65)
	{
		//mm1.push(new musicMaker1(lineZ[0].asterisky.position.x, 50, "kick.wav"));
		//background(100);
		//note = "c3";
		synth.triggerAttack(["C4"]);
		print(liney[0].x1);
	}
	else if(keyCode == 83)
	{
		synth.triggerAttack(["D4"]);
	}
	else if(keyCode == 87)
	{
		synth.triggerAttack(["Db4"]);
	}
	else if(keyCode == 69)
	{
		synth.triggerAttack(["Eb4"]);
	}
	else if(keyCode == 84)
	{
		synth.triggerAttack(["Gb4"]);
	}
	else if(keyCode == 89)
	{
		synth.triggerAttack(["Ab4"]);
	}
	else if(keyCode == 85)
	{
		synth.triggerAttack(["Bb4"]);
	}
	else if(keyCode == 68)
	{
		synth.triggerAttack(["e4"]);
	}
	else if(keyCode == 70)
	{
		synth.triggerAttack(["f4"]);
	}
	else if(keyCode == 71)
	{
		synth.triggerAttack(["g4"]);
	}
	else if(keyCode == 72)
	{
		synth.triggerAttack(["a4"]);
	}
	else if(keyCode == 74)
	{
		synth.triggerAttack(["b4"]);
	}

	else if(keyCode == 75)
	{
		synth.triggerAttack(["c5"]);
	}

}

function keyReleased()
{
	//osc.stop();
	synth.releaseAll();
}

function generateEM1()
{
	em1.push(new effectmaker(390, 699, chorus1slider.value(), distort1slider.value(), pingpong1slider.value()))
}

function generateSkipBlock()
{
	sk1.push(new skipblock(448+120+20, 495+10+90+50+40));
	print(sk1[0].asterisk.position.x+5);
	print(liney[0].x1);
}

function generatereverseBlock()
{
	rev1.push(new reverseblock(448+120+20+60, 495+10+90+50+40))
}

function generateforwardBlock()
{
	fwd1.push(new forwardblock(448+120+20+150, 495+10+90+50+40))
}

function generateIFblock()
{
	if1.push(new playIF(455+340+25, 515-10+30, propertyselect.value(), condselect.value(), numselect.value()));

}

function generateVarBlock()
{
		 if(soundselect.value() == 'Kick')
	{
			var1.push(new varBLOCK(160, 590, "snare.wav"));
	}
		if(soundselect.value() == 'Closed HH')
	{
			var1.push(new varBLOCK(160, 590, "closedhh.wav"));
	}
		if(soundselect.value() == 'Snare')
	{
			var1.push(new varBLOCK(160, 590, "snare.wav"));
	}
		if(soundselect.value() == 'Open HH')
	{
			var1.push(new varBLOCK(160, 590, "openhh.wav"));
	}
		if(soundselect.value() == 'Yeah')
	{
			var1.push(new varBLOCK(160, 590, "yeah1.wav"));
	}
		if(soundselect.value() == 'Tabla')
	{
			var1.push(new varBLOCK(160, 590, "tabla.wav"));
	}
		if(soundselect.value() == 'Sticks')
	{
			var1.push(new varBLOCK(160, 590, "nem2.wav"));
	}

}

function varBLOCK(x, y, path)
{
	this.path = path;
	this.asterisk = createSprite(x,y, 30, 30);
	this.asterisk.shapeColor = color(140,100,20, 100);
	this.sound = new Tone.Player(this.path).toMaster();

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


function playLine()
{
	this.x1 = 0;
	this.y1 = 0;
	this.x2 = 0;
	
	this.y2 = displayHeight*7/13;
	this.flag = 1;
	this.show = function()
	{
		line(this.x1,this.y1,this.x2,this.y2);
	}

	this.move = function()
	{
		if(this.flag == 1)
		{
			this.x1=this.x1+5;
			this.x2=this.x2+5;
			if(this.x1>=displayWidth)
			{

				this.x1=0;
				this.x2=0;
			}
		}
		else
		{
			//this.revflag = true;
			this.x1=this.x1-5;
			this.x2=this.x2-5;
			if(this.x1<=0)
			{
				this.x1=displayWidth;
				this.x2=displayWidth;
			}
		}
	}

	this.skip = function()
	{
		if(this.flag == 1)
		{
			this.x1  = this.x1+displayWidth*1/4;
			this.x2  = this.x2+displayWidth*1/4;
		}
		else
		{
			this.x1  = this.x1-displayWidth*1/4;
			this.x2  = this.x2-displayWidth*1/4;
		}

	}
}


//MUSIC MAKER
function musicMaker1(x,y,path)
{

	this.asterisk = createSprite(x,y, 30, 30);
	this.asterisk.shapeColor = color(30,20,90,100);
	this.playflag = true;
	this.distort = new Tone.Distortion().toMaster();
	this.freeverb = new Tone.Freeverb().toMaster();
	this.comp = new Tone.Compressor(6, 2).toMaster();
	this.pingPong = new Tone.PingPongDelay("4n", 0.2).toMaster();
	this.freeverb.wet.value = 0;
	this.distort.wet.value = 0;
	this.pingPong.wet.value = 0;

	this.sound = new Tone.Player(path).connect(this.comp).connect(this.freeverb).connect(this.distort).connect(this.pingPong);

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

	this.checkflagandplay = function()
	{
		if(this.playflag == true)
		{
			//if(this.y<900*7/13)
			{
				this.sound.start();
				print("true");
			}
			
		}
		else
		{
			this.sound.stop();
			print("false");
		}
	}
}


function effectmaker(x,y, a, b, c)
{
	this.chorus = a;
	this.distort = b;
	this.pingpong = c;

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
	this.asterisk.shapeColor = color(20,190,70, 100);

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

	this.asterisk.onMouseOver = function() 
	{
		chillhat.start();
	}

	this.asterisk.onMouseReleased = function() 
	{
		if (draggedSprite == this) 
		{
			draggedSprite = null;

		}
	}

}


function playIF(x,y, a, b, c)
{

	this.asterisk = createSprite(x,y, 20, 20);
	this.asterisk.shapeColor = color(255, 255, 0, 70);
	this.prop = a;
	this.num = c;
	this.cond = b;

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

function statbutton1(x, y)
{
	this.asterisk = createSprite(x,y, 20, 20);
	this.asterisk.shapeColor = color(255, 255, 0, 70);
	//this.sound = new Tone.Player(path).toMaster();

	this.asterisk.onMouseOver = function() 
	{
		chillkick.start();
	}

}

function statbutton2(x, y)
{
	this.asterisk = createSprite(x,y, 20, 20);
	this.asterisk.shapeColor = color(255, 255, 0, 70);
	//this.sound = new Tone.Player(path).toMaster();

	this.asterisk.onMouseOver = function() 
	{
		chillhat.start();
	}

}

function statbutton3(x, y)
{
	this.asterisk = createSprite(x,y, 20, 20);
	this.asterisk.shapeColor = color(255, 255, 0, 70);
	//this.sound = new Tone.Player(path).toMaster();

	this.asterisk.onMouseOver = function() 
	{
		chillsnare.start();
	}

}

function statbutton4(x, y)
{
	this.asterisk = createSprite(x,y, 20, 20);
	this.asterisk.shapeColor = color(255, 255, 0, 70);
	//this.sound = new Tone.Player(path).toMaster();

	this.asterisk.onMouseOver = function() 
	{
		chillopenhh.start();
	}

}

function statbutton5(x, y)
{
	this.asterisk = createSprite(x,y, 20, 20);
	this.asterisk.shapeColor = color(255, 255, 0, 70);
	//this.sound = new Tone.Player(path).toMaster();

	this.asterisk.onMouseOver = function() 
	{
		chillyeah.start();
	}

}

function statbutton6(x, y)
{
	this.asterisk = createSprite(x,y, 20, 20);
	this.asterisk.shapeColor = color(255, 255, 0, 70);
	//this.sound = new Tone.Player(path).toMaster();

	this.asterisk.onMouseOver = function() 
	{
		chillnem1.start();
	}

}

function statbutton7(x, y)
{
	this.asterisk = createSprite(x,y, 20, 20);
	this.asterisk.shapeColor = color(255, 255, 0, 70);
	//this.sound = new Tone.Player(path).toMaster();

	this.asterisk.onMouseOver = function() 
	{
		chillsticks.start();
	}

}
