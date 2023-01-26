const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
const user = document.querySelector('.user');
const loginRow = document.querySelector('.login-row');
const common = document.querySelector('.common_log-reg');


const loginSwitch = document.querySelector('.login-form');
const registerSwitch = document.querySelector('.register-form'); 
const form = document.getElementById('form');
const form_second = document.getElementById('form_second')
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const login = document.querySelector('.login-button');
const register = document.querySelector('.register-button');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email_second = document.getElementById('emailRegister'); 
const secondPassword = document.getElementById('passwordd');
const forms = document.getElementById('forms');
const footer_email = document.getElementById('footer_email');
const footer_name = document.getElementById('footer_name');





//pop up
const openModal = () => {

    overlay.classList.remove('visible');
    loginRow.classList.remove('visible');

    
}

const closeModal = () => {

    overlay.classList.add('visible');
    common.classList.add('visible');
    if(common !== 'visible'){
        location.reload()
     }
   
  
}


user.addEventListener('click', openModal);

close.addEventListener('click', closeModal);


const registerSide =() => {
    registerSwitch.classList.remove('visible');
    loginSwitch.classList.add('visible');
    login.classList.remove('active');
    register.classList.add('active');
    
}

const loginSide = () => {
    loginSwitch.classList.remove('visible');
    registerSwitch.classList.add('visible');
    register.classList.remove('active');
    login.classList.add('active');
}

register.addEventListener('click',registerSide);
login.addEventListener('click',loginSide);



//login register

const error = (input,message) =>{
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText =  message;
    div.className = 'invalid-feedback'

}


const success = (input) =>{
    input.className = 'form-control is-valid'
}

const checkEmail = (input) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(re.test(input.value)){
          success(input);
      }else{
          error(input, 'Zehmet olmasa email unvaninizi daxil edin');
      }
};

const checkRequired = (inputs) =>{
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input, 'Email ve/veya sifre yalnisdir')
        }else{
            success(input)
        }
    })
}


const checkLength = (input,min,max) =>{
    if(input.value.length < min ){
        error(input, `${input.id} en az ${min} xanadan ibaret olmalidir`)
    }else if(input.value.length > max){
        error(input, `${input.id} en cox ${max} xanadan ibaret olmalidir`)
    }else{
        success(input)
    }
}


const checkPasswords = (input1,input2) =>{
    if(input1.value !== input2.value){
        error(input2, 'parolalar eyni deyil')
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    checkEmail(email);  
    checkRequired([password]);
    checkLength(password,5,12)

})


form_second.addEventListener('submit', function(e){
    e.preventDefault();
    checkEmail(email_second );
    checkRequired([secondPassword,repassword,username,surname]);
    checkLength(username,3,15);
    checkLength(surname,5,15);
    checkLength(secondPassword,5,12);
    checkLength(repassword,5,12);
    checkPasswords(secondPassword,repassword);
})


const trues = (input) => {
input.style.border = '3px solid green'
}


const errors = (input) => {
    input.style.border = '3px solid red'
    }
    

const checkEmails = (input) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(re.test(input.value)){
          trues(input);
      }
      else{
            errors(input);
      }
};

const checkName = (input,min,max) =>{
    if(input.value === ''){
        errors(input);
    
    }
    else if(input.value.length < min ){
        errors(input, `${input.id}  `)
    }else if(input.value.length > max){
        errors(input, `${input.id} `)
    }else{
        trues(input)
    }
}

forms.addEventListener('submit', function(e){
    e.preventDefault();
    checkName(footer_name,3,7)
    checkEmails(footer_email)
    
})


//dark ligh mode

const theme = localStorage.getItem("theme");
const icon =document.getElementById('icon');

icon.addEventListener('click', () => {
    document.body.classList.toggle('darks');
    if(document.body.classList.contains('darks') ){
        icon.src = './assets/img/moon.svg'
        localStorage.setItem("theme", "darks");
        
    }else{
        icon.src = './assets/img/sun.svg'
        localStorage.setItem("theme", "light");
  
    }
})
if(theme ==='darks'){
        document.body.classList.add('darks');
        icon.src = './assets/img/moon.svg'
    
    } 


    //sidebar
const sidebarIcon = document.getElementById('sidebarIcon');
const productList = document.querySelector('.product_list');
const closeBar = document.querySelector('.closeBarr')

sidebarIcon.addEventListener('click', () => {
    if(productList.classList.contains('active') ){
        productList.classList.remove('active');
        
    }else{
        productList.classList.add('active') ;
        sidebarIcon.style.visibility = 'hidden';
        closeBar.style.visibility = 'visible';
    }
})


closeBar.addEventListener('click', ()=> {
    if(productList.classList.contains('active') ){
        productList.classList.remove('active');
        closeBar.style.visibility = 'hidden';
        sidebarIcon.style.visibility = 'visible';
        
        
    }else{
        productList.classList.add('active');
        sidebarIcon.style.visibility = 'hidden';
        closeBar.style.visibility = 'visible';
    }
})


//basket

function getProducts() {
let basket = JSON.parse(localStorage.getItem('basket'));

if(basket.length === 0){
    let alert_div = '0';

    alert_div  = `
    <div class="alert text-center alert-danger" role="alert">
    Basket is empty!
        </div>
    `

    document.getElementById('list').innerHTML = alert_div
}
else{
    let div = '';

    basket.forEach(item => {
        div+= `
        <div class="box d-flex justify-content-between align-items-center">
        <div class="col-lg-2">
            <img src=${item.Image} alt="">
        </div>
        <div class="col-lg-3">
            <h5>Mehsulun adi: ${item.Name}</h5>
        </div>
        <div class="col-lg-2">
            <h6>Qiymet: ${item.Price}</h6>
        </div>
        <div class="col-lg-2">
            <span>Count: ${item.Count}</span>
        </div>
    </div>
        
        `
    })

    document.getElementById('list').innerHTML = div;
}
}


getProducts();


function Clear() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    basket.length = 0;
    localStorage.setItem('basket', JSON.stringify(basket))
    getProducts();
    countProduct();

}



function countProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerHTML = basket.length
}

countProduct();



