//click event task


//first name and 
function blank_val_check(){
    let fname=document.getElementById("fname").value;
    
    if(fname=="" || fname== null){
        document.getElementById("msg").innerText="enter first name"; 
       
        return false;

    }
}
// lastname
    function blank_val_check() {
    let lname=document.getElementById("lname").value;
    if(lname==""){
        document.getElementById("msg1").innerText="enter last name";
        return false;

    }
}
// male and 
function blank_val_check(){
    let male=document.getElementById("msg2").Checked;
    if(male==false|| male== null){
        document.getElementById("msg1").innerText="select gender";
        return false;
    }
}
//female
function blank_val_check(){
    let female=document.getElementById("msg2").Checked;
    if(female==false|| female==null){
        document.getElementById("msg2").innerText="select gender";
        return false;
    }
    
}
//date of birth
function blank_val_check(){
    let dob=document.getElementById("dob").value;
    if(dob=""){
        document.getElementById("msg3").innerText="select the date";
        return false;
    }
}
//city
function blank_val_check(){
    let city=document.getElementById("city").value;
    if(city==-1){
        document.getElementById("msg4").innerText="select city";
        return false;
    }

}
//addresh
function blank_val_check(){
    let adr=document.getElementById("adr").value;
    if(adr==""){
        document.getElementById("msg5").innerText="enter the addresh"
        return false;
    }
}
//mobile no
function blank_val_check(){
    let mno=document.getElementById("mobile_no").value
    if(mno==""){
        document.getElementById("msg6").innerText="enter the mobile no"
    }else if(mno.length<10){
        document.getElementById("msg6").innerText="mobile no must  be in 10 digit";
        return false;

    }
}
//email
function blank_val_check(){
    let email=document.getElementById("email_add").value;
    if(email==""){
        document.getElementById("msg7").innerText="enter email";
        return false;
    }
}
     
