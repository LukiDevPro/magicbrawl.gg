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
        let trimmedPath = pathname.substring(pathname.indexOf("/") + 1);
        let path = trimmedPath.split("/");

        if (languages.includes(path[0].trimStart("/"))) {  // check if first path part is a langauge
            trimmedPath = path.slice(1).join("\/");
        }

        switch (dropdown.dataset.value) {
            case 'en': 
                window.location.pathname = `/${trimmedPath}`; 
                break;
            default:
                window.location.pathname = `/${dropdown.dataset.value}/${trimmedPath}`; 
                break;
        }
    });
});
