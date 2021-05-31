let mainText = {
    "explanation": "אנחנו מחפשים מנה חדשנית וטעימה, קלה להכנה ומושלמת לכמויות גדולות... מה דעתכם על פסטה ברוטב רוזה? אולי גם כוס מיץ תפוזים בצד. נשמע טוב? מעולה! צוות השופטים של מאסטר שף ישפוט אתכם בסוף על המנה אז תפציצו!",
    "page1": "1. נרתיח ליטר וחצי מים בסיר ונבשל בו לאחר רתיחה 500 גרם פסטה.",
    "page2": "2. נחמם מחבת עם כף חמאה ונטגן בה 3 שיני שום כתושות במשך דקה תוך כדי בחישה.",
    "page3": "3. נוסיף למחבת 2 מיכלים של שמנת מתוקה ונבשל עד בעבוע.",
    "page4": "4. נוסיף 400 גרם עגבניות מרוסקות, את קופסת רסק העגבניות ואת התבלינים - מלח, סוכר ובזיליקום למחבת ונבשל תוך כדי ערבוב.",
    "page5": "5. נוסיף למחבת 50 גרם פרמזן מגוררת ונערבב דקה נוספת.",
    "page6": "6. נערבב את הפסטה עם הרוטב.",
    "page7": "7. נחתוך את התפוזים לחצי, נסחט אותם ונסנן את המיץ.",
    "recipeExplanation": "המתכון המלא - תוכלו לצפות בו תמיד בלחיצה על סימן ",
    "recipePopUp": "המתכון המלא",
    "chooseIngredients": "בחרו את 11 המצרכים המרכיבים את המנה",
    "question1": "עכשיו נעבור לבישול - איך נתחיל?",
    "question2": "מעולה! המים על הגז... עכשיו נחמם מחבת",
    "question3": "המחבת חמה מה תוסיפו אליה?",
    "question4": "אוי לא המים רותחים... מהר לפני שהם גולשים",
    "question5": "עברה דקה, השום מטוגן, מה נוסיף עכשיו?",
    "question6": "מה כדאי שנוסיף עכשיו?",
    "question7": "המרכיב האחרון שנוסיף לרוטב הוא גבינת פרמזן",
    "question8": "כל הכבוד עכשיו שלב אחרון... לערבב את הפסטה והרוטב",
    "juiceExer": "מעולה סיימנו עם הפסטה, עכשיו רק נסחט מיץ תפוזים ונוכל להגיש לשופטים את המנה! סדרו את השלבים בסדר הנכון",
    "end": "אלופים! עברתם את השיפוט וזכיתם במאסטר שף!"
}
let stagesImages = {
    "pic1": "empty-pot",
    "pic2": "skilet-garlic-butter",
    "pic3": "skilet-cream",
    "pic4": "skilet-tomato",
    "pic5": "skilet-cheese",
    "pic6": "pasta-sauce",
    "pic7": "juice-cup-edge"
}
let arrMultipleChoiceQuestion = [{
    "answer1": "נרתיח מים לפסטה",
    "answer2": "נקצוץ את המלפפונים",
    "answer3": "נחמם מחבת",
    "answer4": "נכתוש את השום",
    "correctAnswer": "answer1"
},{
    "answer1": "לא נכון",
    "answer2": "נכון",
    "answer3": "",
    "answer4": "",
    "correctAnswer": "answer2"
},{
    "answer1": "butter-garlic",
    "answer2": "sweet-cream",
    "answer3": "pasta-box",
    "answer4": "smached-tomatos",
    "correctAnswer": "answer1",
},{
    "answer1": "נערבב את המים",
    "answer2": "נשים שום גם במים",
    "answer3": "נוסיף את הפסטה לסיר",
    "answer4": "נכבה את הגז",
    "correctAnswer": "answer3"    
},{
    "answer1": "butter-garlic",
    "answer2": "sweet-cream",
    "answer3": "pasta-box",
    "answer4": "smached-tomatos", 
    "correctAnswer": "answer2" 
},{
    "answer1": "רסק עגבניות",
    "answer2": "עגבניות מרוסקות",
    "answer3": "כל התשובות נכונות",
    "answer4": "תבלינים",
    "correctAnswer": "answer3"
},{
    "answer1": "לא נכון",
    "answer2": "נכון",
    "answer3": "",
    "answer4": "",
    "correctAnswer": "answer2"
}];

let arrDragLocation = [17, -16.5, 16.5, -17];

