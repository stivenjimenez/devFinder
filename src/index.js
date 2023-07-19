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

getUserAPI("stivenjimenez");
