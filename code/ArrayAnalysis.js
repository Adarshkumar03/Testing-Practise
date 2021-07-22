const analyze = (arr) => {
    let average = 0;
    let min = arr[0];
    let max = arr[0];
    let length = arr.length;

    average = Math.floor(arr.reduce((total, num)=>{
         return total + num;
    }, 0)/length);

    min = arr.reduce((min, num)=>{
           if(num < min) return num;
           else return min;  
    }, min);

    max = arr.reduce((max, num)=>{
      if(num > max) return num;
      else return max;
    }, max)

    return {average, min, max, length}
}

module.exports = analyze;