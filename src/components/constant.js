const dev = {
    SERVER: 'http://localhost:8000',
};

const prod = {
    SERVER: 'http://localhost:8000',
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
