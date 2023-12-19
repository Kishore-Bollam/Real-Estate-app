import { getData, saveData } from "../context.service"


const url="http://localhost:3000/saveproperty/"

export function savePropertData(data){
    return saveData(url,data)
}

export function getPropertyData(){
    return getData(url)
}


