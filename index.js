function takeANumber(number,name) {
  number.push(name);
  return `Welcome, ${name}. You are number ${number.length} in line.`
}


function nowServing(number) {
  if (number.length > 0) {
    var x = number[0]
    number.shift();
    return `Currently serving ${x}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}


var arr = [];

function currentLine(number) {
  let i = 0;
  while (i < number.length) {
    arr.push(` ` + [i + 1] + `. ` + number[i])
    i++;
  }
  if (number.length === 0) {
    return "The line is currently empty."
  } else {
    return (`The line is currently:` + arr)
  }
}



var i = 0;

function takeANumber(line){
  i++;
  line.push(i);
  return `Welcome! You're ticket number #${i}`
}

takeANumber(line) // "Welcome! You're ticket number #1" [1]
takeANumber(line) // "Welcome! You're ticket number #2" [1,2]

nowServing(line) // "Currently serving #1" [2]
nowServing(line) // "Currently serving #2" []

takeANumber(line) // "Welomce! You're ticket number #3" [3]




