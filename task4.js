for (let i = 1; i <= 105; i++) {
  let output = "";

  if (i % 3 === 0) {
    output += "Fizz";
  }

  if (i % 5 === 0) {
    output += "Buzz";
  }

  if (i % 7 === 0) {
    output += "Woof";
  }

  if (output === "") {
    output = String(i);
  }

  console.log(output);
}
