function fetchFromAPI() {
  const URL = "https://randomuser.me/api/";
  fetch(URL)
    .then((response) => response.json())
    .then((data) => renderUserData(data))
    .catch((error) => alert(error));
}

function renderUserData(data) {
  const user = data.results[0];
  const cardElem = document.querySelector(".card");
  cardElem.innerHTML = `
    <div class="card-head">
        <a href="mailto:${user.email}"><i class="fas fa-envelope"></i> Email</a>
        <div class="user-image">
            <img src="${user.picture.large}" alt="">
        </div>
    </div>

    <div class="card-body">
        <div class="user-post-address">
            <div>
                <span>Street Address Code : </span><span>${user.location.street.number}</span>
            </div>
            <div>
                <span>Postcode : </span><span>${user.location.postcode}</span>
            </div>
            <div>
                <span>Street Name : </span><span>${user.location.street.name}</span>
            </div>
        </div>

        <div class="user-name">
            <span class="user-name-title">${user.name.title}.</span>
            <span class="user-name-full">${user.name.first} ${user.name.last},</span>
            <span class="user-age">${user.dob.age} years</span>
        </div>

        <div class="user-location-address">
            <span>${user.location.city}, ${user.location.state}, ${user.location.country}</span>
        </div>
    </div>

    <div class="card-foot">
        <div class="user-contact-info">
            <span>
                <i class="fas fa-phone"></i> ${user.phone}
            </span>
            <span>
                <i class="fa-solid fa-mobile-button"></i> ${user.cell}
            </span>
        </div>
    </div>
    `;
}

document.getElementById("generate-btn").addEventListener("click", () => {
  fetchFromAPI();
});

fetchFromAPI();
