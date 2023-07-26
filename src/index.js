const btnDarkMode = document.getElementById("btnDarkMode");
const inputSearch = document.getElementById("inputSearch");
const messageError = document.getElementById("messageError");
const btnSearch = document.getElementById("btnSearch");
const profileImage = document.getElementById("profileImage");
const userName = document.getElementById("userName");
const userLogin = document.getElementById("userLogin");
const userCreatedAt = document.getElementById("userCreatedAt");
const userBio = document.getElementById("userBio");
const publicRepos = document.getElementById("publicRepos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const userLocation = document.getElementById("userLocation");
const userBlog = document.getElementById("userBlog");
const userTwitter = document.getElementById("userTwitter");
const userCompany = document.getElementById("userCompany");
const loadingSkeleton = document.getElementById("loadingSkeleton");
const infoProfile = document.getElementById("infoProfile");

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

async function getUserAPI(nameUser) {
  loadingSkeleton.classList.remove("hidden");
  infoProfile.classList.add("hidden");

  try {
    const response = await fetch(`https://api.github.com/users/${nameUser}`);
    const data = await response.json();

    loadingSkeleton.classList.add("hidden");
    infoProfile.classList.remove("hidden");

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

function formatJoinedDate(dateString) {
  const date = new Date(dateString);
  return `Joined ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
}

function updateProfileInfo(dataUser) {
  profileImage.src = dataUser.avatar_url;
  userName.textContent = dataUser.name;
  userLogin.textContent = `@${dataUser.login}`;
  userCreatedAt.textContent = formatJoinedDate(dataUser.created_at);
  userBio.textContent = dataUser.bio || "";
  publicRepos.textContent = dataUser.public_repos;
  followers.textContent = dataUser.followers;
  following.textContent = dataUser.following;
  userLocation.textContent = dataUser.location || "Not Available";
  userBlog.href = dataUser.blog || "#";
  userBlog.textContent = dataUser.blog || "Not Available";
  userTwitter.textContent = `@${dataUser.twitter_username}` || "Not Available";
  userCompany.textContent = dataUser.company || "Not Available";
}

async function searchUser() {
  const dataUser = await getUserAPI(inputSearch.value);

  if (dataUser.message === "Not Found") {
    messageError.classList.remove("hidden");
    return;
  }

  messageError.classList.add("hidden");

  updateProfileInfo(dataUser);
}

const getMoonIcon = () => `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" class="ml-4">
  <path
    fill="#4B6A9B"
    d="M19.513 11.397a.7.7 0 0 0-.588.128 7.496 7.496 0 0 1-2.276 1.335 7.101 7.101 0 0 1-2.583.463 7.505 7.505 0 0 1-5.32-2.209 7.568 7.568 0 0 1-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 0 1 1.227-2.21.657.657 0 0 0-.102-.924c-.18-.128-.384-.18-.589-.128-2.174.59-4.066 1.9-5.421 3.646A10.158 10.158 0 0 0 0 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 0 0 7.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 0 0 3.58-5.624.623.623 0 0 0-.46-.796Z"
  />
</svg>
`;

const getSunIcon = () => `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" class="ml-4">
  <path
    fill="#fff"
    d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 0 0-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.482 3.545 1.482a4.934 4.934 0 0 0 3.545-1.482c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 0 0-1.481-3.545ZM10 3.413a.7.7 0 0 0 .688-.688V.688A.7.7 0 0 0 10 0a.7.7 0 0 0-.688.688v2.037a.7.7 0 0 0 .688.688ZM15.635 5.344l1.455-1.455a.67.67 0 0 0 0-.953.67.67 0 0 0-.952 0l-1.456 1.455a.67.67 0 0 0 0 .953c.239.264.662.264.953 0ZM19.312 9.312h-2.037a.7.7 0 0 0-.688.688.7.7 0 0 0 .688.688h2.037A.7.7 0 0 0 20 10a.7.7 0 0 0-.688-.688ZM15.608 14.656a.67.67 0 0 0-.952 0 .67.67 0 0 0 0 .953l1.455 1.455a.67.67 0 0 0 .953 0 .67.67 0 0 0 0-.953l-1.456-1.455ZM10 16.587a.7.7 0 0 0-.688.688v2.037A.7.7 0 0 0 10 20a.7.7 0 0 0 .688-.688v-2.037a.7.7 0 0 0-.688-.688ZM4.365 14.656 2.91 16.111a.67.67 0 0 0 0 .953.67.67 0 0 0 .952 0l1.455-1.455a.67.67 0 0 0 0-.953c-.238-.264-.66-.264-.952 0ZM3.413 10a.7.7 0 0 0-.688-.688H.688A.7.7 0 0 0 0 10a.7.7 0 0 0 .688.688h2.037A.7.7 0 0 0 3.413 10ZM4.365 5.344a.67.67 0 0 0 .952 0 .67.67 0 0 0 0-.953L3.862 2.936a.67.67 0 0 0-.952 0 .67.67 0 0 0 0 .953l1.455 1.455Z"
  />
</svg>
`;

function toggleDarkMode() {
  const html = document.querySelector("html");
  const isDarkMode = html.classList.toggle("dark");
  btnDarkMode.innerHTML = `${isDarkMode ? "LIGHT" : "DARK"}
  ${isDarkMode ? getSunIcon() : getMoonIcon()}`;
}

inputSearch.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchUser();
  }
});

btnSearch.addEventListener("click", searchUser);

btnDarkMode.addEventListener("click", toggleDarkMode);
