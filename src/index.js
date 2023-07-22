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
  try {
    const response = await fetch(`https://api.github.com/users/${nameUser}`);
    const data = await response.json();
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

inputSearch.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    searchUser();
  }
});

btnSearch.addEventListener("click", searchUser);
