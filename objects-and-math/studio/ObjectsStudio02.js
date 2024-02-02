// Code your orbitCircumference function here:
let radius = 2000;
let speed = 28000;
function orbitCircumference(radius){
  let circumference = Math.ceil((2 * Math.PI * radius));
  return circumference;
}
console.log(orbitCircumference(radius));

function missionDuration(numOrbits, radius, speed){
  let oneOrbit = orbitCircumference(radius);
  let time = 0
  for (let i = 0; i < numOrbits; i++){
    time += oneOrbit / speed;
  }
  return Math.round(time*100)/100
}
console.log(missionDuration(5, radius, speed))
// Code your missionDuration function here:


// Copy/paste your selectRandomEntry function here:


// Code your oxygenExpended function here:


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 