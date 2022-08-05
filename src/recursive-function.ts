/**
 Crie uma função recursiva para descobrir o menor número inteiro divisível 
 por 2, 3 e 10 ao mesmo tempo. Quando encontrá-lo, imprima-o na tela.
 */

 type RecursiveFunctionParams = {
  value: number
  lowerValue?: number 
 }

export function recursiveFunction({value, lowerValue = value + 1 }: RecursiveFunctionParams): number { 
 
  if(value === 1 ) return lowerValue  

  if( (value %2 === 0 ) && (value %3 === 0 ) && (value %10 === 0 )){
     const newLowerValue = value < lowerValue ?value:lowerValue
    return recursiveFunction({value: value-1, lowerValue:newLowerValue })
   } else{
    return  recursiveFunction({value: value-1, lowerValue })
   }   
  
}

const result = recursiveFunction({value:700});
console.log(result)
 