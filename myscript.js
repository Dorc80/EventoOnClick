function logout(element) {
    if (element.value == 'Login') {
        element.value = 'Logout';
    } else {
        element.value = 'Login';
    }
}

function deleteElement(element) {
    element.remove();
}

function alertLike(element) {
    alert('Ninja was likes')
}