// variuabls:
let nCurrentStage = 0
let nProgressTracker = -1;
let nRightIngredients = 0;
let nWrongIngredients = 0;
let nCurrentQuestion = 0;
let nIngredientsMistakes = 0;
let nStepsMistakes = 0;
let nDragMistakes = 0;
let nRightDrag = 0;
let strChoosenAnswer;
let elMainButton;
const MAX_SCORE = 10;

/* loading function
------------------------------------------------------------------------------------------------------
Description: Adds listener to buttons, handles jquery tooltip.
Parameters: None.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon. 
Date: 09/05/21. */
$(() => {
   elMainButton = $("#left-button");
   elMainButton.on("click", recipeStages);
    $("#right-button").on("click", aboutInfo);
    $().tooltip({
        classes: {
            "ui-tooltip": "tooltip"
        }
    });
});

/* aboutInfo
------------------------------------------------------------------------------------------------------
Description: Handles about info pop up.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 09/05/21 */
const aboutInfo = (event) => {
    // Show pop up and add listener to close button
    $("#main-btn").hide();
    $("#about-section").css("display", "flex");
    $("#main-text").text("אודות");
    $("#about-exit").on("click", () => {
        // Hide pop up
        $("#about-section").hide();
        $("#main-btn").show();
        $("#main-text").text("ברוכים הבאים ללומדת מאסטר שף");
    });
}

/* recipeStages
------------------------------------------------------------------------------------------------------
Description: Handles openning explenation and first step in the recipe.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 09/05/21 */
const recipeStages = (event) => {
    // Check how many times the button has been pressed.
    if(nCurrentStage !== 0) {
        // Show first step in the recipe.
        $("#next-btn").show();
        $("#class-plan").show();
        $("#stages-images").show();
        $("#next-btn").on("click", nextStage);
       elMainButton.hide();
       elMainButton.off("click", recipeStages);
        $("#main-text").text(mainText[`page${nCurrentStage}`]);  
        $("#stages-images").attr("src", `assets/SVG/${stagesImages["pic" + nCurrentStage]}.svg`);
        $("#recipe-plan").css("filter", "grayscale(0%)");
    } else {
        $("#right-button").off("click", aboutInfo);
        $("#right-button").hide();
        // Show openning explenation.
        $("#main-text").text(mainText.explanation);   
        $("#main-text").css("font-size", "5vmin");
       elMainButton.text("לשלבי המתכון");
        nCurrentStage++;
    }
}

/* nextStage
------------------------------------------------------------------------------------------------------
Description: Changes the content according to the page number.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 09/05/21 */
const nextStage = (event) => {
    if(nCurrentStage == 7) {
        // shows full recipe at the end of the stages.
        $("#full-recipe").show();
        $("#main").hide();
        $("#recipe-text").text(mainText.recipeExplanation);   
        $("#recipe-text").css("top", "1vh");     
        $("#got-it-button").on("click", chooseIngredients);
        $("#stages-images").attr("src", ``);
    } else {
        // Adds pre buttton when needed.
        if (nCurrentStage === 1) {
            $("#pre-btn").show();
            $("#pre-btn").on("click", preStage);
        }
        // Update page number and change content accordingly.
        nCurrentStage++;
        $("#main-text").text(mainText[`page${nCurrentStage}`]);  
        $("#stages-images").attr("src", `assets/SVG/${stagesImages["pic" + nCurrentStage]}.svg`);
    }
}

/* preStage
------------------------------------------------------------------------------------------------------
Description: Changes the content according to the page number.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 09/05/21 */
const preStage = (event) => {
    // Hides pre button when needed.
    if (nCurrentStage === 2) {
        $("#pre-btn").hide();
        $("#pre-btn").off("click", preStage);
    }
    // Update page number and change content accordingly.
    nCurrentStage--;
    $("#main-text").text(mainText[`page${nCurrentStage}`]);  
    $("#stages-images").attr("src", `assets/SVG/${stagesImages["pic" + nCurrentStage]}.svg`);
}

/* chooseIngredients
------------------------------------------------------------------------------------------------------
Description: Shows ingredients and adds event listeners to them. Adds listener to recipe logo.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 10/05/21 */
const chooseIngredients = (event) => {
    $("#stages-images").hide();
    $("#ing-plan").css("filter", "grayscale(0%)");
    $("#main").show();
    $("#main-text").css("top", "1vh"); 
    $("#logo-recipe").show();
    $("#main-text").text(mainText.chooseIngredients);
    $("#full-recipe").hide();
    $("#arrow-btn").hide();
    $("#ingridents").show();
    $("#logo-recipe").on("click", showRecipe);
    $(".ingrident").on("click", onClickGlow);
   elMainButton.show();
   elMainButton.text("לבדיקה");
    $(".ingrident").css("filter", "");
    nRightIngredients = 0;
    nWrongIngredients = 0;
    $("#ing-counter").text(0);
   elMainButton.off("click", chooseIngredients);
    $("#got-it-button").off("click", chooseIngredients);
   elMainButton.on("click", checkIngredients);
}

