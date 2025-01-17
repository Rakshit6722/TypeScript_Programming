type ID = number | string //union type

let userId: ID; // userId could be either number or a string
userId = 101 //valid
userId = "Emp1133" //valid


//another way to do it
let cardNumber: number | string = "Afff134412"


//union type
type status = "success" | "error" | "loading"

let apiStatus: status

apiStatus = "success" // valid
// apiStatus = "failed" not valid