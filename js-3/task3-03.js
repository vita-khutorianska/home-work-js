const findBestEmployee = function (employees) {

    'use strict';
    let name = "";
    let maxValue = 0;
    // Write code under this line
    let entries = Object.entries(employees);
    for (const entry of entries) {
        console.log(entry);
        
        if (maxValue < entry[1]) {
            maxValue = entry[1]; 
            name = entry[0];
        }
  
    }
    return name;
};

// Объекты и ожидаемый результат
const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};
console.log(findBestEmployee(developers)); 
// 'lorence'

const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
};
console.log(findBestEmployee(supports)); 
// 'mango'

const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}
console.log(findBestEmployee(sellers));
// 'lux'  