const setActive = (symptom) => {
    let symptomElement = document.getElementById(symptom);
    if (symptomElement.classList.contains("active")) {
        symptomElement.classList.remove("active");
    }
    else if (!symptomElement.classList.contains("active")) {
        symptomElement.classList.add("active");
    }
}