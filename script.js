
function palindrome(str) {
    
    if (typeof str !== "string" || str === "") {
        alert("Incorrect way!");
    }

        const arr = str.split("").reverse().join("");

        if (arr === str) {
            return true;
        }
        else {
            return false;
        }
    
    };
    const res = palindrome("76yy67");
    console.log(res);
    
    // -------------------------------------------------------------


    function palindromeX(string) {

        const arrX = string.split("");
        
        let result;
        
        for (let i = 0; i < arrX.length; i++) {

            const right = arrX.length - 1 - [i];

            if (string[i] === string[right]){
                result = true;
            }

            else {
                result = false;
                return result;
            };
        }

        return result;
    }

    const resX = palindromeX("777ab777");
    console.log(resX);