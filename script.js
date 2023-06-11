const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowercase='abcdefghijklmnopqrstuvwxyz'
const number='0123456789'
const symbol='~!@#$%^&*()'


const textInput=document.getElementById('text') 
const numInput=document.getElementById('length') 

const upperEl=document.getElementById('uppercase')
const lowerEl=document.getElementById('lowercase')
const numberEl=document.getElementById('number')
const symbolEl=document.getElementById('symbol')

const alart=document.querySelector('.alart')

const generateBtn=document.getElementById('btn')

generateBtn.addEventListener('click',generate)

function getUppercase(){
    return uppercase[Math.floor(Math.random()*uppercase.length)]
}

function getLowercase(){
    return lowercase[Math.floor(Math.random()*lowercase.length)]
}

function getNumber(){
    return number[Math.floor(Math.random()*number.length)]
}

function getSymbol(){
    return symbol[Math.floor(Math.random()*symbol.length)]
}


function generate(){
   const len=numInput.value
   let password=''

   for(let i=0; i<len; i++){
      const pw=generatePassword()
      password += pw;
   }
   textInput.value=password
}

function generatePassword(){
    const pass=[]
    if(upperEl.checked){
        pass.push(getUppercase())
    }

    if(lowerEl.checked){
        pass.push(getLowercase())
    }

    if(numberEl.checked){
        pass.push(getNumber())
    }

    if(symbolEl.checked){
        pass.push(getSymbol())
    }

    return pass[Math.floor(Math.random()*pass.length)]
}

const copyBtn=document.querySelector('.fa-copy')

        copyBtn.addEventListener('click',function(){
          //console.log(target)
          textInput.select();
          navigator.clipboard.writeText(textInput.value)
          if(textInput.value){
            alart.innerHTML=`${textInput.value} is coppied!`
            setTimeout(function(){
              alart.classList.add('show-alart')
           }, 2000);
            
          }else{
            alart.classList.remove('show-alart')
          }
          
    })
