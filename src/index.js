module.exports = function toReadable (number) {
let one_nineteen = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" ");
let twenty_ninety = "'' '' twenty thirty forty fifty sixty seventy eighty ninety".split(" ");
if (number < 20) 
    return one_nineteen[number];
let digit = number%10;
if (number < 100) 
    return twenty_ninety[~~(number/10)] + (digit? " " + one_nineteen[digit]: "");
if (number < 1000) 
    return one_nineteen[~~(number/100)] +" hundred" + (number%100 == 0? "": " " + toReadable(number%100)); 
}

