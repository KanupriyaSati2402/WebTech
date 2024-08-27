import React from 'react'
// dynamically taking user input
const Age = () => {
    let age=parseInt(prompt("Enter your age"));
    
    switch(true){
    case age<10:
    return <div>Go to Primary School</div>

    case age>=10 && age <=17:
    return <div>Go to School</div>

    case age>17 && age<21 :
    return <div>Go to College</div>

    case age>=21:
    return <div>Abe kam se kam rakh</div>
    
        

   }
}

export default Age
