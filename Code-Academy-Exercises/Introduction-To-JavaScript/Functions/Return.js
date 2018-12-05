function monitorCount(rows, columns) {
  let number = rows * columns;
  return number;
}

const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

// Using return to pass back information from the function call