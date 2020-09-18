const viewModal = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const data = JSON.parse(e.target.id);

      let elemetModal = `
        <section class='modal-card'>
          <article>
            <small>Continente</small>
            <h1 class='modal-card__title'>${data.region}</h1>
          </article>
          <article>
            <small>Subcontinente</small>
            <h1 class='modal-card__title'>${data.subregion}</h1>
          </article>
        </section>      
      `;

      printModal(elemetModal);
    }
  });
};

const loadingApp = async () => {
  const listElement = document.getElementById("list");
  let countries;
  try {
    countries = await fetch("https://restcountries.eu/rest/v2/lang/es");
    countries = await countries.json();
    countries = countries.slice(5, 11);
  } catch (error) {
    console.log("error", error);
  }

  console.log(countries);

  countries.forEach((country) => {
    let element = `
    <div class='col'>
      <article class='card'>
        <header class='card-header'>
          <div>
            <h1 class='card-title'>${country.name}</h1>
            <strong class='card-subtitle'>(${country.cioc})</strong>      
          </div>
          <img class='card-flag' src='${country.flag}'></img>    
        </header>
        <div class='card-body'>
          <div class='card-detail'>
            <p class='card-detail__title'>CAPITAL</p>
            <strong class='card-detail__subtitle'>
              ${country.capital}
            </strong>
          </div>
          <div class='card-detail'>
            <p class='card-detail__title'>POBLACIÓN</p>
            <strong class='card-detail__subtitle'>
              ${country.population}
            </strong>
          </div>
          <div class='card-detail'>
            <p class='card-detail__title'>MONEDA</p>
            <strong class='card-detail__subtitle'>
              ${country.currencies[0].code}
            </strong>
          </div>

        </div>
        <div class='card-action'>
          <button class='btn btn-radius btn-small btn-green' id='
          ${JSON.stringify({
            region: country.region,
            subregion: country.subregion,
          })}
          '>Ver detalle</button>
        </div>
      </article>
    </div>`;

    listElement.innerHTML += element;
  });
};

loadingApp();
viewModal();
