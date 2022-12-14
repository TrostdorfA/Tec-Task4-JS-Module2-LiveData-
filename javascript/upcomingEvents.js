const data = {
  fechaActual: "2022-01-01",
  eventos: [
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
      name: "Collectivities Party",
      date: "2021-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
      name: "Korean style",
      date: "2021-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 10,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
      name: "Jurassic Park",
      date: "2021-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      assistance: 65892,
      price: 15,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
      name: "Parisian Museum",
      date: "2022-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
      name: "Comicon",
      date: "2021-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
      name: "Halloween Night",
      date: "2022-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
      name: "Metallica in concert",
      date: "2022-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
      name: "Electronic Fest",
      date: "2021-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
      name: "10K for life",
      date: "2021-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Campo de FutbÃ³l",
      capacity: 30000,
      assistance: 25698,
      price: 3,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
      name: "15K NY",
      date: "2021-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      assistance: 2569800,
      price: 3,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
      name: "School's book fair",
      date: "2022-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
      name: "Just for your kitchen",
      date: "2021-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
      name: "Batman",
      date: "2021-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
      name: "Avengers",
      date: "2022-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
    },
  ],
}

// Recorrer el array de los eventos y obtener por un lado la fecha de base o de referencia y por el otro los eventos
// Para la pagina index el loop debera generar un template dinamico, con tantos datos como objetos contenga el array
// Dibujar las cards con .map

const events = data.eventos.map((event) => {
  return event.name
})

function paintDom(eventos) {
  let section = ``

  const tagToUpdate = document.getElementById("root")

  for (let i = 0; i < data.eventos.length; i++) {
    if (Date.parse(data.fechaActual) < Date.parse(data.eventos[i].date)) {
      section += `
      <div class="col">
                      <div class="card h-100">
                          <div class="card-img-container">
                              <img src="${data.eventos[i].image}" class="card-img-top" alt="...">
                          </div>
                          <div class="card-body text-center">
                              <h3 class="card-title">${data.eventos[i].name}</h3>
                              <p class="card-text">${data.eventos[i].description}</p>
                              <div class="d-flex justify-content-between">
                                <p>Price: ${data.eventos[i].price}</p>
                                <a href="./pages/details.html" target="_blank" class="btn btn-primary view">View
                                    more...</a>
                                    <p class="card-category hidden">Categoria: ${data.eventos[i].category}</p>
                            </div>
                          </div>
                      </div>
                  </div>
      `
    }
  }
  tagToUpdate.innerHTML = section
}

paintDom(events)

// Creando checkboxs filtrando por categoria

const categories = data.eventos.map((event) => {
  return event.category
})

const uniqueCategories = [...new Set(categories)]

function paintCategories(categories) {
  let div = ``

  const tagToUpdate = document.getElementById("categories")

  for (let i = 0; i < uniqueCategories.length; i++) {
    div += `
    <label for="${uniqueCategories[i]}"><input class="form-check-input" type="checkbox" 
    id="${uniqueCategories[i]}" name="position" value="${uniqueCategories[i]}">${uniqueCategories[i]}</label>
    `
  }
  tagToUpdate.innerHTML = div
}

paintCategories(uniqueCategories)

const searchFilterEvents = () => {
  // Filtrando paintDom por buscador

  const inputSearch = document.getElementById("searchInput")
  console.log("inputSearch", inputSearch)

  const eventCards = document.querySelectorAll(".col")

  inputSearch.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase()

    eventCards.forEach((card) => {
      console.log("card", card)
      const cardTitle = card
        .querySelector(".card-title")
        .textContent.toLowerCase()
      const cardText = card
        .querySelector(".card-text")
        .textContent.toLowerCase()
      cardTitle.includes(searchValue)
        ? card.classList.remove("hidden")
        : card.classList.add("hidden") || cardText.includes(searchValue)
        ? card.classList.remove("hidden")
        : card.classList.add("hidden")
    })

    const cards = document.querySelectorAll(".col:not(.hidden)").length

    if (cards === 0) {
      document.getElementById("errorP").classList.remove("hidden")
    } else {
      document.getElementById("errorP").classList.add("hidden")
    }
  })

  // Filtrando paintDom por checkboxs

  const inputCheckbox = document.getElementById("categories")
  console.log("inputCheckbox", inputCheckbox)

  const elementsCategories = document.getElementsByClassName("card-category")

  inputCheckbox.addEventListener("change", (e) => {
    const inputs = document.querySelectorAll("input[type=checkbox]:checked")

    const values = []

    inputs.forEach((input) => {
      values.push(input.value)
    })

    for (let i = 0; i < elementsCategories.length; i++) {
      const element = elementsCategories[i]
      const elementCategory = element.textContent.split(": ")[1]

      if (values.includes(elementCategory)) {
        element.parentElement.parentElement.parentElement.parentElement.classList.remove(
          "hidden"
        )
      } else {
        element.parentElement.parentElement.parentElement.parentElement.classList.add(
          "hidden"
        )
      }
    }

    if (values.length === 0) {
      for (let i = 0; i < elementsCategories.length; i++) {
        const element = elementsCategories[i]
        element.parentElement.parentElement.parentElement.parentElement.classList.remove(
          "hidden"
        )
      }
    }
    console.log("values", values)

    const cards = document.querySelectorAll(".col:not(.hidden)").length

    if (cards === 0) {
      document.getElementById("errorP").classList.remove("hidden")
    } else {
      document.getElementById("errorP").classList.add("hidden")
    }
  })
}

searchFilterEvents()
