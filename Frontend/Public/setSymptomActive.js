const setActive = (symptom, id) => {
    console.log("symptom: " + id)
    let box = document.getElementById(id);
    let symptomElement = document.getElementById(symptom);
    if (symptomElement.classList.contains("active")) {
        symptomElement.classList.remove("active");
        box.checked = false;
    } else if (!symptomElement.classList.contains("active")) {
        symptomElement.classList.add("active");
        box.checked = true;
    }
    console.log("checkbox is " + box.checked)
}








function handleFormSubmit(event) {
    event.preventDefault();

    const checkboxes = event.target.querySelectorAll('input:checked');

    let selectedSymptoms = Array.from(checkboxes).map(checkbox => checkbox.id);

    if (selectedSymptoms.length === 0) {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<p>No symptoms selected. Please select at least one symptom.</p>';
        return;
    }

    fetch('/queryIllnesses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms: selectedSymptoms }),
    })
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<h2>Illnesses:</h2>';
        if (data.length > 0) {
            data.forEach((item, index) => {
                let resultSection = document.createElement('section');
                resultSection.classList.add('resultSection');
    
                if (index % 2 === 1) { 
                    resultSection.style.backgroundColor = "rgb(238, 238, 238)";
                }
    
                let h3 = document.createElement('h3');
                h3.textContent = item.illnessName;
                resultSection.appendChild(h3);
    
                let explain = document.createElement('p');
                explain.textContent = item.illnessExplain;
                resultSection.appendChild(explain);

                let remedies = document.createElement('h4');
                remedies.textContent = 'Remedies:';
                resultSection.appendChild(remedies);
    
                let remediesList = document.createElement('ul');
                item.remedies.split(',').forEach(remedy => {
                    let li = document.createElement('li');
                    li.textContent = remedy.trim();
                    remediesList.appendChild(li);
                });
                resultSection.appendChild(remediesList);
                
                resultsDiv.appendChild(resultSection);

                resultsDiv.scrollIntoView({behavior : "smooth"})
            });
        } else {
            let failedResult = document.createElement("div");
            failedResult.id = "failedResult";
            resultsDiv.appendChild(failedResult);
            noIllnessH2 = document.createElement("h2");
            noIllnessH2.id = "noIllnesses";
            failedResult.appendChild(noIllnessH2);
            noIllnessH2.innerHTML += 'No illnesses found for the selected symptoms, contact a doctor.'
            resultsDiv.scrollIntoView({behavior : "smooth"})
        }
    }) 
    .catch(error => {
        resultsDiv.innerHTML = `<p>Error querying illnesses: ${error.message}</p>`;
    });
}






