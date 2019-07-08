let uName = document.getElementById('userRegname');
let uAddress = document.getElementById('userRegaddress');     
let uPhone = document.getElementById('userRegphone');
let uEmail = document.getElementById('userRegemail');
let uPassword = document.getElementById('userRegpassword');
let uRepassword = document.getElementById('userRegrepassword');
let uSubmit = document.getElementById('formSubmit');
let isName = false;
let isAddress = false;
let isNumber = false;
let isEmail = false;
let issame = false;
// let ispass = false;
let namemsg = document.getElementById('nameMessage');
let addressmsg = document.getElementById('addressMessage');
let phonemsg=document.getElementById('phoneMessage');
let emailmsg=document.getElementById('emailMessage');
let passwordmsg=document.getElementById('passwordMessage');
let repasswordmsg=document.getElementById('repasswordMessage');

let namesuccess = document.getElementById('nameSuccess');
// let hashedPassword;


uName.addEventListener('input',function(e){
    // e.preventDefault()
    // alert();
    // debugger;
    // let sname = uname.value;
    
    if((uName.value == "")){
        namemsg.innerHTML = "Invalid";
        namemsg.style.color = "#FF0000";
        isName = false;
    }

    else if((uName.value.length <=2 ) || (uName.value.length>50)){
        namemsg.innerHTML = "invalid";
        namemsg.style.color = "#FF0000";
        isName = false;
    }

    else {
        namemsg.innerHTML = "valid";
        namemsg.style.color = "#008000";
        isName = true;
    }
    // else{
    //     isName = true;
    //     nameerror.innerHTML = "valid";
    // }
    
})

uAddress.addEventListener('input', function(e){
    // debugger;
    // alert('hi');
    if (uAddress.value == "" || !isNaN(uAddress.value)){
        addressmsg.innerHTML = "Enter Valid Address";
        addressmsg.style.color = "#FF0000";
        isAddress=false;
    }

    else{
        // addressmsg.innerHTML = "valid";
        addressmsg.innerHTML = "Valid";
        addressmsg.style.color = "#008000";
         isAddress=true;
    }
})

uPhone.addEventListener('input', function(e){
    // alert('hi');
    let noRegex = /^9+([7-8][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]+)/;
    if (uPhone.value == "" || !(noRegex.test(uPhone.value))){
        phonemsg.innerHTML = "invalid";
        phonemsg.style.color = "#FF0000";
        isNumber=false;
    }

    else{
        phonemsg.innerHTML = "valid";
        phonemsg.style.color = "#008000";
        isNumber=true;
    }
})

uEmail.addEventListener('input', function(e){
    // alert('hi');
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (regex.test(uEmail.value)) {
        emailmsg.innerHTML = "valid";
        emailmsg.style.color = "#008000";
        isEmail=true;
    }

    else{
        emailmsg.innerHTML = "invalid";
        emailmsg.style.color = "#FF0000";
        isEmail=false;
    }
})

uPassword.addEventListener('input', function(e){
    // alert('hi');
    if (uPassword.value == ""){
        passwordmsg.innerHTML = "Enter Password";
        passwordmsg.style.color = "#FF0000";
        isPass=false;
    }

    // else if (uPassword.value.length != 8 && uPassword.value.length < 8){
    //     passwordmsg.innerHTML = "Password should be have more than 8 characters";
    //     passwordmsg.style.color = "#FF0000";
    //     isPass=false;
    // }

    else{
        isPass=true;
        // hashedPassword = encrypt(uPassword.value);
    }
})

uRepassword.addEventListener('input', function(e){
    // alert('hi');
    if(uRepassword.value == ""){
        repasswordmsg.innerHTML = "the field is empty";
        repasswordmsg.style.color = "#FF0000";
        issame = false;
    }


    else if (uPassword.value ==   uRepassword.value  ){
        repasswordmsg.innerHTML = "Password match";
        repasswordmsg.style.color = "#008000";
        issame = true;
    }

    
    else{
        repasswordmsg.innerHTML = "Password does not match"; 
        repasswordmsg.style.color = "#FF0000";
        issame = false;
    }
})

function encrypt(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
function decrypt(message = '', key = ''){
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}



uSubmit.addEventListener('click',function(e){
    e.preventDefault()
    
    if ((isName == true) && (isAddress ==true) && (isEmail == true) && (isNumber==true) && (isEmail==true) && ( issame == true)){
        let list = {
            Name: document.getElementById('userRegname').value,
            Address: document.getElementById('userRegaddress').value,
            Phone: document.getElementById('userRegphone').value,
            Email: document.getElementById('userRegemail').value,
            Password: encrypt(document.getElementById('userRegpassword').value, "neha") 
        }
       
        let length = localStorage.length;
        let id = 'data'+length;
        localStorage.setItem(id, JSON.stringify(list)); 
        
              
        // window.location = 'display.html';
        // window.location = 'login.html';
        window.open("./login/login.html");
    
    }

    
})