
let launchcode = {
  oragnization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(any){
    if(any % 2 === 0){
        return "Launch!";
    } else if(any % 3 === 0){
        return "Code!";
    } else if(any % 5 === 0){
        return "Rocks!";
    }

  }
}




module.exports = launchcode;

