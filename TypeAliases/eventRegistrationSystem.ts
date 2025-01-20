type PhysicalEvent = {
    type: 'Physical',
    id: string,
    name: string,
    date: Date,
    location: string,
}

type VirtualEvent = {
    type: 'Virtual',
    id: string,
    name: string,
    date: Date,
    link: string,
}

type EventInfo = PhysicalEvent | VirtualEvent

const registerUserForEvent = (event: EventInfo, userName: string): string => {
    if (event.type === 'Physical') {
        return `${userName} registered for ${event.name} at ${event.location}`
    } else {
        return `${userName} registered for ${event.name} at ${event.link}`
    }
}

let physicalEvent: PhysicalEvent = {
    type: 'Physical',
    id: 'eve12341',
    name: 'ML_seminar',
    date: new Date(),
    location: 'Online',
}

let virtualEvent: VirtualEvent = {
    type: 'Virtual',
    id: 'eve12342',
    name: 'React_Conference',
    date: new Date(),
    link: 'https://www.url.com',
}

console.log(registerUserForEvent(physicalEvent, 'Rakshit'))
console.log(registerUserForEvent(virtualEvent, 'Rakshit'))