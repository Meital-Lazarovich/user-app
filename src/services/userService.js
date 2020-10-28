import axios from 'axios';

export const userService = {
    login,
    logout
}

async function login(credentials) {
    console.log('login -> credentials');

    const res = await axios.post('https://sandbox.d.greeninvoice.co.il/api/v1/account/login', credentials)
    return res.data
}

async function logout() {
    await axios.post('https://sandbox.d.greeninvoice.co.il/api/v1/account/logout')
}

