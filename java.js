// 1st :  (Ans) Even Or Odd number print  

let num = 24;



if (num % 2 === 0) {
    console.log(num, " is even");
} 
else {
    console.log(num,"is odd");
}

//  2nd: Write a program that calculets grade based score

let score = prompt("(0-100):");
let grade;

 if (score >= 90 && score <= 100) {
    grade = "A";

} else if (score >= 80 && score <=89) {
    grade = "B";


}else if (score >= 60 && score <=69) {
    grade = "D";

}else if (score >= 0 && score <=60) {
    grade = "F";
}


console.log("accourding to your scores, your grade was : " , grade ,);
