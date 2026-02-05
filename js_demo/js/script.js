function askName(){
    var nameReturn = document.getElementById('ask-name');
    var name = prompt('Please enter your name in the box below')
    if (name == ''){
        alert('Please try again.')
    } else{
        nameReturn.innerHTML = 'Hello ' + name + '! Welcome to my website. I hope you stay a while...'
    }
}

function askQuestion(){
    var p=prompt('How much wood would a woodchuck chuck if a woodchuck could chuck wood?')
    if (p != null){
        document.getElementById('question').innerHTML = 'Wow! ' + p + ' is a lot of wood!';
    }
}