const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    window.deferredPrompt = event;
    
    // Remove the hidden class from the button.
    butInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
    const promtEvent = wndow.deferredPrompt;

    if (!promtEvent) {
        return;
    }

    // Show prompt.
    promtEvent.prompt();

    // Reset the deferred promt variable, it can only be used once.
    window.deferredPrompt = null;

    butInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
    // Clear promt
    window.deferredPrompt = null;

});