/* showRecipe
------------------------------------------------------------------------------------------------------
Description: Shows recipe pop up and add listener to close button.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 10/05/21 */
const showRecipe = (event) => {
    // Show recipe pop up.
    $("#recipe-text").text(mainText.recipePopUp);
    $("#full-recipe").show();
    $("#got-it-button").hide();
    $("#recipe-logo").attr("src", "assets/SVG/x-mark.svg");
    $("#recipe-logo").css("cursor", "pointer");
    $("#main").hide();
    // Adds mark when ingrediant stage is complete.
    if (nProgressTracker >= 0) {
        $(".ingredients-check-mark").show();
    }
    // Adds mark when to all the comleted stages.
    for (let i = 1; i <= nProgressTracker; i++) {
        $(`#recipe-step${i}`).show();
    }
    $("#recipe-logo").on("click", () => {
        // Hides recipe pop up.
        $("#full-recipe").hide();
        $("#main").show();
    });
}

/* onClickGlow
------------------------------------------------------------------------------------------------------
Description: Adds golw to clicked button and removes it on second click.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 10/05/21 */
const onClickGlow = (event) => {
    if ($(event.target).attr("class").includes("clicked")) {
        $(event.target).css("filter", "");
        $(event.target).removeClass("clicked");
        if ($(event.target).attr("class").includes("right-ingrediant")) {
            nRightIngredients--;
        } else {
            nWrongIngredients--;
        }
    } else {
        $(event.target).addClass("clicked");
        $(event.target).css("filter", "drop-shadow(0px 0px 10px black)");
        if ($(event.target).attr("class").includes("right-ingrediant")) {
            nRightIngredients++;
        } else {
            nWrongIngredients++;
        }
    }
    $("#ing-counter").text(nWrongIngredients + nRightIngredients);
}

/* checkIngredients
------------------------------------------------------------------------------------------------------
Description: Checks if the choosen ingredients are correct. Color the ingredients accordigly.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 10/05/21 */
const checkIngredients = (event) => {
   elMainButton.off("click", checkIngredients);
    $(".ingrident").off("click", onClickGlow);
    // Changes the color according to the answer. Remove clicked class.
    for (let j = 1; j < 17; j++) {
        // Checks if the vutton was clicked.
        if ($(`#ing${j}`).attr("class").includes("clicked")) {
            $(`#ing${j}`).removeClass("clicked");
            // Check if the answer choosen is correct and changes color accordigly.
            if ($(`#ing${j}`).attr("class").includes("right-ingrediant")) {
                $(`#ing${j}`).css("filter", "drop-shadow(0px 0px 10px green");
            } else if ($(`#ing${j}`).attr("class").includes("wrong-ingrediant")){
                nIngredientsMistakes++;
                $(`#ing${j}`).css("filter", "drop-shadow(0px 0px 10px red");
            }
        }
    }
    // Check if all the right ingredients were choosen.
    if (nRightIngredients === 11 && nWrongIngredients === 0) {
       elMainButton.text("המשך");
        nProgressTracker++;
       elMainButton.on("click", recipeSteps);
    } else {
       elMainButton.text("נסה שוב");
       elMainButton.on("click", chooseIngredients);
    }
}

