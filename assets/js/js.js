const copyButton = document.querySelector(".copy-button");
    const copyInput = document.querySelector(".copy-input");

    copyButton.addEventListener("click", () => {
        copyInput.select();
        document.execCommand("copy");
        copyButton.textContent = "Copiado!";
        setTimeout(() => {
            copyButton.textContent = "Copy";
        }, 2000);
    });

    