
    // Fonction pour montrer la notif
    function showNotif(canalId) {
      document.getElementById("notif-" + canalId).style.display = "inline-block";
    }

    // Fonction pour cacher la notif (après consultation)
    function hideNotif(canalId) {
      document.getElementById("notif-" + canalId).style.display = "none";
    }

    // Quand on clique sur le canal → la notif disparaît
    document.getElementById("canal1").addEventListener("click", () => hideNotif("canal1"));
    document.getElementById("canal2").addEventListener("click", () => hideNotif("canal2"));

    // Simuler réception de messages
    setTimeout(() => showNotif("canal1"), 3000); // après 3 sec → notif canal 1
    setTimeout(() => showNotif("canal2"), 6000); // après 6 sec → notif canal 2
