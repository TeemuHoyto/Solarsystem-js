let planetsName = document.getElementById('planet');
let nimi = document.getElementById('person').value;
let pplanetCall = document.getElementById('planetCall');
let printterr = document.getElementById('pront');
let objecttt = document.getElementById('planet');

let planets={ 
"MERCURY":{
    planetName:"Mercury",
    population:"ZERO",
    FTL:"NO",
    temperature:"-173.15 - 427 centigrade",
    escapevelocity:"4.25 km per s",
    pressure:"0.5 nPa",
    gravity:"3.7 m/s²",
    mass:"3.3011×10 23 kg", 
    satellites:0,
    
},
"VENUS":{
    planetName:"Venus",
    population:"ZERO",
    FTL:"NO",
    temperature:"462 to 863 centigrade",
    escapevelocity:"10.36 km per s",
    pressure:"92 bar",
    gravity:"8.87 m/s²",
    mass:"4.8675×10 24 kg", 
    satellites:0
},   
"EARTH":{
    planetName:"Earth",
    population:"7.6 billion humans",
    FTL:"NO",
    temperature:"-89 to 57 centigrade",
    escapevelocity:"11.186 km per s",
    pressure:"1 bar",
    gravity:"9.807 m/s²",
    mass:"5.97237 yotta kg", 
    satellites:"1 The Moon"
},
"MARS":{
    planetName:"Mars",
    population:"ZERO",
    FTL:"NO",
    temperature:"-143 to 35 centigrade",
    escapevelocity:"5.027 km per s",
    pressure:"0.636 kPa",
    gravity:"3.720 m/s²",
    mass:"6.4171×10 23 kg", 
    satellites:"Phobos, Deimos"
},
"JUPITER":{
    planetName:"Jupiter",
    population:"ZERO",
    FTL:"NO",
    temperature:"67 to 9700 centigrade",
    escapevelocity:"59.5 km per s",
    pressure:"20-200 kPa",
    gravity:"27.79 m/s²",
    mass:"1.8982×10 27 kg", 
    satellites:79
},
"SATURN":{
    planetName:"Saturn",
    population:"ZERO",
    FTL:"NO",
    temperature:"-189 to -139 centigrade",
    escapevelocity:"35.5 km per s",
    pressure:"10-20 bar",
    gravity:"10.44 m/s²",
    mass:"5.6834×10 26 kg",
    satellites:62
},
"URANUS":{
    planetName:"Uranus",
    population:"ZERO",
    FTL:"NO",
    temperature:"-224.2 to 200 centigrade",
    escapevelocity:"21.3 km per s",
    pressure:"800 GPa",
    gravity:"8.69 m/s²",
    mass:"(8.6810±0.0013)×10 26kg", 
    satellites:27
},
"NEPTUNE":{
    planetName:"Neptune",
    population:"ZERO",
    FTL:"NO",
    temperature:"-218 to -200 centigrade",
    escapevelocity:"23,5 km per s",
    pressure:"10 GPa",
    gravity:"11.15 m/s²",
    mass:"1.02413×10 to 26 kg", 
    satellites:14
},
"PLUTO":{
    planetName:"Pluto",
    population:"ZERO",
    FTL:"NO",
    temperature:"-240 to 218 centigrade",
    escapevelocity:"1.2 km per s",
    pressure:"0",
    gravity:"0.620 m/s²",
    mass:"1,290×10²² kg", 
    satellites:"Styx, Kerberos, Nix, Hydra, Charon"
}
}

function changeImage(imgName)
  {
     image = document.getElementById('image');
     image.src = imgName;
  }
function plntfndr(){
    changeImage(planetsName.value+'.png');
    let item;
    if( planets.hasOwnProperty(planetsName.value) ) {
        item = planets[planetsName.value];
        console.log( item );
        printterr.innerHTML ="'"+planetsName.value + " is AWESOME' <br /> says "+ person.value;
        
        
        pplanetCall.innerHTML=
        "This Is planet: "+ planets[planetsName.value].planetName + 
        "<br>" +"Population: "+  planets[planetsName.value].population +
        "<br>" +"FTL: "+planets[planetsName.value].FTL + 
        "<br>" +"Temperature: "+planets[planetsName.value].temperature + 
        "<br>" +"Escape Velocity: "+planets[planetsName.value].escapevelocity +
        "<br>" +"Pressure: "+planets[planetsName.value].pressure +
        "<br>" +"Gravity: "+planets[planetsName.value].gravity +
        "<br>" +"Mass: "+planets[planetsName.value].mass +
        "<br>" +"Satellites: "+planets[planetsName.value].satellites 
        ;
       
    
    }else{
        printterr.innerHTML=planetsName.value+" Is not a planet in the sol system. Try again."
        pplanetCall.innerHTML="Try entering a planet from Sol system";  
    }
}