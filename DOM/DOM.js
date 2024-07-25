/*
Document is an obj created by browser 
the document obj is the root node for dom tree 
DOM - DOCUMENT OBJECT MODEL 

--web api 
--we can directly modify the html elements using js using dom in it 
w--e can add, remove, modify the html elements using dom in it 

-- allows to modify the document content rendered by the browser without reloading the page 
--document(it is an object it will hold our code in tree format,  document object is a root node for dom tree)

-- we can modify the css also 
-- dom help to make a web page dynamic 
-- every html element is considered as a node (js object) in DOM 
-- every node has properties and methods
-- we can access the html elements using id, class, tag name, etc
-- we can access the html elements using querySelector, querySelectorAll, getElementById, getElementsBy
ClassName, getElementsByTagName, etc

-- document obj model is not a part of java script 
in node js we dont have window obj it is only created for browser 



To target any HTML element dom has 5 types of methods 
1. document.getElementById()
-- it is a method where we used to target the html element which has id 
2. document.getElementsByClassName()
-- it is a method where we used to target the html element which has class
3. document.getElementsByTagName()
-- it is a method where we used to target the html element which has tag name
4. document.querySelector()
-- it is a method where we used to target the html element which has id, class, tag
5. document.querySelectorAll()
-- it is a method where we used to target the html element which has id, class, tag
*/
// console.log(document.getElementById("container"));
// will return the reference for the first object with same id (same id ka phele element hi consider karerga)
//will return a single html element

// console.log(document.getElementsByClassName("box"));
//Returns a HTMLCollection (array like object) 
//will return the reference for all the objects with same class (same class ka sabhi element hi target honge)
//no array method will work as it is a object that just look like array 
//we can access the values from htmlcollection by the use of index value for the particular element 
// let htmldocument = document.getElementsByClassName("box")
// console.log(htmldocument[0]);

// console.log(document.getElementsByTagName("section"));
// will also return htmlcollection

// console.log(document.querySelector("#container"))
// console.log(document.querySelector(".box"))
// it will return the first element with the same id or class or tag name
//we can target any html element who have id class or tag , syntax is different (id -- # , class -- . , tagname nothing)
// will target the first element only , returns 1 single element 

// console.log(document.querySelectorAll("#container"))
// console.log(document.querySelectorAll(".box"))
// console.log(document.querySelectorAll("section"))
// it will return the all the elements with the same id or class or tag 
// will target all the element , returns all the elements in the form of array in the form of nodelist 
// nodelist --array like object (each html element is nothing but a node)
// we can access the elements by using indedx values 

let sec =document.getElementById("container")
sec.style.backgroundColor="red";
sec.style.borderRadius="50%";

let sec1 =document.getElementsByClassName("box")
sec1[1].style.backgroundColor="blue";
sec1[1].style.borderRadius="50%";

let sec2 =document.getElementsByClassName("box")
sec2[2].style.background = 'linear-gradient( to right , rgb(237, 200, 183),rgb(243, 176, 93),rgb(234, 112, 6))'; 
sec2[2].style.boxShadow = ' 2px 3px 4px black'

sec2[2].style.borderRadius="50%";
