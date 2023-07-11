const text = document.querySelector(".input-message");
const message = document.querySelector(".message");
const copy = document.querySelector(".copy");
const noMessage = document.querySelector(".no-find");
copy.style.display = "none"

// detectar texto
const btnEnc = document.querySelector(".btn-enc")
const btnDes = document.querySelector(".btn-des")

// validar que el texto se encuentre escrito correctamente
text.addEventListener('input', function(){
    btnEnc.style.backgroundColor = "#9FFFCB";
    btnEnc.style.color = "#291D36";
    
    btnDes.style.backgroundColor = "#291D36";
    btnDes.style.color = "#9FFFCB";
    btnDes.style.borderColor = "#9FFFCB";
})

// Validar que el texto esté escrito correctamente
function validateText(){
    let writeText = document.querySelector(".input-message").value;
    let validator = writeText.match(/^[a-z]*$/);

    if(!validator || validator === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

// ENCRIPTAR EL TEXTO
function btnEncrypt(){
    if(!validateText()) {
        const encryptedText = encrypt(text.value);
        message.value = encryptedText;
        text.value = "";
        
        copy.style.display = "block";
        noMessage.style.display = "none";

        message.style.backgroundImage = "none";
        message.style.backgroundColor = "#9FFFCB";
        message.style.border= "6px solid #5AA9E6";
        message.style.color= "#291D36";
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


function encrypt(stringEncrypt){
    let keyEncrypt = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncrypt = stringEncrypt.toLowerCase()

    for(let i = 0; i < keyEncrypt.length; i++){
        if(stringEncrypt.includes(keyEncrypt[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(keyEncrypt[i][0], keyEncrypt[i][1])
        }
    }
    return stringEncrypt
}


// DESENCRIPTAR EL TEXTO
function btnDecrypt(){
    const texEncrypt = decrypt(text.value)
    message.value = texEncrypt
    text.value = "";
}

function decrypt(stringDescrypt){
    let keyEncrypt = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescrypt = stringDescrypt.toLowerCase()

    for(let i = 0; i < keyEncrypt.length; i++){
        if(stringDescrypt.includes(keyEncrypt[i][1])){
            stringDescrypt = stringDescrypt.replaceAll(keyEncrypt[i][1] , keyEncrypt[i][0])
        }
    }
    return stringDescrypt
}

// COPPIAR TEXTO
function copyText(){
    message.select();
    navigator.clipboard.writeText(message.value)
    message.value = "";
    alert("Texto Copiado")
}


