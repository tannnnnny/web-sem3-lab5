document.addEventListener("DOMContentLoaded", () => {
    const div2 = document.getElementById("div2");
    const div5 = document.getElementById("div5");

    const div2Content = div2.innerHTML;
    div2.innerHTML = div5.innerHTML;
    div5.innerHTML = div2Content;
});


document.addEventListener("DOMContentLoaded", () => {
    const div4 = document.getElementById("div4");

    div4.innerHTML = `
        <div id="calculatorContainer">
            <label>Enter side (s): <input type="number" id="side" required min="0" /></label><br>
            <label>Enter radius (r): <input type="number" id="radius" required min="0" /></label><br>
            <button id="calculate">Calculate area</button>
            <div id="resultContainer"></div>
        </div>
    `;

    document.getElementById("calculate").addEventListener("click", () => {
        const side = parseFloat(document.getElementById("side").value);
        const radius = parseFloat(document.getElementById("radius").value);

        if (side <= 0 || radius <= 0) {
            alert("Please enter positive numbers.");
        } else {
            const area = (5 * side * radius) / 2;

            const result = document.createElement("p");
            result.textContent = `Area of pentagon: ${area.toFixed(2)}`;
            const resultContainer = document.getElementById("resultContainer");
            resultContainer.innerHTML = '';
            resultContainer.appendChild(result);
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const div4 = document.getElementById("div4");

    if (document.cookie) {
        const cookieValue = document.cookie.split('=')[1];
        const userConfirmed = confirm(`The reversed number from cookies is: ${cookieValue}. After pressing "OK", you need to refresh the page manually to see the changes.`);

        if (userConfirmed) {
            document.cookie = "reversedNumber=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

            alert("Cookies have been deleted. Please refresh the page manually to see the changes.");
        }
        return;
    }

    div4.innerHTML = `
        <div id="calculatorContainer">
            <label>Enter side (s): <input type="number" id="side" required /></label><br>
            <label>Enter radius (r): <input type="number" id="radius" required /></label><br>
            <button id="calculate">Calculate area</button>
            <div id="resultContainer"></div><br>
        </div>
    `;

    document.getElementById("calculate").addEventListener("click", () => {
        const side = parseFloat(document.getElementById("side").value);
        const radius = parseFloat(document.getElementById("radius").value);

        if (!isNaN(side) && !isNaN(radius) && side > 0 && radius > 0) {
            const area = (5 * side * radius) / 2;
            const resultContainer = document.getElementById("resultContainer");

            resultContainer.innerHTML = `Area of pentagon: ${area.toFixed(2)}`;

            const reverseButton = document.createElement("button");
            reverseButton.textContent = "Reverse number";

            resultContainer.appendChild(reverseButton);

            reverseButton.addEventListener("click", () => {
                const reversedArea = area.toFixed(2).split('').reverse().join('');
                alert(`Reversed number: ${reversedArea}`);

                document.cookie = `reversedNumber=${reversedArea}; path=/`;

                resultContainer.innerHTML = '';
            });
        } else {
            alert("Please enter valid positive numbers for both side and radius.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    function updateBorders(color) {
        const blocks = document.querySelectorAll('#div1, #div2, #div3, #div4, #div5, #div6, #div7');
        blocks.forEach(block => {
            block.style.borderColor = color;
        });
    }

    const savedColor = localStorage.getItem('borderColor');
    if (savedColor) {
        updateBorders(savedColor);
    }

    const div3 = document.getElementById('div3');

    div3.innerHTML = '<button id="colorPickerBtn">Change Border Color</button>';

    const colorPickerBtn = document.getElementById('colorPickerBtn');
    const colorPicker = document.getElementById('colorPicker');

    colorPickerBtn.addEventListener('click', function () {
        colorPicker.click();
    });

    colorPicker.addEventListener('input', function () {
        const selectedColor = colorPicker.value;
        updateBorders(selectedColor);
        localStorage.setItem('borderColor', selectedColor);
    });
});








