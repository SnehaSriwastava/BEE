const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array of IDs

document.getElementById('search-btn').addEventListener('click', searchID);

function searchID() {
  const searchInput = document.getElementById('search-input').value;

  if (ids.includes(parseInt(searchInput))) {
    alert(`Result: Successful! ID ${searchInput} is present in the array.`);
  } else {
    alert(`Result: Failed! ID ${searchInput} is not present in the array.`);
  }
}