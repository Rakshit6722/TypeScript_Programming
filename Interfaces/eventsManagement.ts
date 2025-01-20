interface Event1 {
    readonly id: string,
    title: string,
    date: Date,
    location: string,
    attendees?: string[]
}

interface EventVirtual extends Event1 {
    link: string,
    isLive: boolean
}

const markAsLive = (event: EventVirtual): EventVirtual => {
    if (!event.isLive) {
        event.isLive = true
    }
    return event
}

let event2: EventVirtual = {
    id: "eve12341",
    title: "ML_seminar",
    date: new Date(),
    location: "Online",
    link: "https://www.url.com",
    isLive: false,
}

console.log(markAsLive(event2))