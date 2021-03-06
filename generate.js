var generateID = function(dob, male, citizen) {
	var getRandom = function(range) {
		return Math.floor(Math.random() * range);
	};

	if (!/[0-9][0-9][0-1][0-9][0-3][0-9]/.test(dob)) {        
    	return "Please check your date of birth string.";
    }

    var gender = getRandom(5) + (male ? 5 : 0);
    var citBit = +!citizen;
    var random = getRandom(1000);

    if (random < 10) random = "00" + random;
    else if (random < 100) random = "0" + random;

    var total = "" + dob + gender + random + citBit + "8";
    total += generateLuhnDigit(total);
    return total;
};
