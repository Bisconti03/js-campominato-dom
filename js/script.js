const container = document.querySelector(".grid");

const play = document.getElementsByTagName("button")[0];




const bombsNumber = [];

const clicked = 0;




play.addEventListener('click',

    function () {

        

        for (let i = 0; i < 16; i++) {

            const newBomb = getUniqueRandomNumber(1, 100)
            console.log(newBomb)
            bombsNumber.push(newBomb)
        }
        

        console.log (bombsNumber)
        container.innerHTML = '';

        for (let i = 1; i <= 100; i++) {

          
        
            const newCell = createNewCell(i);
            container.append(newCell);
        
        }

    }

);

function createNewCell(num,bombe ) {

    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click',
    
        function () {
           

            bombe = bombsNumber

            console.log(num);
            
            console.log(this.innerText);

            const cellNumber = parseInt(this.innerText)

            if (bombsNumber.includes(cellNumber)) {
                this.classList.add('bomba');
                const punti = document.querySelectorAll('.active').length;
                alert('Hai Perso. Hai totalizzato:' + punti + 'punti')
            }

            else{
                this.classList.add('active');
                const punti = document.querySelectorAll('.active').length;
                
                if (punti == 84) {

                    alert('Hai Vinto.')
                    
                }
               

                
               
            }

            
            

            

        }
    
    );

    cell.innerHTML = num;
   
    return cell;

}

function getUniqueRandomNumber(min, max) {

    let randomNumber = getRandomNumber(min, max);

    while(bombsNumber.includes(randomNumber)){
        randomNumber = getRandomNumber(min, max);
    }

    


    return randomNumber;

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}