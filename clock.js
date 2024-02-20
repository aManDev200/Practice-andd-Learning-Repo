let hour = 0;
let minute = 0;
let second = 0;

function time()
{
    second = second+1
    if(second==61)
    {
        minute=minute + 1;
        second=0;
    }
    if(minute == 61)
    {
        hour=hour + 1;
        minute=0;
    }
    if(hour == 25)
    {
        hour=0;
    }
    console.log(hour + ":" + minute + ":" + second)
}
setInterval(time, 1*1000)