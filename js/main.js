const languages = ["ru"];

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.dropdown-languages').forEach(dropdown => {
    dropdown.addEventListener('change', function () {
        let pathname = window.location.pathname;
        let basePath = "/magicbrawl.gg/";
        
        let relativePath = pathname.replace(basePath, "");
        
        if (relativePath.startsWith("ru/")) {
            relativePath = relativePath.substring(3);
        }
        
        if (relativePath === "" || relativePath === "ru") {
            relativePath = "index.html";
        }

        switch (dropdown.dataset.value) {
            case 'en': 
                window.location.href = basePath + relativePath; 
                break;
            case 'ru':
                window.location.href = basePath + "ru.html"; 
                break;
        }
    });
});
