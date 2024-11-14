// Toggle Content Visibility
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    content.classList.toggle("open");
}

// Quiz Functionality
function checkQuiz() {
    const answer = document.querySelector('input[name="q1"]:checked');
    const result = document.getElementById("quiz-result");
    if (answer) {
        if (answer.value === "correct") {
            result.innerText = "Correct! Suppressive fire is crucial.";
            result.style.color = "green";
        } else {
            result.innerText = "Incorrect. The Automatic Rifleman's role is suppressive fire.";
            result.style.color = "red";
        }
    } else {
        result.innerText = "Please select an answer.";
        result.style.color = "orange";
    }
}