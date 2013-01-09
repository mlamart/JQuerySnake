/*
KEY_DOWN	= 40;
KEY_UP		= 38;
KEY_LEFT	= 37;
KEY_RIGHT	= 39;
*/
// JQUERY'S SNAKE - GAMEBOY RETRO

// Fonction d'initialisation
	// Menu
	function showMenu(arg)
	{
		switch(arg)
		{
			case 0:
				$('#menu').html("");
			break;
			case 1:
				$('#menu').html("<h1 id='title' style='position:relative;top:20px;left:-40px;width:500px;'>Sheep's Snake</h1><p style='position:absolute;top:250px;left:-50px;font-size:1.1em;' id='playA'>Press A to play!</p><p style='position:absolute;top:280px;left:-50px;font-size:1.1em;' id='playB'>Press B for some help !</p>");
				
			break;
		}
	};


// Fonction Principal

	// Déplacement du joueur
	function deplacementJoueur(axe)
	{
		switch(axe)
		{
			case 38:
				if(bas != 1)
				{
					dirSnake = {top: '-=20'};
					haut = 1;
					bas = 0;
					gauche = 0;
					droite = 0;
				}
			break;
			
			case 40:
				if(haut != 1)
				{
					dirSnake = {top: '+=20'};
					haut = 0;
					bas = 1;
					gauche = 0;
					droite = 0;
				}
			break;
			
			case 37:
				if(droite != 1)
				{
					dirSnake = {left: '-=20'};
					haut = 0;
					bas = 0;
					gauche = 1;
					droite = 0;
				}
			break;
			
			case 39:
				if(gauche != 1)
				{
					dirSnake = {left: '+=20'};
					haut = 0;
					bas = 0;
					gauche = 0;
					droite = 1;
				}
			break;
		}
	};

	function deplacementJoueurMouse(pad)
	{
		switch(pad)
		{
			case 38:
				if(bas != 1)
				{
					dirSnake = {top: '-=20'};
					haut = 1;
					bas = 0;
					gauche = 0;
					droite = 0;
				}
			break;
			
			case 40:
				if(haut != 1)
				{
					dirSnake = {top: '+=20'};
					haut = 0;
					bas = 1;
					gauche = 0;
					droite = 0;
				}
			break;
			
			case 37:
				if(droite != 1)
				{
					dirSnake = {left: '-=20'};
					haut = 0;
					bas = 0;
					gauche = 1;
					droite = 0;
				}
			break;
			
			case 39:
				if(gauche != 1)
				{
					dirSnake = {left: '+=20'};
					haut = 0;
					bas = 0;
					gauche = 0;
					droite = 1;
				}
			break;
		}
	};

	// Déplacement du Snake
	function deplacementSnake(dir,size)
	{
	if(play == 1)
	{
		x = new Array();
		y = new Array();
		
		for(var i = 0; i <= size; i++)
		{
			if(i == 0)
			{
				x[i] = parseInt($('#carre').css('left'));
				y[i] = parseInt($('#carre').css('top'));
			}
			else
			{
				var it = i - 1;
				x[i] = parseInt($('#snake'+it+'').css('left'));
				y[i] = parseInt($('#snake'+it+'').css('top'));
			}
		}
		
		$('#carre').stop().animate(dir,0,'linear').queue(function() 
		{
			for( var i = 0; i < size; i++)
			{
				$('#snake'+i+'').stop().animate({top: y[i],left: x[i]},0,'linear');
			}
		});
	}
	};

	function collisionCell(size)
	{
		for(var i = 0; i < size; i++)
		{
			var x = parseInt($('#carre').css('left'));
			var y = parseInt($('#carre').css('top'));
			
			var xSnake = parseInt($('#snake'+i+'').css('left'));
			var ySnake = parseInt($('#snake'+i+'').css('top'));
			
			if( (x == xSnake) && (y == ySnake) )
			{
				if(i != (size-1))
				{
					$('#lost').html('perdu');
					play = 0;
				}
			}
		}
	};

	// Collision Mur
	function collisionMur()
	{
		var x = parseInt($('#carre').css('left'));
		var y = parseInt($('#carre').css('top'));
		
		if( (x < 0) || (x > 440) || (y < 0 ) || (y > 400))
		{
			$('#lost').html('perdu');
			play = 0;
		}
		else
		{
			$('#lost').html('');
		}
	};

	// Apparition Nourriture
	function popFood()
	{
		if(play == 1)
			{
			var firstNumber = Math.floor((Math.random()*22)+0);
			var secondNumber = Math.floor((Math.random()*20)+0);
			var xFood = 20 * firstNumber;
			var yFood = 20 * secondNumber;
			
			if(food == 0)
			{
				
				$('#jeu').append('<div style="position:absolute;top:'+yFood+'px;left:'+xFood+'px" id="food"></div>');	
				$('#showfood').html('x:'+xFood+'  y:'+yFood+'');
				food = 1;
			}
		}
	}

	// Passage sur Nourriture
	function eatFood(taille)
	{
		var x = parseInt($('#carre').css('left'));
		var y = parseInt($('#carre').css('top'));
		
		var xFood = parseInt($('#food').css('left'));
		var yFood = parseInt($('#food').css('top'));
		
		if( (x == xFood) && (y == yFood) )
		{
			$('div[id="food"]').remove();
			$('#jeu').append('<div id="snake'+taille+'" style="background-color:grey;width:25px;height:25px;position:absolute;top:'+y+'px;left:'+x+'px";></div>');
			size += 1;
			food = 0;
		}
	}

	// Game Over
	function gameOver()
	{
	if(play == 0)
		if(menu == 0)
			$('img[class="gameover"]').toggle();
}



// Fonction de Debug
	function positionJoueur()
	{
		var x = parseInt($('#carre').css('left'));
		var y = parseInt($('#carre').css('top'));
		
		$('#x').html(x);
		$('#y').html(y);
		
	};

	function getFood(food,size)
	{
		$('#foods').html(food);
		$('#size').html(size);
	};