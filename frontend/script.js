function countIntegers() {
    var pushups = parseInt(document.getElementById("pushups").value);
    var squats = parseInt(document.getElementById("squats").value);
    var crunches = parseInt(document.getElementById("crunches").value);

    if (!isNaN(pushups) || !isNaN(squats) || !isNaN(crunches)) {
        document.getElementById("result").innerHTML = "pushups= " + pushups + ", squats= " + squats + ", crunches= " + crunches;
    } else {
        document.getElementById("result").innerHTML = "Enter some values.";
    }

    // Create an object with the data
    const dataToSend = {
        "pushups": pushups,
        "squats": squats,
        "crunches": crunches
    }

    // Convert the data to JSON format
    const jsonData = JSON.stringify(dataToSend);

    // Set up the Fetch request
    fetch('https://localhost/add_data:5000', {
        method: 'POST', // Use POST for sending data
        headers: {
            'Content-Type': 'application/json' // Specify the content type as JSON
        },
        body: jsonData // Send the JSON data
    })
    .then(response => {
        // Handle the response from the server here
        if (response.ok) {
            return response.json(); // If the response is JSON, parse it
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .then(responseData => {
        // Process the data received from the server
        console.log(responseData);
    })
    .catch(error => {
        // Handle errors here
        console.error('There was a problem with the fetch operation:', error);
    });
}