console.log("DOM fully loaded");

const loginBtn = document.getElementById("login-btn");
if (loginBtn) {
    loginBtn.addEventListener('click', function() {
        let contactNumber = document.getElementById("input-number").value;
        let passWord = document.getElementById('input-pass').value;

        if (contactNumber == "01721316666" && passWord == "1234") {
            alert("Succeed");
            window.location.assign("/home.html");
        } else {
            alert("Failed");
            return;
        }
    });
}