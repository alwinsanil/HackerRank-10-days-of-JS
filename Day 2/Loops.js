/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let n = s.toString().length;
    for (let i = 0; i<n; i++)
    {
        if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o' || s[i]=='u')
        {
            console.log(s[i]);
            //console.log('\n');
        }
    }
    for (let i = 0; i<n; i++)
    {
        if (s[i]!='a' && s[i]!='e' && s[i]!='i' && s[i]!='o' && s[i]!='u')
        {
            console.log(s[i]);
            //console.log('\n');
        }
    }
}
