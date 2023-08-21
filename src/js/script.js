document.addEventListener("DOMContentLoaded", function () {
    //////////////////// POBRANE ELEMENTY ///////////////////
    const projectModal = document.querySelectorAll(".project-modal");
    const projectsGallery = document.querySelector(".projects-gallery");
    const closeProjectBtn = document.querySelectorAll(".project-modal-close");
    const expandGalleryBtn = document.querySelector(".expand-button");
    const gradient = projectsGallery.querySelector(".projects-gradient");
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");
    const body = document.querySelector(".body");
    const menuItems = document.querySelectorAll(".nav-link-close");
    const menu = document.querySelector(".navbar-collapse");

    ////////////// FUNKCJE ///////////////////

    ////// WYSZUKIWARKA //////////
    const showSearchBar = () => {
        searchInput.classList.toggle("hide-search-input");
        searchInput.classList.toggle("show-search-input");
    };


    /////////// GALERIA PROJEKTÓW ///////////////
    ////// blokada body po otwarciu projektu
    function freezeBody() {
        body.classList.add("freeze");
    }

    function unfreezeBody() {
        body.classList.remove("freeze");
    }

    /// rozwinięcie galerii ////////////////////////////////////
    const expandGallery = (e) => {
        console.log(e.target);
        projectsGallery.style.height = "auto";
        gradient.style.opacity = "0";
        expandGalleryBtn.style.display = "none";
    };
    ///////////////////////////////////////////////////////////

    ///// obsługa popup-ów///////////////////////////////////////
    const openProject = (e) => {
        const projectClassName = e.target.parentElement.className.split(" ")[0];

        projectModal.forEach((modal) => {
            if (modal.classList.contains(projectClassName)) {
                modal.classList.add("visible");
                freezeBody();
            }
        });

    };

    /// resetowanie pozycji modala po zamknięciu
    function projectModalScrollTop() {
        projectModal.forEach((project) => {
            project.scrollTop = 0;
        });
    }

    const closeProject = () => {
        projectModal.forEach((modal) => {
            modal.classList.remove("visible");
        });
        projectModalScrollTop();
        unfreezeBody();
    };
    ///////////////////////////////////////

    ///// LISTENERY //////////////////
    projectsGallery.addEventListener("click", openProject);
    // closeProjectBtn.addEventListener("click", closeProject);
    closeProjectBtn.forEach((button) => {
        button.addEventListener("click", closeProject);
    });
    // projectModal.forEach((modal) => {
    //     modal.addEventListener("click", closeProject);
    // });
    expandGalleryBtn.addEventListener("click", expandGallery);
    searchIcon.addEventListener("click", showSearchBar);
    menuItems.forEach((item) =>
        item.addEventListener("click", () => menu.classList.remove("show"))
    );
});
