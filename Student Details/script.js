const students = [
    { id: 1, name: 'Ezhil', age: 18, grade: 'A' },
    { id: 2, name: 'Fayas', age: 20, grade: 'B' },
    { id: 3, name: 'Arshath', age: 20, grade: 'A+' },
    { id: 4, name: 'Rizwan', age:20,grade:'B'},
    { id: 5, name: 'Anas', age:19,grade:'A'},
    { id: 6, name: 'Vicky', age:20,grade:'C'},
    { id: 7, name: 'Virat', age:19,grade:'D'},
    { id: 8, name: 'Dhoni', age:20,grade:'A'},
    { id: 9, name: 'Hardik', age:19,grade:'C'},
    { id: 10, name: 'Suhail', age:19,grade:'C'},

];

// let arr =[6,2,9,6]
// console.log(arr.sort());

const tableBody = document.querySelector('#studentTable tbody');
const searchInput = document.getElementById('searchInput');
let isAsc = true;
let currentColumn = null;

function createTableBody(data) {
    tableBody.innerHTML = '';
    data.forEach(student => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${student.id}</td><td>${student.name}</td><td>${student.age}</td><td>${student.grade}</td>`;
    });
}

function sortTable(columnIndex) {
    const sortedData = [...students];
    if (currentColumn === columnIndex) {
        sortedData.reverse();
        isAsc = !isAsc;
    } else {
        sortedData.sort((a, b) => a[Object.keys(a)[columnIndex]] > b[Object.keys(b)[columnIndex]] ? 1 : -1);
        isAsc = true;
        currentColumn = columnIndex;
    }
    if (!isAsc) {
        sortedData.reverse();
    }
    createTableBody(sortedData);
}

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredData = students.filter(student => student.name.toLowerCase().includes(searchText));
    createTableBody(filteredData);
});

createTableBody(students);