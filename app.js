let userscore=document.querySelector("#user")
let compScore=document.querySelector("#comp")
let message=document.querySelector("#msg")
let rock=document.querySelector("#rock")
let paper=document.querySelector("#paper")
let Scissors=document.querySelector("#scissors")
let userchoice=document.querySelector("#userChoice")
let compChoice=document.querySelector("#compChoice")
let messagediv=document.querySelector(".inside")

let comp=()=>{
    let random=Math.floor(Math.random()*3)+1
    if(random===1){
        return "Rock"
    }else if(random===2){
        return "Paper"
    }else{
        return "Scissors"
    }
}

let score=(user,comp)=>{
   
   userscore.innerText=parseInt(userscore.innerText)+user
   compScore.innerText=parseInt(compScore.innerText)+comp
}

let Showmessage=(msg,color)=>{
     message.innerText=msg
     messagediv.style.backgroundColor=color
}

let showChoice=(userSelection,computerSelection)=>{
   userchoice.innerText=userSelection;
   compChoice.innerText=computerSelection;
}

let check=(userSelection)=>{
  let computerSelection=comp()
  console.log(userSelection,"userselection");
  console.log(computerSelection,"computerselection");
  
  
  showChoice(userSelection,computerSelection)

  if(userSelection===computerSelection){
    Showmessage("Tie","black")
  }
  else if((userSelection=="Rock" && computerSelection=="Paper") ||
         (userSelection=="Paper" && computerSelection=="Scissors") ||
         (userSelection=="Scissors" && computerSelection=="Rock")){

        score(0,1)
        Showmessage("computer Win","Red")

  }else{
        score(1,0)
        Showmessage("You Win","Green")

  
}
}

rock.addEventListener('click',()=>{

    check("Rock")
})

paper.addEventListener('click',()=>{

    check("Paper")
})

Scissors.addEventListener('click',()=>{

    check("Scissors")
})
