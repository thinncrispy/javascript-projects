//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
      this.name = name;
      this.mass = mass;
      this.scores = scores;
    }
    addScore(score){
        // let newScore = score;
        this.scores.push(score)
    }
    average(){
        let averageSum = 0;
        let average = 0;
        for (let i = 0; i < this.scores.length; i++){
            averageSum += this.scores[i];
        }
        average = averageSum / this.scores.length
        return Math.round(average*10)/10;
    }
    status(){
        let score = this.average();
        let status = ""
        if (score >= 90){
            status = "Accepted"
            return `${this.name} earned an average test score of ${this.average()} and has a status of ${status} `
        } else if (score > 80 && score < 89.9) {
            status = "Reserve"
            return `${this.name} earned an average test score of ${this.average()} and has a status of ${status} `
        } else if (score > 70 && score < 79.9) {
            status = "Probationary"
            return `${this.name} earned an average test score of ${this.average()} and has a status of ${status} `
        } else if (score < 70) {
            status = "Rejection"
            return `${this.name} earned an average test score of ${this.average()} and has a status of ${status} `
        }
    }
 }

let bear = new CrewCandidate("Bubba Bear", 135, [88,85,90]);
let dog = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
let gator = new CrewCandidate("Glad Gator", 225, [75,78,62]);

console.log(bear);
console.log(dog);
console.log(gator);
// bear.addScore(83);
// console.log(bear.scores)
console.log(bear.average());
console.log(dog.average());
console.log(dog.status());
console.log(bear.status());
console.log(gator.status());
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.