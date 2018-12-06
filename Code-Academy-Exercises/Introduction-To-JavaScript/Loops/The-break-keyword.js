const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i=0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
};

console.log("And if you don't know, now you know.");

// Use break to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn't been met