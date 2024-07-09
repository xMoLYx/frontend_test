let contentOptions = [];

// Funkcja do załadowania danych z JSON
async function loadContentOptions() {
    try {
        const response = await fetch('content.json');
        const data = await response.json();
        contentOptions = data.contentOptions;
    } catch (error) {
        console.error('Błąd podczas ładowania danych:', error);
    }
}

// Wywołaj funkcję, aby załadować dane przy starcie
loadContentOptions();

function updateContent() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const thirdDiv = document.getElementById('third');

    if (selectedOption && contentOptions.length > 0) {
        let contentToAdd;
        if (selectedOption.value === "1") {
            contentToAdd = contentOptions[0].text;
        } else if (selectedOption.value === "2") {
            contentToAdd = contentOptions[1].text;
        } else {
            const availableOptions = contentOptions.slice(2);
            let randomOption;
            do {
                randomOption = availableOptions[Math.floor(Math.random() * availableOptions.length)].text;
            } while (thirdDiv.innerHTML.includes(randomOption));
            contentToAdd = randomOption;
        }

        const newContent = document.createElement('p');
        newContent.textContent = contentToAdd;
        thirdDiv.appendChild(newContent);
    }
}

function toggleFrame() {
    const footerFrame = document.getElementById('footerFrame');
    footerFrame.style.display = footerFrame.style.display === 'block' ? 'none' : 'block';
}

function resetPage() {
    document.getElementById('optionsForm').reset();
    document.getElementById('third').innerHTML = '<p>Treść początkowa</p>';
    const footerFrame = document.getElementById('footerFrame');
    footerFrame.style.display = 'none';
}

function appendName() {
    const header = document.querySelector('.header .name');
    const name = "Twoje Imię i Nazwisko";
    if (!header.innerHTML.includes(name)) {
        header.textContent = name;
    }
}
