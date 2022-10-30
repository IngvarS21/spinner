const spinnerSymbols = ['|', '/', '-', '\\'];

let spinnerDelay = spinnerSymbols.length * 8;

for (let i = 0; i < spinnerDelay; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerSymbols[i % spinnerSymbols.length]}`);
    if (i === spinnerDelay - 1) {
      process.stdout.write('\n');
    }
  }, i * 170);
};

