const name = document.getElementById("name")
const tel = document.getElementById("number")
let input = document.querySelector("#email")
let send = document.querySelector(".btn");
let date = document.querySelector("#date")


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    send.addEventListener('click', () => {
    console.log("aa")

        if(input.value.match(mailformat)&&!isNaN(tel.value)){
            document.getElementById("name").value = "";
            document.getElementById("number").value = "";
            document.querySelector("#email").value="";
            document.querySelector("#date").value="";
            console.log("gg")
            alert("submitted");
            window.location.reload();
            
        }else{
            alert("email or phoner number not valid")
        }
      
    
    
    
    
    
    })
    






console.log("aa2")
