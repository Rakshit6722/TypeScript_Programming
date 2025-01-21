const mergeWithDefault = <T,U>(obj1: T, obj2: U): T & U => {
    return {...obj1, ...obj2}
}

const defaults: {theme: string, showNotifications: boolean} = {theme: "dark", showNotifications: true};
const userSettings: {theme: string} = {theme: 'light'}

console.log(mergeWithDefault(defaults, userSettings))