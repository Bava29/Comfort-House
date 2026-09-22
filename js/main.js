/* =========================================
   Comfort House
   Header & Theme Functions
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mobileMenu.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", isOpen);

            if (isOpen) {
                menuToggle.setAttribute("aria-label", "Close menu");
                menuToggle.innerHTML =
                    '<i class="fa-solid fa-xmark"></i>';
            } else {
                menuToggle.setAttribute("aria-label", "Open menu");
                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }

        });

    }


    /* =========================================
       MOBILE SLEEP & CARE DROPDOWN
    ========================================= */

    const mobileDropdownToggle =
        document.querySelector(".mobile-dropdown-toggle");

    const mobileDropdown =
        document.querySelector(".mobile-dropdown");

    if (mobileDropdownToggle && mobileDropdown) {

        mobileDropdownToggle.addEventListener("click", function () {

            const isOpen =
                mobileDropdown.classList.toggle("open");

            mobileDropdownToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

        });

    }


    /* =========================================
       DARK MODE
    ========================================= */

    const themeButtons =
        document.querySelectorAll(".theme-toggle, #darkModeToggle");

    const savedTheme =
        localStorage.getItem("comfort-house-theme");

    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark-mode");
    }


    function updateThemeIcons() {

        const isDark =
            document.documentElement.classList.contains("dark-mode");

        themeButtons.forEach(function (button) {

            const icon = button.querySelector("i");
            const status = button.querySelector(".action-status");

            if (isDark) {

                if (icon) {
                    icon.className = "fa-solid fa-sun";
                }

                if (status) {
                    status.textContent = "On";
                }

                button.setAttribute(
                    "aria-label",
                    "Switch to light mode"
                );

            } else {

                if (icon) {
                    icon.className = "fa-solid fa-moon";
                }

                if (status) {
                    status.textContent = "Off";
                }

                button.setAttribute(
                    "aria-label",
                    "Switch to dark mode"
                );

            }

        });

    }


    themeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const isDark =
                document.documentElement.classList.toggle(
                    "dark-mode"
                );

            localStorage.setItem(
                "comfort-house-theme",
                isDark ? "dark" : "light"
            );

            updateThemeIcons();

        });

    });

    updateThemeIcons();


    /* =========================================
       RTL MODE
    ========================================= */

    const rtlButtons =
        document.querySelectorAll(".rtl-toggle, #rtlToggle");

    const savedDirection =
        localStorage.getItem("comfort-house-direction");

    if (savedDirection === "rtl") {

        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );

    }


    function updateRTLButtons() {

        const isRTL =
            document.documentElement.getAttribute("dir") === "rtl";

        rtlButtons.forEach(function (button) {

            const status = button.querySelector(".action-status");

            if (status) {
                status.textContent = isRTL ? "On" : "Off";
            }

            button.setAttribute(
                "aria-label",
                isRTL
                    ? "Switch to LTR mode"
                    : "Switch to RTL mode"
            );

        });

    }


    rtlButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const isRTL =
                document.documentElement.getAttribute("dir") === "rtl";

            if (isRTL) {

                document.documentElement.setAttribute(
                    "dir",
                    "ltr"
                );

                localStorage.setItem(
                    "comfort-house-direction",
                    "ltr"
                );

            } else {

                document.documentElement.setAttribute(
                    "dir",
                    "rtl"
                );

                localStorage.setItem(
                    "comfort-house-direction",
                    "rtl"
                );

            }

            updateRTLButtons();

        });

    });

    updateRTLButtons();


    /* =========================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ========================================= */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-nav a, .mobile-login-btn"
        );

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (mobileMenu) {
                mobileMenu.classList.remove("active");
            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }

        });

    });


    /* =========================================
       CLOSE MOBILE MENU ON RESIZE
    ========================================= */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 991) {

            if (mobileMenu) {
                mobileMenu.classList.remove("active");
            }

            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open menu"
                );

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }

        }

    });

});

/* =========================================
   SCROLL TO TOP
========================================= */

const scrollTopButton = document.querySelector(".scroll-top");

