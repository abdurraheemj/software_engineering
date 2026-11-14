const isLoggedIn = true;
let userName = "Abdurraheem";
if(isLoggedIn==true)
{
    console.log("Welcome!",userName);
    let score = 1;
    score += 1;
    score -= 1;
    score *=6;
    score /= 2;
    score **=2
    score %=3;


    console.log("Your score is:", score);
}
else
{
    console.log("Please log in to continue.");
}
