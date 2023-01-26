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


//slide 
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const img_2 = document.querySelector('.img_2');

let slidsArr = [

{
   name: 'product_1',
   image: './assets/img/mainSlide.webp'
},

{
   name: 'product_2',
   image: './assets/img/mainSlide-2.jpg'
},
   
]


let index = 0;
let slaytCount = slidsArr.length;
let interval;

let settings = {
   duration:4000,
   random:false
   
};


timeSlide(settings);



left.addEventListener('click', () =>{
   index--;
   showSlide(index);
   if(index ===1){
       img_2.classList.add('visible');
       right.classList.add('green');
       left.classList.remove('green')
    }else if(index === 0){
       img_2.classList.remove('visible')
       right.classList.remove('green');
       left.classList.add('green')
    }
  
})

right.addEventListener('click', () => {
   index++;
   showSlide(index);
   if(index ===1){
       img_2.classList.add('visible');
       right.classList.add('green');
       left.classList.remove('green')
    }else if(index === 0){
       img_2.classList.remove('visible')
       right.classList.remove('green')
       left.classList.add('green')
    }

    
})



   function timeSlide(setting){
       let prev;
       interval= setInterval(function(){
           if(settings.random){

               do{
                   index = Math.floor(Math.random() * slaytCount)
               }while (index == prev);
               prev =index
           }else{

             if(slaytCount == index + 1){
               index = -1;
             }


             showSlide(index);
     
             index++
           }
           showSlide(index)

           if(index ===1){
               img_2.classList.add('visible');
               right.classList.add('green');
               left.classList.remove('green')
            }else if(index === 0){
               img_2.classList.remove('visible')
               right.classList.remove('green');
               left.classList.add('green')
            }
       },setting.duration)
   }

const showSlide = (i) =>{
   if(i<0){
       index = slaytCount -1
       
   }

   if(i>=slaytCount){
       index = 0
   }

   document.querySelector('.product_img').setAttribute('src',slidsArr[index].image);

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

if(localStorage.getItem('basket') === null ){
    localStorage.setItem('basket', JSON.stringify([]));
}

let buttons = document.querySelectorAll('.btn_add');

for(let btn of buttons){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        let basket = JSON.parse(localStorage.getItem('basket'));
        let prod_id = e.target.parentElement.parentElement.id;
        let prod_img = e.target.parentElement.firstElementChild.src;
        let prod_name = e.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerHTML;
        let prod_price = e.target.parentElement.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerHTML
        

        console.log(prod_id);
        console.log(prod_img);
        console.log(prod_name);
        console.log(prod_price);


        let existProd = basket.find(x => x.Id == prod_id);
        console.log(existProd);

        if(existProd === undefined){
            basket.push({
                Id: prod_id,
                Image:prod_img,
                Name:prod_name,
                Price:prod_price,
                Count: 1
            })
        }
        else{
            existProd.Count +=1
        }


        localStorage.setItem('basket', JSON.stringify(basket));
        CountProduct();
    })
}



function CountProduct() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerHTML = basket.length    
}   

CountProduct();


