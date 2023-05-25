console.log('Hello World');

function salarySubmit(event) {
    event.preventDefault();
    console.log(event);
};

function deleteEntry(event) {
    event.target.parentElement.parentElement.remove();
}
