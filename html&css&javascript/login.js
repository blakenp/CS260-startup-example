function login() {
    const usernameElement = document.querySelector("#username");
    const username = usernameElement.value;
    localStorage.setItem("username", username);
    window.location.href = "play.html";
}
