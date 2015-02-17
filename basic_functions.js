
function my_max(array) {
    if (!Array.isArray(array)) {
        return "Input is not an array";
    }
    var max = 0;
    const arrayLength = array.length;
    for(i = 0; i<arrayLength; i++){
        if(array[i]>max){
            max = array[i];
        }
    }
    return max
}


function vowel_count(string) {
    if(typeof string!= "string") {
        return "Input is not a string";
    }
    
    const stringLength = string.length;
    var stringLower = string.toLowerCase();
    var vowels = { a:0, e:0, i:0, o:0, u:0 };
    for(j=0; j<stringLength; j++){
        if (["a","e","i","o","u"].indexOf(stringLower[j]) >-1) {
            vowels[string[j]] += 1;
        }
    }
    return vowels
}

function reverse(string) {
    if(typeof string!= "string") {
        return "Input is not a string";
    }
    
    const stringLength = string.length;
    var newString = [];
    for(j = stringLength-1; j>=0; j--){
        newString += string[j];
    }
    return newString;
    
}

console.log(my_max([3,7,34,3,2,5]));
console.log(my_max([54,234,33,34]));

console.log(vowel_count("hellooooooo there"));

console.log(reverse("This is now going to be backwards"));
