// Temple data array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Three additional temples
    {
        templeName: "Monterrey Mexico",
        location: "Monterrey, Nuevo León, Mexico",
        dedicated: "2002, April, 28",
        area: 16498,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/5c22836ac5e36d099a131d686b0850eb22e1a0e8/full/500%2C/0/default"
    },
    {
        templeName: "Fort Lauderdale Florida",
        location: "Windermere, Florida, United States",
        dedicated: "2014, May, 4",
        area: 30500,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/0871c25e05d9ad7a649fba4ce0cffcb112f0aed7/full/500%2C/0/default"
    },
    {
        templeName: "McAllen Texas",
        location: "McAllen, Texas, United States",
        dedicated: "2023, October, 8",
        area: 27897,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/51edc593152e11ee90afeeeeac1ef99dfe5ba797/full/500%2C/0/default"
    }
];

// ---- DOM References ----
const templeContainer = document.getElementById("temple-container");
const filterTitle = document.getElementById("filter-title");
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

// ---- Create Temple Cards ----
function createTempleCard(temple) {
    const figure = document.createElement("figure");
    figure.classList.add("temple-card");

    figure.innerHTML = `
    <h3>${temple.templeName}</h3>
    <div class="temple-info">
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
    </div>
    <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
  `;
    return figure;
}

function displayTemples(filteredTemples) {
    templeContainer.innerHTML = "";
    filteredTemples.forEach((temple) => {
        templeContainer.appendChild(createTempleCard(temple));
    });
}

// ---- Filtering Logic ----
function getYear(dedicatedString) {
    return parseInt(dedicatedString.split(",")[0]);
}

function filterTemples(filterName) {
    let filtered;
    switch (filterName) {
        case "old":
            filtered = temples.filter((t) => getYear(t.dedicated) < 1900);
            filterTitle.textContent = "Old";
            break;
        case "new":
            filtered = temples.filter((t) => getYear(t.dedicated) > 2000);
            filterTitle.textContent = "New";
            break;
        case "large":
            filtered = temples.filter((t) => t.area > 90000);
            filterTitle.textContent = "Large";
            break;
        case "small":
            filtered = temples.filter((t) => t.area < 10000);
            filterTitle.textContent = "Small";
            break;
        default:
            filtered = temples;
            filterTitle.textContent = "Home";
            break;
    }
    displayTemples(filtered);
}

// ---- Navigation Event Listeners ----
const navLinks = navMenu.querySelectorAll("a[data-filter]");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Update active state
        navLinks.forEach((l) => l.classList.remove("active-filter"));
        link.classList.add("active-filter");

        // Filter and display
        filterTemples(link.dataset.filter);

        // Close the mobile menu
        navMenu.classList.remove("active");
        menuButton.classList.remove("close");
    });
});

// ---- Hamburger Menu Toggle ----
menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuButton.classList.toggle("close");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest("header") && !e.target.closest(".nav-menu")) {
        navMenu.classList.remove("active");
        menuButton.classList.remove("close");
    }
});

// ---- Footer: Copyright Year & Last Modified ----
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// ---- Initial Render ----
filterTemples("home");
