let pantalla = document.getElementById('pantalla');

let buttons = Array.from(document.getElementsByClassName('button'));



buttons.map (button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                pantalla.innerText = '';
                break;
            case '←':
                if (pantalla.innerText){
                    pantalla.innerText = pantalla.innerText.slice(0, -1);
                } 
                break;   
            case '=':
                try{
                pantalla.innerText = eval(pantalla.innerText)}

                catch
                {  pantalla.innerText = "¿Tu eres loco ramon?"}
                break;

            default:
                pantalla.innerText += e.target.innerText;  }
    });
});
