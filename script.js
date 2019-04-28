// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.
const result = document.querySelector('.result');
const choiceDiv = document.querySelectorAll('.choice-grid div');


var oneTime = false;
var twoTime = false;
var threeTime = false;

var ans = ["", "", ""];

for(const div of choiceDiv)
{
    // var id = div.dataset.questionId;
    div.addEventListener("click", function(){
        click(this);
    });
    // console.log(id);
}

// function: click()
function click(div)
{
    var id = div.dataset.questionId;

    switch(id)
    {
        case "one":
            checkOne(div.dataset.choiceId);
            break;
        case "two":
            checkTwo(div.dataset.choiceId);
            break;
        case "three":
            checkThree(div.dataset.choiceId);
            break;

    }
}

function checkOne(choiceId)
{
    var oneGroup = document.querySelectorAll('div[data-question-id="one"]');
    ans[0] = choiceId;
    // console.log(ans);
    oneTime = true;

    for(var i of oneGroup)
    {
        if(i.getAttribute('data-choice-id') === choiceId)
        {
            i.querySelector(".checkbox").src = "images/checked.png";
            i.style.backgroundColor = "#cfe3ff";
            i.style.opacity = "1";
            // console.log(i);
        }
        else
        {
            i.querySelector(".checkbox").src = "images/unchecked.png";
            i.style.backgroundColor = "#f4f4f4";
            i.style.opacity = "0.6";
        }
    }

    if(oneTime && twoTime && threeTime)
        getFinalResult();
    // console.log("one: " + choiceId);
}

function checkTwo(choiceId)
{
    var twoGroup = document.querySelectorAll('div[data-question-id="two"');
    ans[1] = choiceId;
    twoTime = true;

    for(var i of twoGroup)
    {
        if(i.getAttribute('data-choice-id') === choiceId)
        {
            i.querySelector(".checkbox").src = "images/checked.png";
            i.style.backgroundColor = "#cfe3ff";
            i.style.opacity = "1";
        }
        else
        {
            i.querySelector(".checkbox").src = "images/unchecked.png";
            i.style.backgroundColor = "#f4f4f4";
            i.style.opacity = "0.6";
        }
    }

    if(oneTime && twoTime && threeTime)
        getFinalResult();
    // console.log("two: " + choiceId);
}

function checkThree(choiceId)
{
    var threeGroup = document.querySelectorAll('div[data-question-id="three"');
    ans[2] = choiceId;
    threeTime = true;

    for(var i of threeGroup)
    {
        if(i.getAttribute('data-choice-id') === choiceId)
        {
            i.querySelector(".checkbox").src = "images/checked.png";
            i.style.backgroundColor = "#cfe3ff";
            i.style.opacity = "1";
        }
        else
        {
            i.querySelector(".checkbox").src = "images/unchecked.png";
            i.style.backgroundColor = "#f4f4f4";
            i.style.opacity = "0.6";
        }
    }
    // console.log("three: " + choiceId);
    if(oneTime && twoTime && threeTime)
        getFinalResult();
}

function getFinalResult()
{
    var index = ans[0];

    if(ans[1] === ans[2])
        index = ans[1];

    result.querySelector(".title").innerHTML = "You got: " + RESULTS_MAP[index]["title"];
    result.querySelector(".contents").innerHTML = "You got: " + RESULTS_MAP[index]["contents"];
    
    result.style.display = "block";
    // console.log(index);
    // console.log("final: " + ans);
}

function restartQuiz()
{
    window.scrollTo(0, 0);
    window.location.reload();
}