// Declare and assign the variables below

    let shuttleName = 'Determination';
    let shuttleSpeedMph = 17500;
    let distanceToMarsKm = 225000000;
    let distanceToMoonKm = 384400;
    let milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
    console.log(typeof shuttleName);
    console.log(typeof shuttleSpeedMph);
    console.log(typeof distanceToMarsKm);
    console.log(typeof distanceToMoonKm);
    console.log(typeof milesPerKm);
// Calculate a space mission below
    let milestoMars = distanceToMarsKm * milesPerKm;
    console.log(milestoMars);
    let hoursToMars = milestoMars / shuttleSpeedMph;
    console.log(hoursToMars);
    let daysToMars = hoursToMars / 24;
    console.log(daysToMars);
// Print the results of the space mission calculations below
    console.log(shuttleName, "will take " + daysToMars, "days to reach Mars.");
// Calculate a trip to the moon below
    let milesToMoon = distanceToMoonKm * milesPerKm;
    console.log(milesToMoon);
    let hoursToMoon = milesToMoon / shuttleSpeedMph;
    console.log(hoursToMoon);
    let daysToMoon = hoursToMoon / 24;
    console.log(daysToMoon);
// Print the results of the trip to the moon below
    console.log(shuttleName, "will take " + daysToMoon, "days to reach the Moon.");