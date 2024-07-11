let array=[1,2,3,4,5,7,9];

function print(arr){
    for(let j=0; j<arr.length; j++){
        console.log(arr[j]);
    }
}

console.log(bin(array,7));

function bin(arr, key){
    let l=0;
    let h=arr.length;
    while(l<=h){
        let mid = parseInt((l+h)/2);
        if(arr[mid]==key){
            return mid;
        }
        else if(arr[mid]>key){
            h=mid-1;
        }
        else if(arr[mid]<key){
            l=mid+1;
        }
    }
    return -1;
}