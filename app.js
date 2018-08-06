let hexChars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
let addressArr = [];
var generateAddresses = function(addrs) {
    if (addrs <= 0) {
        return;
    } else {
        let addressStr = "";
        for (i = 0; i < 12; i++) {
            addressStr += hexChars[Math.floor(Math.random() * hexChars.length)];
        };
        addressArr.push(addressStr);
        return generateAddresses(addrs - 1);
    }
};