//Task 1  
/*
function printTimeout(str, n) { 

let a = '';
for (var i = 0; i < str.length; i++) {
  setTimeout( () => console.log(str), 10000 ) 

return a;
}

} 
console.log( printTimeout('hello', )); // hello will appear after 10secs in console

//Task 2 
/*
function SumtoN(n) { 

let sum = 0;

for (var i = 0; i <= 2; ) {
    sum += i ;

}
return sum
}

console.log(SumtoN(2));
console.log(SumtoN(4));


function sumTo(n) {
  if (n == 1) {
   return 1;
  }
  return n + sumTo(n - 1);
}

console.log (sumTo(2));
console.log (sumTo(4));


function bombTimer(str, time) { 
let str1 = 1;
setTimeout(() => console.log(str1), 2000);

let str2 = 2;
setTimeout(() => console.log(str2), 3000);

let str3 = 3;
setTimeout(() => console.log(str3), 4000);

let str4 = 'Boooom';
setTimeout(() => console.log(str4), 5000);

}
console.log(bombTimer());



function factorial(n) {

    let facto = 1; 

       for (var i = 1; i <= n ; i++) {
         facto = facto*i;
       }

    return facto

}

console.log(factorial(3)); // 6
console.log(factorial(5)); // 120


// 
function bombTimer(str, time) {
  
    for (var i = 1; i <= 3; i--) {
        let str1 = '3';

        console.log(str1);
    }
  
 }
console.log(bombTimer('Boooom', 3));

for (var i = 0; i <= arr.length; i++) 
          {
            if ( arr <= 5) { return i


        } 
    }


function filterNumbers(arr, maxNumber) { 
  let result = [];
for (var i = 0; i <= arr.length; i++) 
          {
              if (arr[i] <= maxNumber) {
                  result.push(arr[i]);}
  }
    return result;
 }
console.log(filterNumbers([1, 4, 8, 1, 20], 5)); // [1, 4, 1]



function minMax(arr) { 

 return {'maximum Number': Math.max.apply(Math,arr),'minimum Number':Math.min.apply(Math,arr)}



 }
console.log(minMax([1, 4, 8, 2, 20])); // { max: 20, min: 1 }

//Task 8 A function that returns average of numbers in array.

function average(arr) { 

let total = arr.reduce((sum, currentValue) => sum + currentValue, 0);

console.log(total);

let aver = total/arr.length;

console.log(aver);
 }

console.log(average([1,4,2])) // 2.33




// Task 10 A function accepts array of users and returns object of users where key is user id and value user data.

const users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-3-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' }
];



function usersToObject(users) { 
 const usersNewArr = {};

      users.forEach((user) => {
            usersNewArr[user.id] = user;
            });
      console.log(usersNewArr);

    return Object.values(usersNewArr);
}


console.log(usersToObject(users)); 


const users = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-2-22' }
];


function filterUsersByMonth(users, month) { 
        
        //const selectedValue = users.find(item => item === users.birthday)

        //let filterArr = users.filter((item, month) => console.log(users)  )
        //return filterArr ;

}
console.log(filterUsersByMonth(users, 0)); // [{ name: 'Bill', birthday: '1999-1-19' }]

*/

const users = [
  { name: 'John', birthday: '1999-6-12' },
  { name: 'Bill', birthday: '2005-5-19' },
  { name: 'Carol', birthday: '2003-10-11' },
  { name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users) { 

  let result = [];

  for (var i = 0; i <= users.length; i++) {
  
      let dateNow = new Date;
      
      let userBirthday = users[i].birthday;

      let birthday_users = new Date(userBirthday);
          birthday_users.setFullYear(birthday_users.getFullYear());

      dateNow.setFullYear(dateNow.getFullYear() - 18)
          //console.log(dateNow);
         // console.log(birthday_users);
          if (birthday_users < dateNow) {
                   result.push(users[i].name + ',' , users[i].birthday);
    }
    }

  return result.join(' ');

}
console.log(getAdultNames(users)) // 'John 19, Luce 18'
// Не можу виконати завдання 


