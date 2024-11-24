// Toggle Content Visibility and Hide Button
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId);
    const button = content.previousElementSibling; // Get the button (previous sibling of content)
    
    content.classList.toggle("open");
    
    // Hide the "more..." button when clicked
    if (content.classList.contains("open")) {
        button.style.display = "none";  // Hide the "more..." button
    }
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