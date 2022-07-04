//view-answer button

// select all view-answer button
var viewAnswerBtns = document.querySelectorAll('.view-answer');
// select text of correct-solution
var correctSolutionBoxs =  document.querySelectorAll('.correct-solution-box');

// view-answer button after click event
viewAnswerBtns.forEach( viewAnswerBtn => {
    viewAnswerBtn.addEventListener('click', (event)=>{
        // console.log(viewAnswerBtn.dataset.index);
        if(viewAnswerBtn.innerHTML == "🔒 View Answer" ){
            // changing view-answer button to hide-answer button
            viewAnswerBtn.innerHTML = "🔐 Hide Answer";
            // displaying correct-solution-box
            correctSolutionBoxs.forEach(correctSolutionBox => {
                if(correctSolutionBox.dataset.index == viewAnswerBtn.dataset.index){
                    // console.log(correctSolutionBox.dataset.index);
                    correctSolutionBox.style.display = "block";
                };
            });
        }else{
            // changing hide-answer button to view-answer button
            viewAnswerBtn.innerHTML = "🔒 View Answer";
            // hiding content of correct-solution-box
            correctSolutionBoxs.forEach(correctSolutionBox => {
                if(correctSolutionBox.dataset.index == viewAnswerBtn.dataset.index){
                    correctSolutionBox.style.display = "none";
                };
            });
        };
        console.log('View answer button clicked.');
    });
});
