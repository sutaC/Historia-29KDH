// @ts-check

const filterInputs = /** @type {NodeListOf<HTMLInputElement>} */ (
    document.querySelectorAll('.filter .field input[type="checkbox"]')
);
const historyListElements = /** @type {NodeListOf<HTMLUListElement>} */ (
    document.querySelectorAll("ul.history li")
);

const filters = {
    milestone: true,
    leader: true,
    assistant: true,
    event: true,
    other: true,
};

filterInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
        filters[input.name] = input.checked;
        historyListElements.forEach((li) => {
            if (filters[li.className]) {
                li.style.display = "block";
            } else {
                li.style.display = "none";
            }
        });
    });
});
