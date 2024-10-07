const parseEnv = () => {
    const keyValue = Object.keys(process.env).filter((key) => key.includes('RSS_'))
    console.log(keyValue.map((key) => key + '=' + process.env[key]).join('; '))
};

parseEnv();