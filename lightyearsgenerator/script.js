const lichtyearInpt = document.querySelector('.lightyear-input');
const generatorBtn = document.querySelector('.generate-btn');
const kmInpt = document.querySelector('.km-input');
const humanInpt = document.querySelector('.human-input');
const dayInpt = document.querySelector('.day-input');
const humanspeedInpt = document.querySelector('#humanspeed-input');
const boatInpt = document.querySelector('#boat-input');
const carInpt = document.querySelector('#car-input');
const airplaneInpt = document.querySelector('#airplane-input');
const rocketInpt = document.querySelector('#rocket-input');
const warpInpt = document.querySelector('#warp-input');
const info = document.querySelector('#Selected-vehicle')
const daysinfo = document.querySelector('#Days-vehicle');
const years = document.querySelector('#Year-vehicle');


generatorBtn.addEventListener('click', () => {
  let lightyear = (lichtyearInpt.value);
  
  let km = lightyear * 9.46728e+12;
  kmInpt.value = km.toLocaleString() + " km";

  let days = km / 365;
  dayInpt.value = days.toLocaleString() + " days"

   let hours = days * 24;
  humanInpt.value = hours.toLocaleString() + "hours"

  if(humanspeedInpt.checked) {
    let humanhour = km / 13;
    let humandays = humanhour / 24;
    let humanyear = humandays / 365;
    info.textContent = Math.floor(humanhour).toLocaleString() + " hours";
    daysinfo.textContent = Math.floor(humandays).toLocaleString() + " days"; 
    years.textContent = Math.floor(humanyear).toLocaleString() + " years"; 

  }  

  else if(boatInpt.checked) {
    let boathour = km / 40;
    let dayshour = boathour / 24;
    let yearhour = dayshour / 365;
    info.textContent = Math.floor(boathour).toLocaleString() + " hours";
    daysinfo.textContent = Math.floor(dayshour).toLocaleString() + " days"; 
    years.textContent = Math.floor(yearhour).toLocaleString() + " years"; 

  }  
  else if(carInpt.checked) {
    let carhour = km / 120;
    let cardays = carhour / 24;
    let caryear = cardays / 365;
    info.textContent = Math.floor(carhour).toLocaleString() + " hours";
    daysinfo.textContent = Math.floor(cardays).toLocaleString() + " days"; 
    years.textContent = Math.floor(caryear).toLocaleString() + " years";
  } 
  else if(airplaneInpt.checked) {
    let airplanehour = km / 850;
    let airplanedays = airplanehour / 24;
    let airplaneyears = airplanedays / 365;
    info.textContent = Math.floor(airplanehour).toLocaleString() + " hours";
    daysinfo.textContent = Math.floor(airplanedays).toLocaleString() + " days"; 
    years.textContent = Math.floor(airplaneyears).toLocaleString() + " years";
  }
  else if(rocketInpt.checked){
    let rockethour = km / 692000;
    let rocketdays = rockethour / 24;
    let rocketyears = rocketdays / 365;
    info.textContent = Math.floor(rockethour).toLocaleString() + " hours";
    daysinfo.textContent = Math.floor(rocketdays).toLocaleString() + " days"; 
    years.textContent = Math.floor(rocketyears).toLocaleString() + " years";
  }
  else if(warpInpt.checked){
    let warphour = km / 1.2928636e+13;
    let warpdays = warphour / 24;
    let warpyears = warpdays / 365;
    info.textContent = Math.floor(warphour).toLocaleString() + " hours";
    daysinfo.textContent = Math.floor(warpdays).toLocaleString() + " days"; 
    years.textContent = Math.floor(warpyears).toLocaleString() + " years";
  } 
  else info.textContent = "Please fill in."

});

  



