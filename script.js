const letter =
"Dear Shree,\\n\\nTonight, under this little digital moon, I just wanted to write something simple for you. You are special in a way that words cannot fully explain. Every day of this countdown is a small effort to make you smile before your birthday.\\n\\nThis letter is not about perfect words. It is about honest care, sweet effort, and one little reminder that you deserve to feel valued every single day. 🌙❤️";

let index = 0;
let started = false;

function openLetter(){
  if(started) return;

  started = true;
  document.getElementById("letterBox").innerHTML = "";
  typeWriter();

  for(let i=0;i<25;i++){
    createStar();
  }
}

function typeWriter(){
  const box = document.getElementById("letterBox");

  if(index < letter.length){
    const char = letter.charAt(index);

    if(char === "\\n"){
      box.innerHTML += "<br>";
    }else{
      box.innerHTML += char;
    }

    index++;
    setTimeout(typeWriter, 35);
  }else{
    document.getElementById("finalBtn").style.display = "inline-block";
  }
}

function showFinalNote(){
  const finalNote = document.getElementById("finalNote");

  finalNote.style.display = "block";
  finalNote.innerHTML =
  "Final Line ❤️: This moon letter is only Day 9, but every upcoming day has one more surprise waiting for you, Shree.";
}

function createStar(){
  const star = document.createElement("div");
  star.className = "star";

  const symbols = ["✨","⭐","🌙","❤️","💫"];
  star.innerHTML = symbols[Math.floor(Math.random()*symbols.length)];

  star.style.left = Math.random()*100 + "vw";
  star.style.animationDuration = (Math.random()*4 + 4) + "s";

  document.body.appendChild(star);

  setTimeout(()=>{
    star.remove();
  },8000);
}