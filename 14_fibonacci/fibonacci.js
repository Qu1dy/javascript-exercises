const fibonacci = function(num) {
    if(typeof(num) != Number) {
        try {
            num = parseInt(num)
        } catch(e) {
            return "OOPS"
        }
    }
    if(num < 0) {
        return "OOPS";
    }
    if(num < 2){
        return num;
    }
    if(num == 2){
        return 1;
    }
    let twoBefore = 1;
    let last = 1;
    let next;
    for(let i=2;i<num;i++) {
        next = twoBefore + last;
        twoBefore = last;
        last = next;
    }
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
