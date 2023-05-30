async function fetchApiData() {
  const url = 'https://raw.githubusercontent.com/luisantoniofreitas/cv/main/data/configurations.json';
  // const url = '../data/configurations.json';
  const response = await fetch(url);
  const apiData = await response.json();
  return apiData;
}