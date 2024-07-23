/*
methods in object 
methods are actions that can be performed on objects 

1.keys
--will return array of keys 
2.values
--will return array of values 
3.entries
--will return array of keys and values 
4.Assign
--is used to merge two objects 
5.Seal
--we can only update the properties 
6.freeze
--we cannot do any modification in object 
7.isFrozen
--used to check whether the particular object is frozen or not 
8.isSealed
--used to check whether the particular object is sealed or not
9.hasOwnProperty
--check that any particular property is present in an object or not 

*/
//behaviour can be made using two ways 
//1.using key 
//2.without key
let obj = {
  empName: "sai",
  emopId: 26, //property
  empSalary: 10000,
  empAge: 22,
dance(){
    //if we store a function inside a key then it is behaviour 
  }
};
obj.dance(); // without using inside  a key 
// obj.dancing();
// console.log(obj.dancing());
// we will call this behaviour by 

//console.log(Object.keys(obj)); // return the array of keys
Object.keys(obj).forEach((ele, i, arr) => {
  console.log(obj[ele]);
}); // if we only require the values of key , to access object value we require keys only 
/*
Object.values(obj).forEach((ele,i,arr1)=>{
    console.log(obj[arr1]);
})*/

console.log(Object.values(obj)); // array of values will be rturned 
console.log(Object.entries(obj)) // it will return array which have sub array inside it [[key:value],[key,value]]

let obj2= {
    empName2: "sai",
    emopId2: 26, //property
    empSalary2: 10000,
    empAge2: 22,
  dance(){
    }
  };

//   console.log(Object.assign(target object , source ,------ multiple))
console.log(Object.assign(obj,obj2)); // two objects will be merged 
//will affect the original obj
//if we want that it doesn't affect the original object then 
// assign({},emp,emp2) // here the target becomes the dummy object


//to make a object freeze we have two methods 
//1. Object.freeze(obj) // it will freeze the object
//2. Object.seal(obj) // it will seal the object

Object.seal(obj2);
delete obj2.emopId;
obj2.mgr=3030;
// we cannot delete or create properties from a object which is sealed 
obj2.emopId2=3030; // we can update the values of the key 
console.log(obj2);

// we cannot delete insert or update in freeze 

// to check if any object is freeze we have isfrozen 
//to check if any object is seal we have isSealed

console.log(Object.isSealed(obj2)) // return type is boolean for both 
console.log(Object.isFrozen(obj))

//objectname.hasownproperty("") -- for find if a particular property is present inside the object or not 
console.log(obj2.hasOwnProperty("empSalary2"))