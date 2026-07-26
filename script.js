/* =========================================================
   PAWHOPE
   ANIMAL MANAGEMENT + PAYPAL COPY SYSTEM
========================================================= */


/* =========================================================
   ANIMAL DATA
=========================================================

   YENİ HAYVAN EKLEMEK İÇİN:

   1. empty: false yap
   2. name yaz
   3. title yaz
   4. image kısmına fotoğraf URL'si koy
   5. story kısmına hikayesini yaz

   HAYVANI KALDIRMAK İÇİN:

   empty: true

   yapman yeterli.

========================================================= */


const animals = [

    /* =========================================
       ANIMAL 1 — SWEETIE
    ========================================== */

    {
        empty: false,

        name: "Sweetie",

        title: "Needs Medical Care",

        image: "https://github.com/pawhope/pawhope/blob/main/sweetie.jpg?raw=true",

        story:
            "Found beaten up between some boxes along the street. Her wounds are open and she needs special veterinary treatment."

    },


    /* =========================================
       ANIMAL 2
    ========================================== */

    {
        empty: true,

        name: "",

        title: "",

        image: "",

        story: ""

    },


    /* =========================================
       ANIMAL 3
    ========================================== */

    {
        empty: true,

        name: "",

        title: "",

        image: "",

        story: ""

    },


    /* =========================================
       ANIMAL 4
    ========================================== */

    {
        empty: true,

        name: "",

        title: "",

        image: "",

        story: ""

    },


    /* =========================================
       ANIMAL 5
    ========================================== */

    {
        empty: true,

        name: "",

        title: "",

        image: "",

        story: ""

    },


    /* =========================================
       ANIMAL 6
    ========================================== */

    {
        empty: true,

        name: "",

        title: "",

        image: "",

        story: ""

    }

];



/* =========================================================
   ANIMAL CARD GENERATOR
========================================================= */


const animalGrid =
    document.getElementById("animal-grid");


function createAnimalCard(animal) {


    /* =========================================
       EMPTY CARD
    ========================================== */

    if (animal.empty) {

        return `

            <article class="animal-card empty-card">

                <div class="animal-image empty-animal">

                    <div class="empty-animal-content">

                        <span class="empty-paw">
                            🐾
                        </span>

                        <strong>
                            EMPTY
                        </strong>

                        <span>
                            Waiting for a new rescue
                        </span>

                    </div>

                </div>


                <div class="animal-content">

                    <h3>
                        A New Friend
                    </h3>

                    <p>
                        This space is waiting for
                        an animal who needs your help.
                    </p>

                </div>

            </article>

        `;

    }



    /* =========================================
       ACTIVE ANIMAL CARD
    ========================================== */

    return `

        <article class="animal-card">

            <div class="animal-image">

                <img
                    src="${animal.image}"
                    alt="${animal.name}"
                    loading="lazy"
                >

                <span class="animal-label">

                    ${animal.title}

                </span>

            </div>


            <div class="animal-content">

                <h3>

                    ${animal.name}

                </h3>


                <p>

                    ${animal.story}

                </p>


                <a
                    href="#donate"
                    class="animal-link"
                >

                    Help ${animal.name} →

                </a>

            </div>

        </article>

    `;

}



/* =========================================================
   DISPLAY ALL ANIMALS
========================================================= */


function renderAnimals() {


    if (!animalGrid) {

        return;

    }


    animalGrid.innerHTML =

        animals
            .map(createAnimalCard)
            .join("");

}


renderAnimals();



/* =========================================================
   PAYPAL COPY SYSTEM
========================================================= */


const copyPaypalButton =
    document.getElementById(
        "copy-paypal-button"
    );


const paypalUrl =
    document.getElementById(
        "paypal-url"
    );


const copyMessage =
    document.getElementById(
        "copy-message"
    );



if (
    copyPaypalButton &&
    paypalUrl
) {


    copyPaypalButton.addEventListener(
        "click",
        async function () {


            const paypalText =
                paypalUrl.textContent.trim();


            try {


                await navigator.clipboard.writeText(
                    paypalText
                );


                if (copyMessage) {

                    copyMessage.textContent =
                        "PayPal address copied successfully! ❤️";

                }


                copyPaypalButton.textContent =
                    "Copied!";


                setTimeout(
                    function () {


                        copyPaypalButton.textContent =
                            "Copy";


                        if (copyMessage) {

                            copyMessage.textContent =
                                "";

                        }


                    },
                    2500
                );


            } catch (error) {


                if (copyMessage) {

                    copyMessage.textContent =
                        "Please copy the PayPal address manually.";

                }

            }

        }
    );

}



/* =========================================================
   NAVIGATION
========================================================= */


const navLinks =
    document.querySelectorAll(
        ".main-nav a"
    );


navLinks.forEach(
    function (link) {


        link.addEventListener(
            "click",
            function () {


                navLinks.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );

            }
        );

    }
);



/* =========================================================
   CONSOLE MESSAGE
========================================================= */


console.log(
    "🐾 PawHope is ready to help animals in need."
);
