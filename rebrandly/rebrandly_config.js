// Configuration
const linkRequest = {
    destination:'https://tarnowiak.pl/',
    domain:{fullName:'rebrand.ly'}
}

const requestHeaders = {
    "Content-type":"application/json",
    "apikey":process.env.APIKEY
}

module.exports = {linkRequest, requestHeaders};