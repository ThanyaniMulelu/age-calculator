const btnEL = document.getElementById("btn");
const birthdayEL = document.getElementById("birthday");
const resultEL = document.getElementById("result");

// we get the birthday value from our html form and if user dont enter any value i set an alert
function calculateAge(){
    const birthdayValue = birthdayEL.value;   
    if(birthdayValue === "" ){
        alert("Please enter your birthday");

    }else{

        const age =getAge(birthdayValue)
        resultEL.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;

    }

}
// calculate age based on current date  and birth  date
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
// condition statement
    if(month<0 || (month===0 && currentDate.getDate()<birthdayDate.getDate())){
        age--;

    }

    return age;

}

// Event listener for the button when a user click on it we going to call a function called calculate age.
btnEL.addEventListener("click", calculateAge);