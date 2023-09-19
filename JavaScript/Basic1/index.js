// //  // line below is used to print on the console window
// // console.log("Namaste Dunia version3");
// // console.log("Hello");

// // let a = 5 
// // console.log(a)

// // let srint = 'Sagar'
// // console.log(srint)

// // const num = 12

// // let name1 = 'Sagar'

// // console.log(name1)

// // name1 = 13242

// // console.log(name1)

// // let names = ['sagar','prakash','giradkar']
// // console.log(names[2])

// // let ab = {
// //     saga :"Name",
// //     praka : 123
// // }

// // console.log(ab)
// // console.log(ab.praka)

// // a = 10 ; 
// // b = 213;
// // a + b 
// // console.log(a + b)

// // console.log(a)

// // console.log(a--)


// // console.log(a)


// // console.log(++a)

// // console.log(22>3)

// // console.log(22===44)

// // let c = 10
// // let s = '10'

// // console.log(c == s)

// // console.log(a === c)

// // let ag = 17 

// // let status1  = (ag >= 10) ? 'Yes' : 'No'

// // console.log(status1)

// // console.log("a + b + c + d + e + f * g")


// // const rectangle = {
// //     length : 1,
// //     breadth : 563,
// //     draw : function(){
// //         console.log("Drawing an rectangle")
// //     }
// // }

// // const rectangle1 = {
// //     length : 1,
// //     breadth : 563,
// //     draw : function(){
// //         console.log("Drawing an rectangle")
// //     }
// // }

// // const rectangle2 = {
// //     length : 1,
// //     breadth : 563,
// //     draw : function(){
// //         console.log("Drawing an rectangle")
// //     }
// // }


// // //factory function

// // function createRectangle(){
    
// // return rectangle2 = {
// //     length : 1,
// //     breadth : 563,
// //     draw : function(){
// //         console.log("Drawing an rectangle")
// //     }
// // }
// // }

// // let rectangle11 = createRectangle();

// // function Rectangle(){
// //     this.length = 1;
// //     this.breadth = 2 ;
// //     this.draw = function(){
// //         console.log("Drawing")
// //     }
// // };

// // // object creation using rectangle

// // let rectangleObject = new Rectangle();

// // // Dynamic nature of an object

// // rectangleObject.color = 'yellow';
// // console.log(rectangleObject)

// // let p = 20;
// // let q = 27878;

// // console.log(p);
// // console.log(q);

// // let z = {}

// let lastName = "Sagar"

// let fisrtName = new String("Sagar")

// let message = 'This is my first message'

// let words = message.split(" ")

// console.log(words)

// let message3 = `This is my
//     fist
//     message in Jav
//     ascript`

// console.log(message3)

// let mess = `This is my first name ${lastName}
//     Welcome
//     to the world of Javascript Programming`

// console.log(mess)

// let date = new Date()

// console.log(date)

// let dat2 = new Date('June 20 1983')

// console.log(dat2)

// dat2.setFullYear

// // Arrays 


// let numbers = [1,2,4,5,7,7,567];

// console.log(numbers)

//  // we want to check if a number exist in a array or not \

//  if(numbers.indexOf(55) !== -1){
//     console.log("Present")
//  }

// console.log(numbers.indexOf(4,5))

// let courses = [
//     {no:1,name1:'Sagar'},
//     {no:2 , name1 : "Pavan"}
// ]

// console.log(courses)

// const t1 = performance.now();
// for(let i=1 ; i<=100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para ' + i;

//     document.body.appendChild(newElement);
// }

// // optimizing a bit
// const t2 = performance.now();
// console.log('This took '+(t2-t1) + 'ms');


// let myDiv = document.createElement('div');

// for(let i=1 ;i<=100 ;i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is a Para '+ i;

//     myDiv.appendChild(element);
// }

// document.body.appendChild(myDiv);

// function addPara(){
//     let para = document.createElement('p');
//     para.textContent = 'Js is Single';
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para = document.createElement('p');

// }


// setTimeout(function(){
//     console.log("Third");
// });


// function sync(){
//     console.log('First');
// }

// sync();

// console.log('Second')

// let meraPromice = new Promise(function)