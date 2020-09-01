export function constructHomePageJsonArray(array, index, imageLeft, imageRightTop, imageRightMid, imageRightBottom, collectionName){
   let json =  {
    "index": index,
    "homeImageLeft": imageLeft,
    "homeImageRightTop": imageRightTop,
    "homeImageRightMid": imageRightMid,
    "homeImageRightBottom": imageRightBottom,
    "collectionName": collectionName 
   } 
   array.push(json);
   return array;
}

