import { use } from "react";

let peoples = [
    { Name: 'Ali', family: 'Mohammad', age: 23 , Role:"Admin" },
    { Name: 'Reza', family: 'Tabei', age: 45 , Role:"User" } // Wrapped 'Reza' in quotes
];

function GetAdmins(params) {
    return people.filter(user=> user.Role == "Admin")

    
}

export  {peoples , GetAdmins};