function max(numbers)
{
    if (numbers.length === 0)
    {
        return null;
    }
    else
    {
        let maxNum = -1;
        let i = 0;
        while (i < numbers.length)
        {
            if (numbers[i] > maxNum)
            {
                maxNum = numbers[i];
            }
            i = i + 1;
            
        }
        return maxNum;
    }
}
}
function min(numbers)
{
    if (numbers.length === 0)
    {
        return null;
    }
    else
    {
        let minNum = 0;
        let i = 0;
        while (i < numbers.length)
        {
            if (numbers[i] < minNum)
            {
                minNum = numbers[i];
            }
            i = i + 1;
            
        }
        return minNum;
    }
}
    
}


'use strict';


function average(numbers) {
    let total = 0;
    numbers.forEach(function(elem) {
        total += elem;
    });
    console.log(total);
    return total / numbers.length;
}

console.log(average([5,5,5,5]));