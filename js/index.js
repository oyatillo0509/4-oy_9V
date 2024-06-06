// 1 - masala

// function push_mass() {
//   let myArray = [];

//   for (let i = 0; i < 5; i++) {
//     myArray.push(i + 1);
//   }

//   return myArray;
// }

// console.log(push_mass());

// 2-masala

// function to_string() {
//   let bosh = [];

//   bosh.push("Oyatillo1");
//   bosh.push("Oyatillo2");
//   bosh.push("Oyatillo3");

//   bosh.pop();

//   let res = bosh.toString();

//   return res;
// }

// console.log(to_string());

// 3-masala

// function uzunlik() {
//   let arr = [];

//   arr.unshift("1");
//   arr.unshift("2");
//   arr.unshift("3");
//   arr.unshift("4");

//   arr.reverse();

//   let arr_l = arr.length;

//   return {
//     malumotlari: arr,
//     uzunligi: arr_l,
//   };
// }

// console.log(uzunlik());

// 4-masala

// function arr_2() {
//   let arr = [];

//   arr.unshift("1");
//   arr.unshift("2");

//   arr.shift();

//   let res = arr.join(", ");

//   return res;
// }

// console.log(arr_2());

// 5-masal

// function pop_m(arr) {
//   let arr_p = arr.pop();

//   let arr_l = arr.length;
//   let arr_f = 0;
//   if (arr.length > 0) {
//     arr_f = arr[0];
//   }

//   return {
//     ochirildi: arr_p,
//     uzunlik: arr_l,
//     birinchisi: arr_f,
//   };
// }

// console.log(pop_m([4, 7, 8, 9, 2, 1]));

// 6-masala

// function at_m(arr, new_e) {
//   arr.push(new_e);

//   let a = arr.at(-1).toString();

//   return a;
// }

// console.log(at_m([4, 7, 8, 9, 2, 1], 5));

// 7-masala

// function unshift_m(arr, new_e) {
//   arr.unshift(new_e);

//   arr.reverse();

//   return arr.length;
// }

// let arr = [4, 7, 8, 9, 2, 1];
// let new_e = 5;

// let length = unshift_m(arr, new_e);
// console.log(arr);
// console.log("uzunligi:", length);

// 8-masala

// function shift_m(arr) {
//   arr.shift();

//   let res = arr.join(", ");

//   return res;
// }

// console.log(shift_m([4, 7, 8, 9, 2, 1]));

// 9-masala

// function push_m(arr) {
//   arr.push(10);
//   arr.push(11);
//   arr.push(12);

//   arr.reverse();

//   return arr.length;
// }

// let array = [4, 7, 8, 9, 2, 1];
// let length = push_m(array);

// let str_go = array.join(", ");

// console.log("massiv:", str_go);
// console.log("uzunligi:", length);

// 10-masala

// function pop_m(arr) {
//   arr.pop();
//   arr.shift();

//   let length = arr.length;
//   arr.reverse();
//   return { length, rev: arr };
// }

// let res = pop_m([4, 7, 8, 9, 2, 1]);

// console.log("soni:", res.length);
// console.log("Teskari:", res.rev.join(", "));

// 11-masala

// function to_string(arr) {
//   let tes = arr.slice().reverse();
//   let str = tes.toString();

//   return { tes, length: str.length };
// }

// let array = [4, 7, 8, 9, 2, 1];
// let res = to_string(array);

// console.log("Teskari:", res.tes.join(", "));
// console.log("String uzunligi:", res.length);

// 12-masala

// function concat_m(arr1, arr2) {
//   let qosh = arr1.concat(arr2);

//   let uz = qosh.slice(1, qosh.length);

//   console.log("res massiv:", qosh);

//   return uz.length;
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let res = concat_m(arr1, arr2);
// console.log("Massiv uzunligi:", res);

// 13-masala

// function splice_m(arr) {
//   arr.splice(2, 3);

//   let str = arr.join("");

//   let num = Number(str);

//   return num.toString().length;
// }

// console.log(splice_m([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 14-masala

// function splice_m(arr) {
//   let del = arr.slice(2);

//   let nat = del.reverse();

//   console.log("massiv:", nat);

//   return nat.length;
// }

// console.log(splice_m([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 15-masala

// function flat_m(arr) {
//   let bir = arr.flat();

//   let a = bir.pop();

//   console.log("Natija:", a);
// }

// console.log(
//   flat_m([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );

// 16-masala

// function cup_m(arr) {
//   let cup = arr.at(2);

//   arr.unshift(cup);

//   return arr.length;
// }

// console.log(cup_m([1, 2, 3, 4, 5]));

// 17-masala

// function splice_m(arr) {
//   let tes = arr.reverse();

//   let str = tes.join(", ");

//   let a = str.slice(-1);

//   return a;
// }
// console.log(splice_m([1, 2, 3, 4, 5]));

// 18-masala

// function splice_m(arr) {
//   let cup = arr.slice(0, 2);

//   let del = arr.splice(3);

//   let res = cup.concat(del);

//   return res;
// }

// console.log(splice_m([1, 2, 3, 4, 5]));

// 19-masala

// function concat_m(arr) {
//   let del = arr.splice(2, 2);

//   let tes = arr.reverse();

//   let res = tes.concat(del);

//   return res;
// }

// console.log(concat_m([1, 2, 3, 4, 5]));

// 20-masala

// function join_m(arr) {
//   let str = arr.join(", ");
//   console.log(str);

//   let new_a = str.split(", ");

//   return new_a;
// }

// console.log(join_m([1, 2, 3, 4, 5]));
 
