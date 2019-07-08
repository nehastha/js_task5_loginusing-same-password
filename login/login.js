let lEmail = document.getElementById('userLogmail');
let lPassword = document.getElementById('userLogpass');
// let ldisplay = docmunt.getElementById('welcome');

var length = localStorage.length;
let login = false;

// for(var i=0;i<length;i++){
//     firstArray[i]=localStorage.getItem("data"+i)
//     if(firstArray[i]){
//         second[i]=firstArray[i]
//     }


// }
var firstArray = new Array
for (var i = 0; i < length; i++) {

    firstArray[i] = localStorage.getItem("data" + i)

}

// firstArray.forEach(function(item)
// { 
//     debugger;
//     var t =JSON.parse(item);

//     if ((t.email == lEmail)&& (t.password==lPassword)){
//         alert ('success');
//     }
//     else{
//         alert ('incorrect password');
//     }


// //  html +=  "<li>" + "Name : " + t.Name  + " , "+ "Address : " + t.Address + "</li>"


// });
// let message='';
// let key="neha";
function encrypt(message = '', key = '') {
    var message = CryptoJS.AES.encrypt(message, key);
    return message.toString();
}
function decrypt(message = '', key = '') {
    debugger;
    var code = CryptoJS.AES.decrypt(message, key);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);

    return decryptedMessage;
}
var test = "";
loginBtn.addEventListener('click', function (e) {
    // alert('hi');
    firstArray.forEach(function (item) {
        // debugger;
        if (test == "true") {
            return false;
        }
        var t = JSON.parse(item);
        let depassword = decrypt(t.Password, "neha")
        if ((t.Email == lEmail.value) && (depassword == lPassword.value)) {
            // debugger;
            login = true;
            test = "true";

        }
        else {

            login = false;

        }

    

        // if ((t.Email == lEmail.value)){
        //     debugger;
        //     document.getElementById('welcome').innerHTML = "Welcome to the page";
        // }


    //  html +=  "<li>" + "Name : " + t.Name  + " , "+ "Address : " + t.Address + "</li>"
     
    
    });
debugger;
if (login == true) {
    alert('success');

    test = "";
    window.location = 'new.html';

}

else {
    alert('fail');
    test = "";
}
})

