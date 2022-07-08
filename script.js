
function colorChoice(){
    const colors = ['138, 43, 226','255, 0, 0','0, 255, 255','0, 255, 0','255 255 0','255 20 147'];
    var choice = Math.floor(Math.random() * colors.length);
    var choice2 = Math.floor(Math.random() * colors.length);
    while (choice2==choice){
        choice2 = Math.floor(Math.random() * colors.length);
    }
    var selectedColor=colors[choice];
    var alternateColor=colors[choice2];
    console.log(selectedColor);
    var gameBox=document.querySelector('.body').childNodes[1];
    gameBox.style.borderColor='rgb('+selectedColor+')';
    gameBox.style.boxShadow='0px 0px 20px'+' rgb('+selectedColor+')';
    var text=gameBox.childNodes[1];
    text.style.color='rgb('+selectedColor+')';
    for (let i = 3;i<=7;i+=2){
        var gameBox=document.querySelector('.body').childNodes[i];
        gameBox.style.borderColor='rgb('+selectedColor+')';
        gameBox.style.boxShadow='0px 0px 20px'+' rgb('+selectedColor+')';
        var text=gameBox.childNodes[1];
        text.style.color='rgb('+selectedColor+')';
        var text=gameBox.childNodes[3];
        text.style.color='rgb('+alternateColor+')';
        var text=gameBox.childNodes[5];
        text.style.color='rgb('+selectedColor+')';
        var text=gameBox.childNodes[9];
        text.style.color='rgb('+selectedColor+')';
        var text=gameBox.childNodes[11];
        text.style.color='rgb('+alternateColor+')';
        var bt=gameBox.childNodes[13];
        bt.style.backgroundColor='rgb('+selectedColor+')';
    }
    
}

colorChoice();