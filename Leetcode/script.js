//this is the roman neumeral I will test
let s = "MCMXCIV";

var romanToInt = function(s) {  //function with the parameter of the roman neumeral
    const roman = {             //creating an object with each roman neumeral
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    //add is what I will use to add together the neumerals
    let add = 0;                

    for(i = 0; i < s.length; i++){
        if(s[i] === "I" && s[i + 1] === "V"){           //if the first character is an I and the second is a V
            add += 4;                                   //add 4 since IV = 4
            i++;                                        //increase i by one so the V won't be added alone
        }
        else if(s[i] === "I" && s[i + 1] === "X"){      //if the first character is an I and the second is a X
            add += 9;                                   //add 9 since IX = 9
            i++;                                        //increase i by one so the X won't be added alone
        }
        else if(s[i] === "X" && s[i + 1] === "L"){      //if the first character is a X and the second is a L
            add += 40;                                  //add 40 since XL = 40
            i++;                                        //increase i by one so the L won't be added alone
        }
        else if(s[i] === "X" && s[i + 1] === "C"){      //if the first character is a X and the second is a C
            add += 90;                                  //add 90 since XC = 90
            i++;                                        //increase i by one so the C won't be added alone
        }
        else if(s[i] === "C" && s[i + 1] === "D"){      //if the first character is a C and the second is a D
            add += 400;                                 //add 400 since CD = 400
            i++;                                        //increase i by one so the D won't be added alone
        }
        else if(s[i] === "C" && s[i + 1] === "M"){      //if the first character is a C and the second is a M
            add += 900;                                 //add 900 since CM = 900
            i++;                                        //increase i by one so the M won't be added alone
        } 
        else{
            add += roman[s[i]];                         //add each character individually depending on the value from the s class
        }
    }
    return add;
};

console.log(romanToInt(s));                             //log whatever the romanToInt function returns, which is add