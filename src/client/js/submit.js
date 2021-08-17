async function submitForm(input) {

    const response = await fetch('/makeCalls', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(input)
    });

    return response.json()
}

export { submitForm }