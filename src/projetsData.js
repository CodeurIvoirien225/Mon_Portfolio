// src/projetsData.js
export const mesProjets = [
  {
    id: "monitoring-soc",
    imageSrc: "/monitoring.png",
    titre: "Script de monitoring et d'alertes de sécurité (SOC)",
    description: "Développement d’un script Python de surveillance en temps réel permettant l’analyse des logs Suricata (eve.json) afin de détecter et afficher des alertes de sécurité réseau. Le script transforme des événements bruts en alertes exploitables pour faciliter la détection et la réponse aux incidents dans un environnement SOC.",
    type: "video",
    videoUrl: "/videos/monitoring_python.webm",
    lien: "https://github.com/CodeurIvoirien225/SCRIPT_PYTHON_CYBERSECURITE/blob/main/alert_monitor.py"
  },
  {
    id: "analyseur-soc",
    imageSrc: "/script_detecte_attaque_critique.png",
    titre: "Analyseur SOC Intelligent – Corrélation d’Alertes Suricata",
    description: "Outil SOC développé en Python qui surveille en temps réel les logs eve.json de Suricata et applique une corrélation d’événements basée sur le comportement des adresses IP.Si une même adresse IP déclenche plus de 5 alertes Suricata dans une fenêtre de 10 secondes, l’événement est automatiquement classé comme ALERTE CRITIQUE.",
    type: "video",
    videoUrl: "/videos/script_detecte_attaque_critique.webm",
    lien: "https://github.com/CodeurIvoirien225/SCRIPT_PYTHON_CYBERSECURITE/blob/main/alert_monitor_2.py"
  },
  {
    id: "justisconnecte",
    imageSrc: "/justisconnecte.png",
    titre: "Plateforme de mise en relation Avocat-Client",
    description: "Conception et développement d’une plateforme web facilitant la mise en relation entre clients et avocats. Gestion sécurisée des données sensibles et prévention des injections SQL (PHP, MySQL)",
    type: "site",
    lien: "https://justisconnecte.rf.gd/"
  },

    {
    id: "reseau",
    imageSrc: "/intellecte_protection.png",
    titre: "Conception d’un réseau LAN multi-VLAN avec routage inter-VLAN",
    description: "Conception et simulation d’un réseau local d’entreprise sous Cisco Packet Tracer, basé sur une architecture hiérarchique avec un commutateur cœur de réseau Catalyst 3650 et des commutateurs d’accès Cisco 2960. Le réseau est segmenté en plusieurs VLAN afin d’optimiser les performances et renforcer la sécurité, avec un VLAN dédié aux imprimantes et un routage inter-VLAN assuré par le cœur de réseau. Des services réseau essentiels (DHCP, DNS, FTP, SMTP) ont été intégrés via un serveur centralisé. L’infrastructure a été sécurisée par l’activation de l’accès distant SSH et l’ajout d’un réseau sans fil protégé par WPA2-PSK. Les configurations ont été testées et validées par des tests de connectivité entre tous les équipements.",
    type: "video",
    videoUrl: "/videos/intellecte_protection.webm"
    
  },

    {
    id: "nessus",
    imageSrc: "/nessus.png",
    titre: "Renforcement de la sécurité d’un serveur Windows avec Nessus",
    description: "Dans ce projet, j’ai utilisé Nessus, un outil de scan de vulnérabilités, pour analyser un serveur Windows Server 2022. Le scan initial a révélé plusieurs failles de sécurité critiques dues à des mises à jour manquantes. J’ai ensuite appliqué toutes les mises à jour de sécurité disponibles sur le serveur, puis réalisé un second scan de vérification. Les résultats ont montré que toutes les vulnérabilités critiques avaient été corrigées, démontrant l’efficacité de la mise à jour régulière pour la sécurisation des serveurs.",
    type: "video",
    videoUrl: "/videos/nessus.webm"
  
  },

   {
    id: "splunk",
    imageSrc: "/monitoring.png",
    titre: "Détection en temps réel d’attaques réseau avec Suricata et Splunk",
    description: "Dans ce projet, j’ai configuré Suricata, un moteur IDS/IPS, pour détecter un scan Nmap sur le réseau. J’ai écrit une règle personnalisée qui déclenche automatiquement une alerte lorsqu’un scan est détecté. Pour visualiser et analyser les alertes, j’ai intégré Suricata à Splunk, permettant une supervision centralisée et un suivi en temps réel des événements de sécurité. Lors des tests, chaque scan Nmap généré sur le réseau a été immédiatement détecté, et l’alerte correspondante est apparue dans Splunk.",
    type: "video",
    videoUrl: "/videos/splunk.webm"
    
  },

];