if (scrollTopButton) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            scrollTopButton.classList.add("show");
        } else {
            scrollTopButton.classList.remove("show");
        }

    });


    scrollTopButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/* =========================================================
   ADVANCED PRODUCT FILTER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ==================== PRODUCT DATA ==================== */

    const products = [
        {
            id: 1,
            name: "CloudRest Premium Mattress",
            category: "Memory Foam Mattress",
            image: "images/cloudrest-premium-mattress.jpg",
            price: 42999,
            description: "Plush memory foam comfort designed to gently cradle your body.",
            size: "Queen Size",
            sizeValue: "queen",
            material: "memory",
            materialName: "Memory Foam",
            firmness: ["soft", "medium-soft"],
            sleep: ["side", "back"],
            match: 96
        },

        {
            id: 2,
            name: "BalanceCore Hybrid Mattress",
            category: "Hybrid Mattress",
            image: "images/balancecore-hybrid-mattress.jpg",
            price: 48999,
            description: "A balanced combination of springs and pressure-relieving foam.",
            size: "King Size",
            sizeValue: "king",
            material: "hybrid",
            materialName: "Hybrid",
            firmness: ["balanced", "medium-firm"],
            sleep: ["back", "any"],
            match: 94
        },

        {
            id: 3,
            name: "PureLatex Comfort Mattress",
            category: "Latex Mattress",
            image: "images/purelatex-comfort-mattress.jpg",
            price: 55999,
            description: "Naturally resilient latex comfort with a supportive, breathable feel.",
            size: "Queen Size",
            sizeValue: "queen",
            material: "latex",
            materialName: "Latex",
            firmness: ["balanced", "medium-firm"],
            sleep: ["side", "back", "any"],
            match: 92
        },

        {
            id: 4,
            name: "SpringEase Support Mattress",
            category: "Spring Mattress",
            image: "images/springease-support-mattress.jpg",
            price: 34999,
            description: "Responsive spring support created for stable and comfortable sleep.",
            size: "King Size",
            sizeValue: "king",
            material: "spring",
            materialName: "Spring",
            firmness: ["medium-firm", "firm"],
            sleep: ["back", "front"],
            match: 89
        },

        {
            id: 5,
            name: "SoftCloud Luxe Mattress",
            category: "Memory Foam Mattress",
            image: "images/softcloud-luxe-mattress.jpg",
            price: 38999,
            description: "A softer memory foam surface made for relaxed, pressure-free nights.",
            size: "Queen Size",
            sizeValue: "queen",
            material: "memory",
            materialName: "Memory Foam",
            firmness: ["soft", "medium-soft"],
            sleep: ["side", "any"],
            match: 91
        },

        {
            id: 6,
            name: "Orthopaedic Mattress",
            category: "Orthopaedic Mattress",
            image: "images/firmcore-orthopaedic-mattress.jpg",
            price: 31999,
            description: "Firm and dependable support for sleepers who prefer a nice feel.",
            size: "King Size",
            sizeValue: "king",
            material: "spring",
            materialName: "Spring",
            firmness: ["firm", "medium-firm"],
            sleep: ["back", "front"],
            match: 88
        },

        {
            id: 7,
            name: "Latex Mattress",
            category: "Latex Mattress",
            image: "images/naturalrest-latex-mattress.jpg",
            price: 45999,
            description: "Naturally responsive latex comfort with a fresh and supportive feel.",
            size: "Single Size",
            sizeValue: "single",
            material: "latex",
            materialName: "Latex",
            firmness: ["balanced", "medium-firm"],
            sleep: ["back", "any"],
            match: 90
        },

        {
            id: 8,
            name: "EliteSleep Hybrid",
            category: "Premium Hybrid Mattress",
            image: "images/elitesleep-hybrid-pro.jpg",
            price: 59999,
            description: "Premium hybrid construction combining support with comfort.",
            size: "King Size",
            sizeValue: "king",
            material: "hybrid",
            materialName: "Hybrid",
            firmness: ["balanced", "medium-firm"],
            sleep: ["side", "back", "any"],
            match: 97
        }
    ];


    /* ==================== STATE ==================== */

    let selectedFilters = {
        sleep: [],
        firmness: [],
        material: [],
        size: []
    };

    let selectedBudget = 60000;


    /* ==================== ELEMENTS ==================== */

    const productsGrid = document.getElementById("productsGrid");
    const resultCount = document.getElementById("resultCount");
    const footerResultCount = document.getElementById("footerResultCount");
    const activeFilters = document.getElementById("activeFilters");
    const clearFilters = document.getElementById("clearFilters");
    const budgetRange = document.getElementById("budgetRange");
    const budgetValue = document.getElementById("budgetValue");
    const noProducts = document.getElementById("noProducts");
    const resetNoResults = document.getElementById("resetNoResults");
    const sortProducts = document.getElementById("sortProducts");


    /* ==================== FORMAT PRICE ==================== */

    function formatPrice(price) {
        return "₹" + price.toLocaleString("en-IN");
    }


    /* ==================== CHECK PRODUCT MATCH ==================== */

    function productMatches(product) {

        /* Sleep */
        if (
            selectedFilters.sleep.length > 0 &&
            !selectedFilters.sleep.some(value =>
                product.sleep.includes(value)
            )
        ) {
            return false;
        }


        /* Firmness */
        if (
            selectedFilters.firmness.length > 0 &&
            !selectedFilters.firmness.some(value =>
                product.firmness.includes(value)
            )
        ) {
            return false;
        }


        /* Material */
        if (
            selectedFilters.material.length > 0 &&
            !selectedFilters.material.includes(product.material)
        ) {
            return false;
        }


        /* Size */
        if (
            selectedFilters.size.length > 0 &&
            !selectedFilters.size.includes(product.sizeValue)
        ) {
            return false;
        }


        /* Budget */
        if (product.price > selectedBudget) {
            return false;
        }


        return true;
    }


    /* ==================== GET MATCHING PRODUCTS ==================== */

    function getMatchingProducts() {
        return products.filter(productMatches);
    }


    /* ==================== SORT PRODUCTS ==================== */

    function sortProductList(productList) {

        const sorted = [...productList];

        if (sortProducts.value === "low") {
            sorted.sort((a, b) => a.price - b.price);
        }

        else if (sortProducts.value === "high") {
            sorted.sort((a, b) => b.price - a.price);
        }

        else if (sortProducts.value === "match") {
            sorted.sort((a, b) => b.match - a.match);
        }

        return sorted;
    }


    /* ==================== RENDER PRODUCTS ==================== */

    function renderProducts() {

        let matchingProducts = getMatchingProducts();

        matchingProducts = sortProductList(matchingProducts);

        productsGrid.innerHTML = "";


        /* Update count */
        resultCount.textContent = matchingProducts.length;
        footerResultCount.textContent = matchingProducts.length;


        /* No Results */
        if (matchingProducts.length === 0) {

            productsGrid.style.display = "none";
            noProducts.classList.add("show");

            return;
        }


        productsGrid.style.display = "grid";
        noProducts.classList.remove("show");


        /* Render cards */

        matchingProducts.forEach(function (product) {

            const card = document.createElement("article");

            card.className = "advanced-product-card";

            card.innerHTML = `
                <div class="product-card-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="product-match-badge">
                        <strong>${product.match}%</strong>
                        <span>Match</span>
                    </div>

                    <button
                        type="button"
                        class="product-wishlist"
                        aria-label="Add ${product.name} to wishlist"
                    >
                        <i class="fa-regular fa-heart"></i>
                    </button>

                </div>


                <div class="product-card-content">

                    <span class="product-card-category">
                        ${product.category}
                    </span>

                    <h3>${product.name}</h3>

                    <p class="product-card-description">
                        ${product.description}
                    </p>


                    <div class="product-card-meta">

                        <span class="product-meta-item">
                            ${product.size}
                        </span>

                        <span class="product-meta-item">
                            ${product.materialName}
                        </span>

                    </div>


                    <div class="product-card-footer">

                        <div class="product-price">
                            <span>STARTING FROM</span>
                            <strong>${formatPrice(product.price)}</strong>
                        </div>

                        <a href="#" class="product-view-btn">
                            View Product
                            <i class="fa-solid fa-arrow-right"></i>
                        </a>

                    </div>

                </div>
            `;


            productsGrid.appendChild(card);
        });


        /* Wishlist */

        const wishlistButtons =
            document.querySelectorAll(".product-wishlist");

        wishlistButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                this.classList.toggle("active");

                const icon = this.querySelector("i");

                if (this.classList.contains("active")) {
                    icon.classList.remove("fa-regular");
                    icon.classList.add("fa-solid");
                } else {
                    icon.classList.remove("fa-solid");
                    icon.classList.add("fa-regular");
                }

            });

        });

    }


    /* ==================== ACTIVE FILTER TAGS ==================== */

    function updateActiveFilters() {

        activeFilters.innerHTML = "";

        let hasFilter = false;


        /* Sleep */

        selectedFilters.sleep.forEach(function (value) {

            hasFilter = true;

            const names = {
                side: "Side Sleeper",
                back: "Back Sleeper",
                front: "Front Sleeper",
                any: "Any Position"
            };

            createFilterTag(
                names[value],
                "sleep",
                value
            );
        });


        /* Firmness */

        selectedFilters.firmness.forEach(function (value) {

            hasFilter = true;

            const names = {
                soft: "Soft",
                "medium-soft": "Medium Soft",
                balanced: "Balanced",
                "medium-firm": "Medium Firm",
                firm: "Firm"
            };

            createFilterTag(
                names[value],
                "firmness",
                value
            );
        });


        /* Material */

        selectedFilters.material.forEach(function (value) {

            hasFilter = true;

            const names = {
                memory: "Memory Foam",
                latex: "Latex",
                spring: "Spring",
                hybrid: "Hybrid"
            };

            createFilterTag(
                names[value],
                "material",
                value
            );
        });


        /* Size */

        selectedFilters.size.forEach(function (value) {

            hasFilter = true;

            const names = {
                single: "Single",
                double: "Double",
                queen: "Queen",
                king: "King"
            };

            createFilterTag(
                names[value],
                "size",
                value
            );
        });


        /* Budget */

        if (selectedBudget < 60000) {

            hasFilter = true;

            createFilterTag(
                "Up To " + formatPrice(selectedBudget),
                "budget",
                "budget"
            );
        }


        if (!hasFilter) {

            activeFilters.innerHTML = `
                <span class="no-filter-text">
                    Showing our complete collection
                </span>
            `;
        }

    }


    /* ==================== CREATE FILTER TAG ==================== */

    function createFilterTag(label, type, value) {

        const tag = document.createElement("span");

        tag.className = "active-filter-tag";

        tag.innerHTML = `
            ${label}

            <button
                type="button"
                data-type="${type}"
                data-value="${value}"
                aria-label="Remove ${label}"
            >
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;

        activeFilters.appendChild(tag);
    }


    /* ==================== FILTER TAG REMOVE ==================== */

    activeFilters.addEventListener("click", function (event) {

        const button = event.target.closest("button");

        if (!button) return;

        const type = button.dataset.type;
        const value = button.dataset.value;


        if (type === "budget") {

            selectedBudget = 60000;

            budgetRange.value = 60000;

            budgetValue.textContent = formatPrice(60000);

        } else {

            selectedFilters[type] =
                selectedFilters[type].filter(
                    item => item !== value
                );

            updateCheckboxUI();
        }


        updateActiveFilters();
        renderProducts();

    });


    /* ==================== CHECKBOX FILTER ==================== */

    const checkboxFilters =
        document.querySelectorAll(
            '.filter-choice input[type="checkbox"]'
        );


    checkboxFilters.forEach(function (checkbox) {

        checkbox.addEventListener("change", function () {

            const type = this.dataset.filter;
            const value = this.value;


            if (this.checked) {

                if (!selectedFilters[type].includes(value)) {
                    selectedFilters[type].push(value);
                }

            } else {

                selectedFilters[type] =
                    selectedFilters[type].filter(
                        item => item !== value
                    );
            }


            updateActiveFilters();
            renderProducts();

        });

    });


    /* ==================== MATERIAL FILTER ==================== */

    const materialButtons =
        document.querySelectorAll(".material-filter");


    materialButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const value = this.dataset.value;


            if (selectedFilters.material.includes(value)) {

                selectedFilters.material =
                    selectedFilters.material.filter(
                        item => item !== value
                    );

                this.classList.remove("active");

            } else {

                selectedFilters.material.push(value);

                this.classList.add("active");
            }


            updateActiveFilters();
            renderProducts();

        });

    });


    /* ==================== SIZE FILTER ==================== */

    const sizeButtons =
        document.querySelectorAll(".size-filter");


    sizeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const value = this.dataset.value;


            if (selectedFilters.size.includes(value)) {

                selectedFilters.size =
                    selectedFilters.size.filter(
                        item => item !== value
                    );

                this.classList.remove("active");

            } else {

                selectedFilters.size.push(value);

                this.classList.add("active");
            }


            updateActiveFilters();
            renderProducts();

        });

    });


    /* ==================== BUDGET ==================== */

    budgetRange.addEventListener("input", function () {

        selectedBudget = Number(this.value);

        budgetValue.textContent =
            formatPrice(selectedBudget);

        updateActiveFilters();
        renderProducts();

    });


    /* ==================== CLEAR ALL ==================== */

    clearFilters.addEventListener("click", function () {

        selectedFilters = {
            sleep: [],
            firmness: [],
            material: [],
            size: []
        };

        selectedBudget = 60000;

        budgetRange.value = 60000;
        budgetValue.textContent = formatPrice(60000);

        updateCheckboxUI();

        materialButtons.forEach(function (button) {
            button.classList.remove("active");
        });

        sizeButtons.forEach(function (button) {
            button.classList.remove("active");
        });

        updateActiveFilters();
        renderProducts();

    });


    /* ==================== RESET NO RESULTS ==================== */

    resetNoResults.addEventListener("click", function () {

        clearFilters.click();

    });


    /* ==================== UPDATE CHECKBOX UI ==================== */

    function updateCheckboxUI() {

        checkboxFilters.forEach(function (checkbox) {

            const type = checkbox.dataset.filter;
            const value = checkbox.value;

            checkbox.checked =
                selectedFilters[type].includes(value);

        });

    }


    /* ==================== SORT ==================== */

    sortProducts.addEventListener("change", function () {

        renderProducts();

    });


    /* ==================== INITIAL LOAD ==================== */

    updateActiveFilters();
    renderProducts();

});

/* =========================================================
   SLEEP LAB INTERACTION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const sleepOptions =
        document.querySelectorAll(".sleep-lab-option");

    const sleepImage =
        document.getElementById("sleepLabImage");

    const sleepTag =
        document.getElementById("sleepLabTag");

    const sleepLabel =
        document.getElementById("sleepLabLabel");

    const sleepTitle =
        document.getElementById("sleepLabTitle");

    const sleepDescription =
        document.getElementById("sleepLabDescription");

    const sleepRecommendation =
        document.getElementById("sleepLabRecommendation");


    const sleepData = {

        side: {
            image: "images/sleep-lab-side.jpg",
            tag: "01 / SIDE SLEEPER",
            label: "PRESSURE RELIEF",
            title: "Give Your Shoulders & Hips Room To Relax.",
            description:
                "Side sleepers often benefit from a mattress that provides cushioning around pressure points while still keeping the body comfortably supported.",
            recommendation:
                "Softer comfort with pressure-relieving foam"
        },

        back: {
            image: "images/sleep-lab-back.jpg",
            tag: "02 / BACK SLEEPER",
            label: "BALANCED SUPPORT",
            title: "Keep Your Body Comfortably Aligned.",
            description:
                "Back sleepers can benefit from balanced support that helps distribute body weight evenly while maintaining a comfortable sleeping surface.",
            recommendation:
                "Medium-firm support with balanced comfort"
        },

        front: {
            image: "images/sleep-lab-front.jpg",
            tag: "03 / FRONT SLEEPER",
            label: "STABLE SUPPORT",
            title: "Choose A Feel That Keeps You Grounded.",
            description:
                "Front sleepers generally prefer a stable sleep surface that prevents excessive sinking and provides a more supportive overall feel.",
            recommendation:
                "Firm, stable comfort with responsive support"
        }

    };


    sleepOptions.forEach(function (option) {

        option.addEventListener("click", function () {

            const selectedSleep =
                this.dataset.sleep;

            const data =
                sleepData[selectedSleep];


            /* Active state */

            sleepOptions.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");


            /* Fade image */

            sleepImage.style.opacity = "0";


            setTimeout(function () {

                sleepImage.src = data.image;
                sleepImage.alt = data.title;

                sleepTag.textContent = data.tag;
                sleepLabel.textContent = data.label;
                sleepTitle.textContent = data.title;
                sleepDescription.textContent = data.description;
                sleepRecommendation.textContent =
                    data.recommendation;

                sleepImage.style.opacity = "1";

            }, 180);

        });

    });

});
