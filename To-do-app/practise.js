// question 1...
function ascending_order(arr){
  let result = arr.slice(); //copy...
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
      if(result[j]>result[j+1]){
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }

    }

  }
  return result;
}

function desending_order(arr){
  let result = arr.slice(); //copy...
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
      if(result[j]<result[j+1]){
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }

    }

  }
  return result;
}

let arr = [1,7,4,2,3,90,87];
console.log("original array....",arr);
console.log("ascending order....",ascending_order(arr));
console.log("descending order....",desending_order(arr));

//question 2...
let data = [
    { id: 1, value: 45 },
    { id: 2, value: 12 },
    { id: 3, value: 78 },
    { id: 4, value: 23 },
    { id: 5, value: 56 },
    { id: 6, value: 9 },
    { id: 7, value: 34 },
    { id: 8, value: 67 },
    { id: 9, value: 1 },
    { id: 10, value: 90 }
];

function sortAscendingObjects(arr) {
    let result = arr.slice(); // copy array

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {
            if (result[j].value > result[j + 1].value) {
                // swap objects
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

function sortDescendingObjects(arr) {
    let result = arr.slice(); // copy array

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {
            if (result[j].value < result[j + 1].value) {
                // swap objects
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

console.log("Original:", data);
console.log("Ascending:", sortAscendingObjects(data));
console.log("Descending:", sortDescendingObjects(data));

//question 3...
let dataa = [
    { id: 1, time: "2024-03-01T10:30:00" },
    { id: 2, time: "2023-12-15T08:20:00" },
    { id: 3, time: "2024-01-10T14:00:00" },
    { id: 4, time: "2022-11-05T09:45:00" },
    { id: 5, time: "2024-02-20T16:10:00" },
    { id: 6, time: "2023-07-25T11:55:00" },
    { id: 7, time: "2025-01-01T00:00:00" },
    { id: 8, time: "2023-05-18T19:30:00" },
    { id: 9, time: "2024-06-12T07:15:00" },
    { id: 10, time: "2022-01-01T12:00:00" }
];

function sortByTimeAscending(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {
            if (new Date(result[j].time) > new Date(result[j + 1].time)) {
                // swap
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

function sortByTimeDescending(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {
            if (new Date(result[j].time) < new Date(result[j + 1].time)) {
                // swap
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

console.log("Original:", dataa);
console.log("Ascending (Old → New):", sortByTimeAscending(dataa));
console.log("Descending (New → Old):", sortByTimeDescending(dataa));

//question 4...
let dataaa = [
    { id: 1, date: "2024-03-01" },
    { id: 2, date: "2023-12-15" },
    { id: 3, date: "2024-01-10" },
    { id: 4, date: "2022-11-05" },
    { id: 5, date: "2024-02-20" },
    { id: 6, date: "2023-07-25" },
    { id: 7, date: "2025-01-01" },
    { id: 8, date: "2023-05-18" },
    { id: 9, date: "2024-06-12" },
    { id: 10, date: "2022-01-01" }
];

function sortByDateAscending(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {
            if (new Date(result[j].date) > new Date(result[j + 1].date)) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

function sortByDateDescending(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - 1 - i; j++) {
            if (new Date(result[j].date) < new Date(result[j + 1].date)) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }
    return result;
}

console.log("Original:", dataaa);
console.log("Ascending (Old → New):", sortByDateAscending(dataaa));
console.log("Descending (New → Old):", sortByDateDescending(dataaa));