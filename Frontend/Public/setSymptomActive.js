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
    console.log('Form submitted');
    console.log('Event target:', event.target);

    if (!(event.target instanceof HTMLFormElement)) {
        console.error('Event target is not a form');
        return;
    }

    const checkboxes = event.target.querySelectorAll('input[name="symptoms"]:checked');
    console.log('Checkboxes found:', checkboxes);

    let selectedSymptoms = Array.from(checkboxes).map(checkbox => checkbox.id);

    console.log('Selected symptoms:', selectedSymptoms);

    if (selectedSymptoms.length === 0) {
        console.error('No symptoms selected');
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
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return response.json();
        } else {
            return response.text().then(text => {
                throw new Error('Invalid JSON: ' + text);
            });
        }
    })
    .then(data => {
        console.log('Response data:', data);
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '<h3>Illnesses:</h3>';
        if (data.length > 0) {
            // const ul = document.createElement('ul');
            data.forEach(item => {
                // const li = document.createElement('li');
                // li.textContent = item.illnessName;
                // ul.appendChild(li);
                resultsDiv.innerHTML += '<section class="resultSection">'+
                '<h3> ${item.illnessName} </h3></section>'
            });
            // resultsDiv.appendChild(ul);
        } else {
            resultsDiv.innerHTML += '<p>No illnesses found for the selected symptoms.</p>';
        }
    })
    .catch(error => {
        console.error('Error querying illnesses:', error);
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `<p>Error querying illnesses: ${error.message}</p>`;
    });
}






