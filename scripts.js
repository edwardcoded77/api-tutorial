// console.log("JavaScript is working!");

let copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {
    button.addEventListener("click", () => {
        let code = button
            .closest(".code-container")
            .querySelector("code")
            .innerText;

        navigator.clipboard.writeText(code);

        button.textContent = "Copied!";

        setTimeout(() => {
            button.textContent = "Copy";
        }, 1500);
    });
});


