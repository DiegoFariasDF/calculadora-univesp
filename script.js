 
let quoteButton = document.getElementById("quote-button");

quoteButton.addEventListener("click", function(){
    let nava = parseFloat(document.getElementById("nava").value);
    let nprova = parseFloat(document.getElementById("nprova").value);
    const colors = ["#FF0000", "#32CD32"]; 
    let media = (nava*0.4)+(nprova*0.6);
    let quotediv = document.getElementById("quotediv")
    
    let quoteText = document.getElementById("quote-text"); 
    if (nava>=0 && nprova>=0){
        quoteText.innerText = "Sua Media final foi de: "+ media;
        if (media < 4.99){
            quotediv.style.backgroundColor = colors[0];
        }
        else if (media >= 5){
            quotediv.style.backgroundColor = colors[1];
        }
    }
    else if (isNaN(nava) || isNaN(nprova)) {
        quoteText.innerText = "Insira um valor valido";
        quotediv.style.backgroundColor = colors[0];

    }
    
});


let quoteButtonn = document.getElementById("quote-buttonn");

quoteButtonn.addEventListener("click", function(){
    let navaa = parseFloat(document.getElementById("navaa").value);
    let nprovaa = parseFloat(document.getElementById("nprovaa").value);
    const colorss = ["#FF0000", "#32CD32"]; 
    let mediaa = (navaa*0.25)+(nprovaa*0.5);
    let quotedivv = document.getElementById("quotedivv")
    
    let quoteTextt = document.getElementById("quote-textt"); 
    if (navaa>=0  && navaa <=4.99 && nprovaa>=0){
        quoteTextt.innerText = "Sua Media final foi de: "+ mediaa;
        if (mediaa < 4.99){
            quotedivv.style.backgroundColor = colorss[0];
        }
        else if (mediaa >= 5){
            quotedivv.style.backgroundColor = colorss[1];
        }
    }
    else if (isNaN(navaa) || isNaN(nprovaa)) {
        quoteTextt.innerText = "Insira um valor valido";
        quotedivv.style.backgroundColor = colorss[0];

    }

    else if (navaa >= 5 && nprovaa >= 0) {
        quoteTextt.innerText = "Insira um valor menor que 5, se não você estaria aprovado";
        quotedivv.style.backgroundColor = colorss[0];

    }

    
});
