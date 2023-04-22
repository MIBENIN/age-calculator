let inputDay=document.getElementById("day");
let inputMonth=document.getElementById("month");
let inputYear=document.getElementById("year");
const submitBtn=document.getElementById("submit");
const inputs=document.querySelectorAll(".input-group");

let today=new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth()+1;
const currentDate = today.getDate();

console.log(currentYear)

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    ageCalculate();
})

const ageCalculate=()=>{
    inputs.forEach(input => {
        const parent=input.parentElement;
        if(!Number(input.value)){
            input.style.borderColor="red";
            parent.querySelector(".msg").innerHTML="This field is required";
        }
        if(inputMonth.value > 12){
            inputMonth.style.borderColor="red";
            inputMonth.parentElement.querySelector(".msg").innerHTML="Must be valid month";
        }
        if(inputYear.value > currentYear){
            inputYear.style.borderColor="red";
            inputYear.parentElement.querySelector(".msg").innerHTML="Must be in past";
        }
        if(inputDay.value > 31){
            inputDay.style.borderColor="red";
            inputDay.parentElement.querySelector(".msg").innerHTML="Must be valid day";
        }
    });

    let outputYear,outputMonth,outputDay;
    let months = [31,28,31,30,31,30,31,31,30,31,30,31];
    outputYear = currentYear - inputYear.value;

    if(currentMonth >= inputMonth.value){
        outputMonth = currentMonth - inputMonth.value;
    }
    else{
        outputYear--;
        outputMonth = 12 + currentMonth - inputMonth.value;
    }
   
    if(currentDate >= inputDay.value){
        outputDay = currentDate - inputDay.value;
    }
    else{
        outputMonth--;
        let days = months[currentMonth - 2];
        outputDay = days + currentDate - inputDay.value;
        if(outputMonth < 0){
            outputMonth = 11;
            outputYear--;
        }
    }
    document.getElementById("outputYear").innerHTML=outputYear;
    
    document.getElementById("outputMonth").
    innerHTML=outputMonth;

    document.getElementById("outputDay").innerHTML=outputDay;
}