/* recipeSteps
------------------------------------------------------------------------------------------------------
Description: Adds questions and answers to the screen according to thr current question.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 11/05/21 */
const recipeSteps = (event) => {
    // Change next button and make it look disabeled. Remove stage grayscale.
   elMainButton.off("click", recipeSteps);
   elMainButton.text("לבדיקה");
   elMainButton.css("background-color", "lightgray");
    $("#steps-plan").css("filter", "grayscale(0%)");

    // Reset answers and animation.
    $(`#question${nCurrentQuestion}-animation`).hide();
    $(".multipal-choice-btn").css("background-image", "");
    $(".multipal-choice-btn").css("filter", "");
    $("#multipal-choice-answers").css("left", "48.5%");

    // Change screen to question screen. Update current question. Adds listener to answers.
    nCurrentQuestion++;
    $("#ingridents").hide();
    $("#multipal-choice-answers").show();
    $(".multipal-choice-btn").on("click", onClickQuestionGlow);
    $("#main-text").text(mainText[`question${nCurrentQuestion}`]);

    // Check which question tipe and adds answers accordingly.
    switch (nCurrentQuestion) {
        case (1):
        case (4):
        case (6):
        {
            $(".multipal-choice-btn").removeClass("multipal-choice-images");
            $("#multipal-images-container").attr("id", "multipal-choice-answers");
            $("#multipal-choice-answers").css("left", "48.5%");
            for (let i = 1; i < 5; i++) {
                $(`#answer${i}`).text(arrMultipleChoiceQuestion[nCurrentQuestion - 1][`answer${i}`]);
            }
            break;
        }
        case (2):
        case (7):
        {
            for (let i = 1; i < 3; i++) {
                $(`#answer${i}`).text(arrMultipleChoiceQuestion[nCurrentQuestion - 1][`answer${i}`]);
            }
            $(".multipal").hide();
            break;
        }
        case (3):
        case (5):
        {
            $(".multipal").show();
            $(".multipal-choice-btn").addClass("multipal-choice-images");
            $("#multipal-choice-answers").attr("id", "multipal-images-container");
            for (let i = 1; i < 5; i++) {
                $(`#answer${i}`).css("background-image", `url("assets/SVG/${arrMultipleChoiceQuestion[nCurrentQuestion - 1]["answer" + i]}.svg`);
                $(`#answer${i}`).text("");
            }
            break;
        }
        case (8):
        {
            $("#multipal-choice-answers").hide();
           elMainButton.css("background-color", "white");
            checkQuestions();
            break;
        }
        default:
        {
            break;
        }
    }
}

/* onClickQuestionGlow
------------------------------------------------------------------------------------------------------
Description: Makes clicked answer glow and erase glow from previos answer.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 11/05/21 */
const onClickQuestionGlow = (event) => {
   elMainButton.css("background-color", "white");
    // Check if another answer has previosly been choosen and removes its filter and listener.
    if (strChoosenAnswer !== undefined) {
        strChoosenAnswer.css("filter", "");
       elMainButton.off("click", checkQuestions);
    }

    // Saves the choosen answer and adds filter to it.
    strChoosenAnswer = $(event.target);
    $(event.target).css("filter", "drop-shadow(0px 0px 10px black)");
   elMainButton.on("click", checkQuestions);
}

/* checkQuestions
------------------------------------------------------------------------------------------------------
Description: Color the right and wrong answers. Starts animation.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 11/05/21 */
const checkQuestions = (event) => {
    $(".multipal-choice-btn").off("click", onClickQuestionGlow);
    // Change next button and add listener to it.
   elMainButton.text("להמשך");
   elMainButton.css("background-color", "lightgray");
   elMainButton.off("click", checkQuestions);

    // Update progress tracker for recipe markes. Show animation.
    nProgressTracker++;
    $(`#question${nCurrentQuestion}-animation`).show();
    
    // Check if its a question screen or just animation.
    if (nCurrentQuestion !== 8) {

        // Add listener after question or afte animation.
        if (nCurrentQuestion === 1) {
           elMainButton.on("click", recipeSteps);
           elMainButton.css("background-color", "white");
        } else {
            // Adds listener at the end of animation, make button look enabeled again.
            setTimeout(() => {
               elMainButton.css("background-color", "white");
               elMainButton.on("click", recipeSteps);
            }, 2000);
        }
        
        // Adds green filter to correct answer.
        $(`#${arrMultipleChoiceQuestion[nCurrentQuestion - 1].correctAnswer}`).css("filter", "drop-shadow(0px 0px 10px green");
        // Adds red filter to wrong answer if there is one and update mistakes counter.
        if (strChoosenAnswer.attr("id") !== arrMultipleChoiceQuestion[nCurrentQuestion - 1].correctAnswer) {
            strChoosenAnswer.css("filter", "drop-shadow(0px 0px 10px red");
            nStepsMistakes++;
        }
        strChoosenAnswer = undefined; // Reset choosen answer varuble.

        // Plays animation according to the current question.
        switch (nCurrentQuestion) {
            case (2):
            {
               $("#fire").fadeIn(2000);
               break;
            }
            case (3):
            {
               $("#multipal-images-container").animate({
                left: "30%"
            }, 1000);
               $(".animation3").animate({
                   top: "40vh",
                   opacity: "0.4"
               }, 2000);
               break;
            }
            case (4):
            {
               $("#multipal-choice-answers").animate({
                left: "30%"
            }, 1000);
               $("#pasta-grop").animate({
                   top: "37vh",
                   opacity: "0.4"
               }, 2000);
               break;
            }
            case (5):
            {
               $("#multipal-images-container").animate({
                left: "30%"
            }, 1000);
               $("#cream-pour").fadeIn(2000);
               $("#sweet-cream").css("animation", "rotateCream 2s forwards");
               break;
            }
            case (6):
            {
               $("#multipal-choice-answers").animate({
                left: "30%"
            }, 1000);
               $("#sauce").fadeIn(2000);
               $(".animation6").animate({
                   width: "-=1vw",
                   top: "40vh",
                   opacity: "0"
               }, 2000);
               break;
            }
            case (7):
            {
               $("#multipal-choice-answers").animate({
                left: "30%"
            }, 1000);
               $("#cheese").css("animation", "cheeseGrating 2s");
               $("#grated-cheese").fadeIn(1000);
               $("#grated-cheese").animate({
                   top: "40vh",
               }, 1000);
               break;
            } 
            default:
            { 
                break;
            } 
        }
    } else {
        setTimeout(() => {
           elMainButton.css("background-color", "white");
           elMainButton.on("click", juiceExer);
        }, 2000)
        $("#spoon").css("animation", "moveSpoon 2s forwards");
        $("#pasts-sauce").fadeIn(2000);
    } 
}

