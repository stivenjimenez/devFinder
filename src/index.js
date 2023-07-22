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
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

btnSearch.addEventListener("click", async () => {
  const nameUser = document.getElementById("inputSearch").value;
  const dataUser = await getUserAPI(nameUser);

  profileImage.src = dataUser.avatar_url;
  userName.innerHTML = dataUser.name;
  userLogin.innerHTML = `@${dataUser.login}`;

  const date = new Date(dataUser.created_at);
  const dateFormated = `Joined ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;
  userCreatedAt.innerHTML = dateFormated;

  userBio.innerHTML = dataUser.bio;
  publicRepos.innerHTML = dataUser.public_repos;
  followers.innerHTML = dataUser.followers;
  following.innerHTML = dataUser.following;
  userLocation.innerHTML = dataUser.location || " ";
  userBlog.innerHTML = dataUser.blog || " ";
  userTwitter.innerHTML = `@${dataUser.twitter_username}` || " ";
  userCompany.innerHTML = dataUser.company || " ";
});
