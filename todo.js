let arr = [1,2,3,4,5,6,7,8,9];
function addOne(no){
    no = no+1;
    return no;
}
let arr2 = arr.map(addOne);
for(let i=0; i<arr2.length;i++){
    console.log(arr2[i]);
}