//https://github.com/Rahman-Akila/assignment.js

//Problem-1 kilometerToMeter
function kilometerToMeter(kilometer)
{
    if(kilometer > 0)
    {
        var meter = kilometer * 1000;
        return meter;
    }
    else
    {
        return "distance cannot be negative"
    }
        
}





//Problem-2 budgetCalculator
function budgetCalculator( watch , mobile , laptop)
{
    if(watch>0 && mobile>0 && laptop>0)
    {
        var totalWatchCost = 50 * watch;
        var totalMobileCost = 100 * mobile;
        var totalLaptopCost = 500 * laptop;
        var totalCost = totalWatchCost + totalMobileCost + totalLaptopCost;
        return totalCost;

    }
    else
    {
        return 'Items Amount cannot be Negative'
    }
    
}



//Problem-3 hotelCost
function hotelCost(day)
{
    if(day>=1 && day<=10)
    {
        var cost = day * 100;
        return cost;

    }
    else if(day>=11 && day<=20)
    {
        var dayRangeTwenty = day-10;
        cost =  1000 + (dayRangeTwenty * 80);
        return cost;

    }
    else if(day>20)
    {
        var dayRangeAboveTwenty = day-20;
        cost =  1000 + 800 + (dayRangeAboveTwenty * 50);
        return cost;

    }
    else
    {
        return "Day cannot be Negative or Zero"
    }

}


//Problem-4 megaFriend

function megaFriend(friendList) 
{
  var longName = friendList[0];
  for (i = 0; i < friendList.length; i++) 
  {
    if (friendList[i].length > longName.length) 
    {
      longName = friendList[i];
    }
  }
  return longName;
}

