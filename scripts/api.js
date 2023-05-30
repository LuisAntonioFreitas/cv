async function fetchApiData() {
  const url = '../data/configurations.json';
  const response = await fetch(url);
  const apiData = await response.json();
  return apiData;
}