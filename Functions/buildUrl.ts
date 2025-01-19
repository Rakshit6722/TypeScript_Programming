function buildURL(url: string, ...queryParameters: string[]): string{
    let queryString = queryParameters.join('&');
    return `${url}?${queryString}`;
}

console.log(buildURL('https://www.google.com', 'q=typescript', 'oq=typescript'));