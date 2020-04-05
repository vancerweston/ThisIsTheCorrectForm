let done = [];

function firstNameCheck(){
    let firstName  = document.getElementById('firstName').value;

    let firstRGEX = /^\w{2,}/gm;
    let firstNameResult = firstRGEX.test(firstName); //boolean = true

    if(firstNameResult){
        done.push('firstName');
        console.log('The first name passes inspection.');
    }else{
        alert(`First Name is in an invaild format. Please enter a first name with more than one character. Example: 'Vance'`)
    }
}

function lastNameCheck(){
    let lastName  = document.getElementById('lastName').value;
    let lastRGEX = /^\w{2,}/gm;
    let lastNameResult = lastRGEX.test(lastName); //boolean = true

    if(lastNameResult){
        done.push('lastName');
        console.log('The last name passes inspection.');
    }else{
        alert(`Last Name is in an invaild format. Please enter a last name with more than one character. Example: 'Weston'`)
    }
}

function addressCheck(){
    let address = document.getElementById('address').value;
    let addressRGEX = /(?:^\d{1,})(?: \w{1,})(?: \w{1,})?(?: \d{1,})?(?: \w{1,})?(?:\.)?(?: \w{1,})?(?: \d{1,})?/gm;
    let addressResult = addressRGEX.test(address); //boolean = true

    if(addressResult){
        done.push('address')
        console.log('The address passes inspection');
    }else{
        alert(`Your address does not match a normal address format. The format must have a house number and street name. Example: '123 East Street'`);
    }
}

function cityCheck(){
    let city = document.getElementById('city').value;
    let cityRGEX = /\w{1,}(?: \w{1,})?(?: \w{1,})?(?: \w{1,})?/gm;
    let cityResult = cityRGEX.test(city);

    if(cityResult){
        done.push('city');
        console.log('The city has passed inspection');
    }else{
        alert(`The city is not in a valid format. Your city must contain more than one character. Example: 'New York'`);
    }
}

function stateCheck(){
    let state = document.getElementById('state').value;
    let stateTest = state.toUpperCase();
    let stateRGEX = /^A[LKSZRAEP]$|^C[AOT]$|^D[EC]$|^F[LM]$|^G[AU]$|^HI$|^I[ADLN]$|^K[SY]$|^LA$|^M[ADEHINOPST]$|^N[CDEHJMVY]$|^O[HKR]$|^P[ARW]$|^RI$|^S[CD]$|^T[NX]$|^UT$|^V[AIT]$|^W[AIVY]$/gm;
    let stateResult = stateRGEX.test(stateTest);

    if(stateResult){
        done.push('state');
        console.log('The state has passed inspection');
    }else{
        alert(`The state is not in a valid format. Your state must contain a vaild US state code. Example: UT, WY, KS... `)
    }
}

function zipCodeCheck(){
    let zipCode = document.getElementById('zipCode').value;
    let zipCodeRGEX = /^\d{5}$|^\d{5}(?:-\d{4})?$/gm;
    let zipCodeResult = zipCodeRGEX.test(zipCode);

    if(zipCodeResult){
        done.push('zipCode');
        console.log('The Zip Code has passed inspection');
    }else{
        alert(`Your Zip Code does not match a proper format. Please use the following formats: 'XXXXX' or 'XXXXX-XXXX'`);
    }
}

function phoneNumCheck(){
    let phoneNum = document.getElementById('phoneNum').value;
    let phoneNumRGEX = /^(?:\d\(\d{3}\) ?\d{3}-\d{4})$|^(?:\d?\(\d{3}\) ?\d{3}-\d{4})$|^(?:\d{3}-\d{3}-\d{4})$|^(?:\d{10})$/gm;
    let phoneNumResult = phoneNumRGEX.test(phoneNum);

    if(phoneNumResult){
        done.push('phoneNum');
        console.log('The Phone Number has passed inspection');
    }else{
        alert(`Your phone number does not match a valid format. Please use the following formats:
        1(801)555-1212
        1(801) 555-1212
        (801)555-1212
        (801) 555-1212
        801-555-1212
        8015551212`);
    }
}

function passCheck(){
    let pass = document.getElementById('pass').value;
    let passRGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*(){}:;'"<>,./?\[\]]).{8,}$/gm;
    let passResult = passRGEX.test(pass);

    if(passResult){
        done.push('pass');
        console.log('The Password has passed inspection');
    }else{
        alert(`Your password must be at least 8 characters long, including one capitalized letter, one digit, and one special character: 
                ! @ # $ % ^ & * ( ) [ ] { } ; : ' " < > , . / ?`)
    }
}

function confirmPass(){
    let confirmPass = document.getElementById('confirmPass').value;
    let confirmPassRGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*(){}:;'"<>,./?\[\]]).{8,}$/gm;
    let confirmPassResult = confirmPassRGEX.test(confirmPass);

    if(confirmPassResult){
        done.push('confirmPass1')
        console.log('The Confirm Password passed inspection');
    }else{
        alert('Your confirm password must also fit format.');
    }

    if(pass.value === confirmPass){
        done.push('confirmPass2')
        console.log('The Passwords match');
    }else{
        alert('Your passwords do not match. Please enter them again.')
    }
}

function navPage(){
    const formArr =  ["firstName", "lastName", "address", "state", "zipCode", "phoneNum", "pass", "confirmPass1", "confirmPass2"];

    console.log(formArr[1,8], done[1,8]);

    if(formArr.length == done.length){
        window.location.href = 'finished.html';
        console.log('hi')
    }
}

function formCheck() {
    firstNameCheck();
    lastNameCheck();
    addressCheck();
    stateCheck();
    zipCodeCheck();
    phoneNumCheck();
    passCheck();
    confirmPass();
    navPage();
}

    document.getElementById('submit').addEventListener('click',function(event){
        event.preventDefault()
    });


    