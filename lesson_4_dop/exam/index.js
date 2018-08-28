
let arr1=[];
function getFriendlyNumbers(start, end) {
    let a = start;
    let b = end;
    let arr1_1=arr1;
 if(dr(start,end)===false){return []} else{
        if (a <= 1 && b <= 1)
        return []}
    return arr1_1
 
console.log(arr1_1)
}

function sumdel(number)
{
    let s=1;
    let i=1;
    for(i=2;i<=number/2;i++){
     if( number %i==0) 
        s+=i
    }
    return s
}
function dr(a,b){
    let k
    for(let j=a;j<=b;j++){
        k=sumdel(j)
        if(k>=a&&k<=b&&k>j){
            if(sumdel(k)==j){
                arr1.push([j,k])
                
            }
        }
    }
}
getFriendlyNumbers(1,300);
console.log(getFriendlyNumbers());

module.exports = {
    firstName: 'Kirill',
    secondName: 'Kolesnik',
    task: getFriendlyNumbers
}