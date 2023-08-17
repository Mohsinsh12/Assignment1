function carData(ModelName:string, Manufacturer: string, ...otherFeatures:string[]):object {
 return {ModelName ,Manufacturer,otherFeatures}
 console.log(carData)
}

console.log(carData('Bolan', 'Suzuki'))
console.log(carData('Bolan', 'Suzuki', 'modelnum: 2019', 'color: Red'))




