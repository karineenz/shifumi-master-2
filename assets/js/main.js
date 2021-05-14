// VARIABLE ET REGLE DE JEU

$(function(){ 
// cacher la div av .hide 
// je cree uen div html av image qu eje veux et quand je gagne je la fais re aparaotre
    $('#imageChoice').hide();
    
    $("#play").click(function(){  
        const buttons = document.querySelectorAll("button");
        const username = prompt("Veuillez indiquer votre nom d'utilisateur...");

        $('#imageChoice').show();
        $("#play").hide();

        var playerChoice = '';
        var scorePlayer  =  0 ;
        var scoreIA  =  0 ;
        var games = 0;
        var pts = 0;
        var partieJouable = undefined;



    function endgame() {
        alert("end game");
    }

// GAMES
     function game(playerChoice){ 
        games++;

        if (games >= 5) {
            alert("Vous avez terminez bravoo reactualisez pour relancez votre game sayonara ;(")
            endGame();
            return;
        }
     
         console.log('Joueur : '+ playerChoice);
   
        var IA= Math.random();
        
        if(IA <= 0.33){
            IA = "pierre";
        }
        else if(IA <= 0.66){
            IA = "feuille";
        }
        else{
            IA = "ciseaux";
        };

        console.log('Ordinateur :  '+ IA );
    
        if((IA === "pierre" && playerChoice === "ciseaux") || (IA === "feuille" && playerChoice=== "pierre") || (IA === "ciseaux" && playerChoice === "feuille")) {
            var sentenceWin = "Tu as perdu ! 失われた !";
            scoreIA  =  scoreIA  + 1 ;
         
            
        }
        
        
        else if((playerChoice === "pierre" && IA === "ciseaux") || (playerChoice === "feuille" && IA === "pierre") || (playerChoice === "ciseaux" && IA === "feuille"))
        {
            var sentenceWin = "Tu as Gagné à gagné ! bravo !よくやった!";
            scorePlayer  =  scorePlayer   + 1 ;
           
        } 
        
        else 
        {
            var sentenceWin = "Match nul pour cette manche";
         
        };

    
            
           
        //rajouter une div ici .show

        //  Resultat
        var purcent = ((scorePlayer  / games) * 100) ;
        console.log('pourcentage: '+ purcent);
    
        alert(sentenceWin + "\nManeki Neko  à joué " + IA ) ;

        $("#score").html(scorePlayer +' - '+ scoreIA);
            pts = pts+1

            $("#count").html(games);
            pts = pts+1 ;

        $("#purcent").html(Math.round(purcent));
    }

   

        alert("Règles du jeu SHI FU MI. シフミゲームのルール \n PIERRE gagne contre CISEAUX mais perd contre FEUILLE. \n FEUILLE gagne contre PIERRE mais perd contre CISEAUX. \n CISEAUX gagne contre FEUILLE mais perd contre pierre. BONNE CHANCE ! がんばろう !");
    


        $(".imageCat").draggable({revert:true});
        $(".imageCat").draggable({revertDuration : 1500});

        $("#playerOne").droppable({
            drop:function(event, ui) {
                                    
                console.log('mousedown : '+ playerChoice);
                game(playerChoice);
            } 
        });

        $(".imageCat").mousedown(function(){
            playerChoice = this.id;
            console.log('mousedown : '+ playerChoice);

        });


   });
   
  


});


