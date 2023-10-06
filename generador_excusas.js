let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];
let who_aleatorio = Math.floor(Math.random() * who.length  );
let action_aleatorio =Math.floor(Math.random() * action.length );
let what_aleatorio=Math.floor(Math.random() * what.length )
let when_aleatorio=Math.floor(Math.random() * when.length )
//console.log(numero)


function excusas (who,action,what,when){
    return who +" "+ action +" "+ what+" " + when
}

console.log(excusas(who[what_aleatorio],action[action_aleatorio],what[what_aleatorio],when[when_aleatorio]));
