let s = "MCMXCIV";

var romanToInt = function(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let add = 0;

    for(i = 0; i < s.length; i++){
        if(s[i] === "I" && s[i + 1] === "V"){
            add += 4;
            i++;
        }
        else if(s[i] === "I" && s[i + 1] === "X"){
            add += 9;
            i++;
        }
        else if(s[i] === "X" && s[i + 1] === "L"){
            add += 40;
            i++;
        }
        else if(s[i] === "X" && s[i + 1] === "C"){
            add += 90;
            i++;
        }
        else if(s[i] === "C" && s[i + 1] === "D"){
            add += 400;
            i++;
        }
        else if(s[i] === "C" && s[i + 1] === "M"){
            add += 900;
            i++;
        } 
        else{
            add += roman[s[i]];
        }
    }
    return add;
};

console.log(romanToInt(s));