var a = document.getElementById("input1")
function num(num1) {
    a.value += num1
    console.log(num1);
}
function calculateValue(){
    var ans = eval(a.value)
    // console.log(ans);
    a.value = ans
} 
function clearALL() {
    a.value = "";
}