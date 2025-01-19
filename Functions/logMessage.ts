function logMessage(tag: string, ...messages: string[]): string{
    let finalMessage: string = ""

    messages.forEach(message => {
        finalMessage += `[${tag}] ${message}\n`
    })

    return finalMessage;
}

console.log(logMessage('INFO', 'This is an info message', 'This is another info message', 'This is yet another info message'));