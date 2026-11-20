function login (cb) {
    console.log ("Login Successfully");
 cb()   
} 

function username (cb1){
    console.log ("Enter the UserName");
 cb1() 
}

function password (cb3){
        console.log("Enter Password");
cb3()
}

function msg () {
    console.log ("You are successfully Logged_In")
}

login ( ()=>{
    username (()=>{
        password(()=>{
            msg ()
        })
    })
});

