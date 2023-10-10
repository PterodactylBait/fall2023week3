function playChase(){
    /*playTheChase() is a function used to simulate a roulette style game that doesn't actually exist.
    use for the week 3 assignment*/
    console.log("playTheChase() started");
    //spin the wheel
    var spin = 1 + Math.floor(20 * Math.random()); 
    console.log(spin); 
    document.getElementById("spinRes").innerHTML = spin;
   

    
 
    if(spin == 20){
        //if spin = 20, jackpot!! 
        document.getElementById("finRes").innerHTML = "JACKPOT!!";
    }else if(spin == 1){
        //if spin = 1, free throw!
        document.getElementById("finRes").innerHTML = "Sushi Time! Free Spin!";
    }else if(spin%2 == 1){
         //if spin = odd, double treats!! 
         document.getElementById("finRes").innerHTML = "Double treats!";
    }else{
        //otherwise, treats equal to number where balls lands
        document.getElementById("finRes").innerHTML = "Treats!";
    }
    }