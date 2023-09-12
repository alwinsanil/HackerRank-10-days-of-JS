/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        //let str = s.toString();
        let splitstr = s.split("");
        let revstr = splitstr.reverse();
        let ans = revstr.join("");
        s = ans;
    }
    catch(e)
    {
        console.log(e.message);
    }
    finally
    {
        console.log(s);
    }
}