/* juiceExer
------------------------------------------------------------------------------------------------------
Description: Show juice exer screen, add draggable, sropable and listener when exer is finished.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 12/05/21 */
const juiceExer = (event) => {
    // Show juice exer screen and hide previos screen.
   elMainButton.off("click", juiceExer);
    $(`#question${nCurrentQuestion}-animation`).hide();
    $("#main-text").text(mainText.juiceExer);
    $("#juice-exer").show();
   elMainButton.text("סיימתי תגישו לשופטים");
    $("#juice-plan").css("filter", "grayscale(0%)");
   elMainButton.css("background-color", "lightgray");
   // Add jquery draggables and dropapbles.
    $(".dragable").draggable({
        revert: "invalid",
        start:  function (event, ui) {
            nDragMistakes++;
        }   
    });
    $("#drop1").droppable({accept: "#drag1"});
    $("#drop2").droppable({accept: "#drag2"});
    $("#drop3").droppable({accept: "#drag3"});
    $("#drop4").droppable({accept: "#drag4"});
    $(".droppable").droppable({
        drop: function (event, ui) {
            if (ui.draggable.attr("id").charAt(4) === event.target.id.charAt(4)) {
                ui.draggable.draggable("option", "disabled", true);
                $(event.target).droppable("option", "disabled", true);
                ui.draggable.animate({
                    top: "15vh",
                    left: `${arrDragLocation[ui.draggable.attr("id").charAt(4) - 1]}vw`
                }, 700);
                nRightDrag++; 
                if (nRightDrag === 4) {
                    // Update progress tracker for recipe markes. Show animation.
                    nProgressTracker++;
                    for (let i = 1; i < 6; i++) {
                        $(`#juice-animation${i}`).delay(`${i}50`).fadeIn(500);
                    }
                   elMainButton.css("background-color", "white");
                   elMainButton.on("click", judging);
                }
            }
        }
    });
}

/* judging
------------------------------------------------------------------------------------------------------
Description: Shows judges and score. Show end pop up after 5 secondes.
Parameters: Mouse event.
------------------------------------------------------------------------------------------------------
Programmer: Nitzan Salomon 
Date: 18/05/21 */
const judging = (event) => {
    // Hide juice exer.
   elMainButton.off("click", judging);
    $("#juice-exer").hide();
    $("#main-text").text(mainText.end);
   elMainButton.text("סיום");
   $("#right-button").text("נסה שוב");
   $("#right-button").show();
   // Show judging.
    $("#end-scoring").show()
    $("#choose-ingridents").text(MAX_SCORE - (nIngredientsMistakes / 2));
    $("#make-dish").text(MAX_SCORE - (nStepsMistakes / 2));
    $("#make-juice").text(MAX_SCORE - ((nDragMistakes - nRightDrag) / 2));
    $("#all").text((MAX_SCORE - (((nDragMistakes - nRightDrag) + nIngredientsMistakes + nStepsMistakes) / 6)).toFixed(1));
    elMainButton.on("click",() => {
        window.close();
    });
    $("#right-button").on("click",() => {
        window.location.reload();
    });
}