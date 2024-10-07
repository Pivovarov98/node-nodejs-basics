const parseArgs = () => {
    const value = process.argv.slice(2);
    let endValue = [];

for(let i = 0; i < value.length; i+=2){
    endValue.push(value[i].replaceAll('-', '') + ' is ' + value[i + 1] + ',');
};

console.log(endValue.join(' '));
};

parseArgs();