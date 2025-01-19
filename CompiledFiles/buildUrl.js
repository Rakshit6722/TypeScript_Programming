"use strict";
function buildURL(url, ...queryParameters) {
    let queryString = queryParameters.join('&');
    return `${url}?${queryString}`;
}
console.log(buildURL('https://www.google.com', 'q=typescript', 'oq=typescript'));
