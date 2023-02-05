module.exports = function toReadable (number) {
    let resualt = '';
    const arrUnits = ['', 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arrDozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundreds = 'hundred';
    const arrTeen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
    if (number%100 === 0 && number/100 >=1) {
        return resualt += arrUnits[Math.trunc(number/100 +1)] + ' ' + hundreds;
    }

    if (number <= 19 && number >= 11) {
        return resualt += arrTeen[number - 11]; 
    }

    if (Math.trunc(number/10) < 1){
        return resualt += arrUnits[number+1];
      }

    if (number% 10 === 0 && number/100 > 1) {
        let n = Math.trunc(number/100);
        return resualt += arrUnits[Math.trunc(number/100 +1)] + ' ' + hundreds + ' ' + arrDozens[Math.trunc(((number - n*100)/10)-1)];
     }

    if (number%100 < 10 && number%100 > 1 || number%100 === 1) {
        return resualt += arrUnits[Math.trunc(number/100 +1)] + ' ' + hundreds + ' ' + arrUnits[number%100 +1];
     }
     if (number%100 < 20 && number%100 > 10) {
        return resualt += arrUnits[Math.trunc(number/100 +1)] + ' ' + hundreds + ' ' + arrTeen[number%100 - 11];
     }

     if (number > 120) {
        let n = Math.trunc(number/100);
        return resualt += arrUnits[Math.trunc(number/100 +1)] + ' ' + hundreds + ' ' + arrDozens[Math.trunc(((number - n*100)/10)-1)] + ' ' + arrUnits[number%10 +1];
     }
    
      if (number % 10 === 0) {
        return resualt += arrDozens[number/10 - 1];
    }
    

     if (number < 100) {
        return arrDozens[Math.trunc(number/10) - 1] + ' ' + arrUnits[number%10+1];
     }
     
}
