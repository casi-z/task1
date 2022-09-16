const d = document

let processButton = d.querySelector('.button-container__process-button')
let input = d.querySelector('.input')
let output = d.querySelector('.output')
let log = (n) => console.log(n)
//?Словарь


//Английские буквы
let engAlphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
    'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
]
log(engAlphabet[20])

//?Транслитератор
processButton.addEventListener('click', function(){
    if(parseInt(input.value)){
        let inputText = input.value
        if (parseInt(input.value) > 0 && parseInt(input.value) < 27) {    
            for (let i = 26; i <= engAlphabet.length; i--) {
                if (i < 0) break
                inputText = inputText.replaceAll((i + 1).toString(), engAlphabet[i])
                
            }
        } 
        if(parseInt(input.value) > 26){
            
            inputText = ''
            for (var n = parseInt(input.value); n > 26; n = n - 26){
                
                inputText += 'z'
            }
            
            for (let i = 26; i <= engAlphabet.length; i--) {
                if (i < 0) break
                n = n.toString().replaceAll((i + 1).toString(), engAlphabet[i])
            }
        inputText += n;
        }
        output.textContent = `${input.value}:${inputText.toUpperCase()}`
    }else alert('Вы ввели не число')
});
