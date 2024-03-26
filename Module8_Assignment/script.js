// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [{
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [{
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [{
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },

    {
        country: 'Atlantis',
        capital: 'Poseidon City',
        largestCity: 'Neptune Harbor',
        subdivisionName: 'sector',
        subdivisions: [{
                name: 'Coral Gardens',
                capital: 'Marina Palace',
                largestCity: 'Triton’s Keep',
                area: 5000,
            },
            {
                name: 'Sunken Depths',
                capital: 'Abyssal Throne',
                largestCity: 'Deep Blue',
                area: 8000,
            },
        ],
    },
    {
        country: 'Eldorado',
        capital: 'Golden Gate',
        largestCity: 'Shimmering Plains',
        subdivisionName: 'region',
        subdivisions: [{
                name: 'Emerald Forest',
                capital: 'Jade Temple',
                largestCity: 'Sapphire Springs',
                area: 2500,
            },
            {
                name: 'Silver Mountains',
                capital: 'Quartz Castle',
                largestCity: 'Crystal Lake',
                area: 3500,
            },
        ],
    }

]

window.onload = function() {
    const mainContent = GEOGRAPHY_LIST.map(country => {
        const subdivisionsHtml = country.subdivisions.map(subdivision =>
            `<li>${subdivision.name} (Capital: ${subdivision.capital}, Largest City: ${subdivision.largestCity}, Area: ${subdivision.area} sq km)</li>`
        ).join('');

        return `
            <section>
                <h2>${country.country}</h2>
                <p>Capital: ${country.capital}, Largest City: ${country.largestCity}</p>
                <h3>${country.subdivisionName[0].toUpperCase() + country.subdivisionName.slice(1)}s:</h3>
                <ul>${subdivisionsHtml}</ul>
            </section>
        `;
    }).join('');

    document.querySelector('main').innerHTML = mainContent;
};

// Your code goes below