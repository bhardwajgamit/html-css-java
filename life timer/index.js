let isdobopen =false;
let dateofbirth;
const  settingcogel=document.getElementById("settingcog");
const settingcontentel=document.getElementById("settingcontents");
const initialtextel=document.getElementById('initialtext');
const afterdob_btnel=document.getElementById('afterdob_btn');
const dobbuttonel=document.getElementById('dobbutton');
const dobinputel=document.getElementById('dobinput');

const yearel=document.getElementById('year');
const monthel=document.getElementById('month');
const dayel=document.getElementById('day');
const hourel=document.getElementById('hour');
const miniuteel=document.getElementById('miniute');
const secondel=document.getElementById('second');



const toggeldateofbirthselector=()=>{
    if(isdobopen){
settingcontentel.classList.add("hide");
    }else{
        settingcontentel.classList.remove("hide");
    }
 isdobopen=!isdobopen;
 console.log("toggle,dobisopen");
};
const updateage=() =>{
    const currentdate= new Date();
    const datediff= currentdate-dateofbirth;
    const year=Math.floor(datediff/(1000*60*60*24*365));
    const month=Math.floor(datediff/(1000*60*60*24*365/12));
    const day=Math.floor(datediff/(1000*60*60*24*365/30));
    const hour=Math.floor(datediff/(1000*60*60*24*365/24));
    const miniute=Math.floor(datediff/(1000*60*60*24*365/60));
    const second=Math.floor(datediff/(1000*60*60*24*365/60));

yearel.innerHTML=year;
monthel.innerHTML=month;
dayel.innerHTML=day;
hourel.innerHTML=hour;
miniuteel.innerHTML=miniute;
secondel.innerHTML=second;

};

const setdobhandler=()=>{
const datestring=dobinputel.value;
dateofbirth=new Date(datestring);
if(dateofbirth){
    initialtextel.classList.add('hide');
    afterdob_btnel.classList.remove('hide');
    updateage()
}else{
    initialtextel.classList.add('hide');
    afterdob_btnel.classList.remove('hide');
}
};


updateage();
settingcogel.addEventListener('click',toggeldateofbirthselector);
dobbuttonel.addEventListener('click',setdobhandler);
