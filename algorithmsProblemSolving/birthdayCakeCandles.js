/*You are in-charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.

For example, if your niece is turning  years old, and the cake will have  candles of height , , , , she will be able to blow out candles successfully, since the tallest candle is of height  and there are  such candles.

Complete the function birthdayCakeCandles that takes your niece's age and an integer array containing height of each candle as input, and return the number of candles she can successfully blow out.

Input Format

The first line contains a single integer, , denoting the number of candles on the cake. 
The second line contains  space-separated integers, where each integer  describes the height of candle .

Constraints
.1 <= n < 10^5
.1 <= height i <= 10^7

Output Format

Print the number of candles that can be blown out on a new line.

Sample Input 0

4
3 2 1 3
Sample Output 0

2
Explanation 0

We have one candle of height 1 , one candle of height 2 , and two candles of height 3.
Your niece only blows out the tallest candles, meaning the candles where height = 3.
Because there are 2 such candles, we print 2 on a new line.*/

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    var highest = 0;
    var counter = 0;
    
	ar.forEach(function(ar) {
				if (ar > highest){
						highest = ar;
						counter = 1;
				}else if(ar === highest) {
					 counter ++;//if highest changes reset counter.
				}
	});
	return counter;
}

let result = birthdayCakeCandles([3, 1, 2,3]);
console.log(result);


