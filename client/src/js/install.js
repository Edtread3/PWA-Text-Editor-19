const buttonInstall = document.getElementById('buttonInstall');

let defferredPrompt;

//  Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    defferredPrompt = event;
    buttonInstall.style.display = "block";
});

// Implement a click event handler on the `butInstall` element
buttonInstall.addEventListener('click', async () => {
    buttonInstall.style.display = "none";
    defferredPrompt.prompt();
    const { outcome } = await defferredPrompt.userChoice;
    console.log(`The user's response to install prompt: ${outcome}`);
    defferredPrompt = null;

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log("App installed!")
});
