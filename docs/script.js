const translations = {
  en: {
    languageLabel: "Language", navOverview: "Overview", navCompatibility: "Compatibility", navInstallation: "Installation", navContents: "EFI contents",
    heroEyebrow: "OpenCore EFI · macOS Sequoia",
    heroCopy: "An OpenCore EFI configuration for running macOS Sequoia on a compatible Dell OptiPlex 3050. This page explains what the repository contains, how it works, and how to use it.",
    viewRepo: "View the repository ↗", imageCaption: "Dell OptiPlex 3050 running macOS Sequoia.",
    overviewEyebrow: "Overview", overviewTitle: "What this repository is for.",
    overviewLead: "The repository contains the EFI boot environment used by OpenCore. It does not contain macOS and it is not a macOS installer.",
    overviewBody1: "OpenCore starts before macOS. It provides the ACPI patches, UEFI drivers, kernel extensions and device properties needed for macOS to recognize the OptiPlex hardware correctly.",
    overviewBody2: "The current configuration uses an iMac19,1 SMBIOS and is set up around Intel HD Graphics 630, onboard audio, Realtek Ethernet, USB and Dell hardware sensors.",
    kabyGuide: "Dortania: Kaby Lake desktop configuration ↗",
    flow1: "Firmware starts the machine", flow2: "Loads the EFI configuration", flow3: "Boots with hardware patches",
    compatEyebrow: "Compatibility", compatTitle: "Current configuration.",
    compatIntro: "OptiPlex 3050 machines can have different hardware. The table below describes the configuration represented by this repository.",
    bootloader: "Bootloader", configured: "Configured", target: "Target", replaceIdentifiers: "Replace identifiers", graphics: "Graphics", audio: "Audio", sensors: "Sensors",
    wifiValue: "Depends on the adapter installed in the machine", hardwareDependent: "Hardware dependent",
    installEyebrow: "Installation", installTitle: "How to use the EFI.",
    installIntro: "The EFI is intended as a starting point for a compatible OptiPlex 3050. Keep a backup of a known-working EFI before changing your installation.",
    step1Title: "Create the macOS installer", step1Text: "Obtain macOS from Apple and create your installer or recovery media separately.", step1MainLink: "OpenCore installer guide ↗",
    step2Title: "Prepare and mount the EFI partition", step2Text: "Mount the EFI partition of the installer USB or the target disk before copying the OpenCore files.", step2Link: "Dortania: EFI folder setup ↗", mountEfiLink: "Dortania: mounting and moving the EFI ↗",
    step3Title: "Copy this repository's EFI", step3Text: "Place the EFI folder from this repository at the root of the EFI partition. The final path must contain EFI/BOOT and EFI/OC.", step3Link: "Dortania: check the EFI structure ↗",
    step4Title: "Generate your own SMBIOS identifiers", step4Text: "Keep the iMac19,1 model, but generate unique SystemSerialNumber, MLB, SystemUUID and ROM values before using Apple services.", step4Link: "Dortania: PlatformInfo and SMBIOS ↗",
    step5Title: "Check the BIOS configuration", step5Text: "Use settings appropriate for OpenCore/macOS, including UEFI boot and AHCI for SATA. Some options may not exist in the Dell BIOS.", step5Link: "Dortania: Intel BIOS settings ↗",
    step6Title: "Boot OpenCore and install macOS", step6Text: "Select the OpenCore UEFI entry from the Dell boot menu, then choose the macOS installer and follow the installation process.", step6Link: "Dortania: installation process ↗",
    step7Title: "Move OpenCore to the internal drive", step7Text: "Once macOS boots correctly from USB, copy the working EFI to the EFI partition of the internal macOS drive so the machine can boot without the installer USB.", step7Link: "Dortania: boot without USB ↗",
    cloneRepo: "Clone the repository", copy: "Copy", copied: "Copied", copyFailed: "Select and copy",
    contentsEyebrow: "EFI contents", contentsTitle: "What is included.",
    lilu: "Base patching framework used by several other Hackintosh extensions.", weg: "Intel graphics initialization and framebuffer/display patching.", alc: "Audio support through Apple's native audio framework.", vsmc: "Provides the System Management Controller layer expected by macOS.", rtl: "Support for the onboard Realtek Ethernet controller.", sensorPlugins: "Sensor plugins", sensorPluginsText: "CPU, Super I/O and Dell-specific hardware monitoring.",
    important: "Important", smbiosTitle: "Use your own SMBIOS data.", smbiosText: "The public config.plist contains PlatformInfo values. Do not use public identifiers as permanent identifiers for your own machine. Generate unique values before signing in to iCloud, iMessage, FaceTime or other Apple services.", platformGuide: "Read the OpenCore PlatformInfo guide ↗",
    docsTitle: "Repository and documentation", docsText: "The GitHub repository contains the EFI itself, while the README provides the main technical information directly on GitHub.", openGithub: "Open GitHub repository ↗", readReadme: "Read the README ↗", openCoreGuide: "OpenCore Install Guide ↗",
    footer: "Community project. Not affiliated with Apple Inc. or Dell Technologies."
  },
  fr: {
    languageLabel: "Langue", navOverview: "Présentation", navCompatibility: "Compatibilité", navInstallation: "Installation", navContents: "Contenu EFI",
    heroEyebrow: "EFI OpenCore · macOS Sequoia",
    heroCopy: "Une configuration EFI OpenCore permettant d’exécuter macOS Sequoia sur un Dell OptiPlex 3050 compatible. Cette page explique ce que contient le dépôt, son fonctionnement et la manière de l’utiliser.",
    viewRepo: "Voir le dépôt ↗", imageCaption: "Dell OptiPlex 3050 sous macOS Sequoia.",
    overviewEyebrow: "Présentation", overviewTitle: "À quoi sert ce dépôt.",
    overviewLead: "Le dépôt contient l’environnement de démarrage EFI utilisé par OpenCore. Il ne contient pas macOS et ce n’est pas un installateur de macOS.",
    overviewBody1: "OpenCore démarre avant macOS. Il fournit les correctifs ACPI, pilotes UEFI, extensions noyau et propriétés matérielles nécessaires pour que macOS reconnaisse correctement le matériel de l’OptiPlex.",
    overviewBody2: "La configuration actuelle utilise un SMBIOS iMac19,1 et est réglée pour l’Intel HD Graphics 630, l’audio intégré, l’Ethernet Realtek, l’USB et les capteurs Dell.",
    kabyGuide: "Dortania : configuration Kaby Lake desktop ↗",
    flow1: "Le firmware démarre la machine", flow2: "Charge la configuration EFI", flow3: "Démarre avec les correctifs matériels",
    compatEyebrow: "Compatibilité", compatTitle: "Configuration actuelle.",
    compatIntro: "Les OptiPlex 3050 peuvent embarquer des composants différents. Le tableau ci-dessous décrit la configuration représentée par ce dépôt.",
    bootloader: "Chargeur de démarrage", configured: "Configuré", target: "Cible", replaceIdentifiers: "Identifiants à remplacer", graphics: "Graphismes", audio: "Audio", sensors: "Capteurs",
    wifiValue: "Dépend de l’adaptateur installé dans la machine", hardwareDependent: "Selon le matériel",
    installEyebrow: "Installation", installTitle: "Comment utiliser l’EFI.",
    installIntro: "Cette EFI sert de point de départ pour un OptiPlex 3050 compatible. Conservez toujours une sauvegarde d’une EFI fonctionnelle avant toute modification.",
    step1Title: "Créer l’installateur macOS", step1Text: "Téléchargez macOS depuis Apple puis créez séparément votre support d’installation ou de récupération.", step1MainLink: "Guide OpenCore pour créer l’installateur ↗",
    step2Title: "Préparer et monter la partition EFI", step2Text: "Montez la partition EFI de la clé d’installation ou du disque cible avant d’y copier les fichiers OpenCore.", step2Link: "Dortania : préparer le dossier EFI ↗", mountEfiLink: "Dortania : monter et déplacer l’EFI ↗",
    step3Title: "Copier l’EFI de ce dépôt", step3Text: "Placez le dossier EFI de ce dépôt à la racine de la partition EFI. L’arborescence finale doit contenir EFI/BOOT et EFI/OC.", step3Link: "Dortania : vérifier la structure EFI ↗",
    step4Title: "Générer vos propres identifiants SMBIOS", step4Text: "Conservez le modèle iMac19,1, mais générez des valeurs SystemSerialNumber, MLB, SystemUUID et ROM uniques avant d’utiliser les services Apple.", step4Link: "Dortania : PlatformInfo et SMBIOS ↗",
    step5Title: "Vérifier la configuration du BIOS", step5Text: "Utilisez des réglages adaptés à OpenCore/macOS, notamment le démarrage UEFI et AHCI pour le SATA. Certaines options peuvent être absentes du BIOS Dell.", step5Link: "Dortania : réglages BIOS Intel ↗",
    step6Title: "Démarrer OpenCore et installer macOS", step6Text: "Sélectionnez l’entrée UEFI OpenCore dans le menu de démarrage Dell, puis choisissez l’installateur macOS et suivez l’installation.", step6Link: "Dortania : processus d’installation ↗",
    step7Title: "Déplacer OpenCore sur le disque interne", step7Text: "Une fois macOS correctement démarré depuis la clé USB, copiez l’EFI fonctionnelle sur la partition EFI du disque macOS interne pour démarrer sans la clé.", step7Link: "Dortania : démarrer sans clé USB ↗",
    cloneRepo: "Cloner le dépôt", copy: "Copier", copied: "Copié", copyFailed: "Sélectionner et copier",
    contentsEyebrow: "Contenu EFI", contentsTitle: "Ce qui est inclus.",
    lilu: "Framework de correctifs utilisé par plusieurs extensions Hackintosh.", weg: "Initialisation des graphismes Intel et correctifs framebuffer/affichage.", alc: "Prise en charge de l’audio via le framework audio natif d’Apple.", vsmc: "Fournit la couche System Management Controller attendue par macOS.", rtl: "Prise en charge du contrôleur Ethernet Realtek intégré.", sensorPlugins: "Extensions capteurs", sensorPluginsText: "Surveillance du CPU, du Super I/O et des capteurs spécifiques Dell.",
    important: "Important", smbiosTitle: "Utilisez vos propres données SMBIOS.", smbiosText: "Le config.plist public contient des valeurs PlatformInfo. N’utilisez pas des identifiants publics comme identifiants permanents de votre machine. Générez des valeurs uniques avant de vous connecter à iCloud, iMessage, FaceTime ou aux autres services Apple.", platformGuide: "Lire le guide OpenCore PlatformInfo ↗",
    docsTitle: "Dépôt et documentation", docsText: "Le dépôt GitHub contient l’EFI elle-même, tandis que le README regroupe les principales informations techniques directement sur GitHub.", openGithub: "Ouvrir le dépôt GitHub ↗", readReadme: "Lire le README ↗", openCoreGuide: "Guide d’installation OpenCore ↗",
    footer: "Projet communautaire. Non affilié à Apple Inc. ni à Dell Technologies."
  },
  es: {
    languageLabel: "Idioma", navOverview: "Descripción", navCompatibility: "Compatibilidad", navInstallation: "Instalación", navContents: "Contenido EFI",
    heroEyebrow: "EFI OpenCore · macOS Sequoia",
    heroCopy: "Una configuración EFI de OpenCore para ejecutar macOS Sequoia en un Dell OptiPlex 3050 compatible. Esta página explica qué contiene el repositorio, cómo funciona y cómo utilizarlo.",
    viewRepo: "Ver el repositorio ↗", imageCaption: "Dell OptiPlex 3050 ejecutando macOS Sequoia.",
    overviewEyebrow: "Descripción", overviewTitle: "Para qué sirve este repositorio.",
    overviewLead: "El repositorio contiene el entorno de arranque EFI utilizado por OpenCore. No contiene macOS y no es un instalador de macOS.",
    overviewBody1: "OpenCore se inicia antes que macOS. Proporciona los parches ACPI, controladores UEFI, extensiones de kernel y propiedades de dispositivo necesarias para que macOS reconozca correctamente el hardware del OptiPlex.",
    overviewBody2: "La configuración actual utiliza un SMBIOS iMac19,1 y está preparada para Intel HD Graphics 630, audio integrado, Ethernet Realtek, USB y sensores Dell.",
    kabyGuide: "Dortania: configuración Kaby Lake de escritorio ↗",
    flow1: "El firmware inicia el equipo", flow2: "Carga la configuración EFI", flow3: "Arranca con los parches de hardware",
    compatEyebrow: "Compatibilidad", compatTitle: "Configuración actual.",
    compatIntro: "Los OptiPlex 3050 pueden incluir hardware diferente. La tabla describe la configuración representada por este repositorio.",
    bootloader: "Gestor de arranque", configured: "Configurado", target: "Objetivo", replaceIdentifiers: "Cambiar identificadores", graphics: "Gráficos", audio: "Audio", sensors: "Sensores",
    wifiValue: "Depende del adaptador instalado en el equipo", hardwareDependent: "Depende del hardware",
    installEyebrow: "Instalación", installTitle: "Cómo utilizar la EFI.",
    installIntro: "La EFI está pensada como punto de partida para un OptiPlex 3050 compatible. Guarda siempre una copia de una EFI que funcione antes de hacer cambios.",
    step1Title: "Crear el instalador de macOS", step1Text: "Obtén macOS desde Apple y crea por separado el medio de instalación o recuperación.", step1MainLink: "Guía OpenCore para crear el instalador ↗",
    step2Title: "Preparar y montar la partición EFI", step2Text: "Monta la partición EFI del USB de instalación o del disco de destino antes de copiar los archivos de OpenCore.", step2Link: "Dortania: preparar la carpeta EFI ↗", mountEfiLink: "Dortania: montar y mover la EFI ↗",
    step3Title: "Copiar la EFI de este repositorio", step3Text: "Coloca la carpeta EFI de este repositorio en la raíz de la partición EFI. La estructura final debe contener EFI/BOOT y EFI/OC.", step3Link: "Dortania: comprobar la estructura EFI ↗",
    step4Title: "Generar tus propios identificadores SMBIOS", step4Text: "Mantén el modelo iMac19,1, pero genera valores únicos para SystemSerialNumber, MLB, SystemUUID y ROM antes de usar los servicios de Apple.", step4Link: "Dortania: PlatformInfo y SMBIOS ↗",
    step5Title: "Comprobar la configuración de la BIOS", step5Text: "Usa ajustes apropiados para OpenCore/macOS, incluido arranque UEFI y AHCI para SATA. Algunas opciones pueden no existir en la BIOS de Dell.", step5Link: "Dortania: ajustes de BIOS Intel ↗",
    step6Title: "Arrancar OpenCore e instalar macOS", step6Text: "Selecciona la entrada UEFI de OpenCore en el menú de arranque de Dell, elige el instalador de macOS y sigue el proceso.", step6Link: "Dortania: proceso de instalación ↗",
    step7Title: "Mover OpenCore al disco interno", step7Text: "Cuando macOS arranque correctamente desde USB, copia la EFI funcional a la partición EFI del disco interno para poder arrancar sin el USB.", step7Link: "Dortania: arrancar sin USB ↗",
    cloneRepo: "Clonar el repositorio", copy: "Copiar", copied: "Copiado", copyFailed: "Seleccionar y copiar",
    contentsEyebrow: "Contenido EFI", contentsTitle: "Qué incluye.",
    lilu: "Framework base de parches utilizado por varias extensiones Hackintosh.", weg: "Inicialización de gráficos Intel y parches de framebuffer/pantalla.", alc: "Compatibilidad de audio mediante el framework de audio nativo de Apple.", vsmc: "Proporciona la capa System Management Controller que espera macOS.", rtl: "Compatibilidad con el controlador Ethernet Realtek integrado.", sensorPlugins: "Plugins de sensores", sensorPluginsText: "Monitorización de CPU, Super I/O y sensores específicos de Dell.",
    important: "Importante", smbiosTitle: "Usa tus propios datos SMBIOS.", smbiosText: "El config.plist público contiene valores PlatformInfo. No utilices identificadores públicos como identificadores permanentes de tu equipo. Genera valores únicos antes de iniciar sesión en iCloud, iMessage, FaceTime u otros servicios de Apple.", platformGuide: "Leer la guía PlatformInfo de OpenCore ↗",
    docsTitle: "Repositorio y documentación", docsText: "El repositorio de GitHub contiene la EFI y el README reúne la información técnica principal directamente en GitHub.", openGithub: "Abrir repositorio de GitHub ↗", readReadme: "Leer el README ↗", openCoreGuide: "Guía de instalación de OpenCore ↗",
    footer: "Proyecto comunitario. No afiliado con Apple Inc. ni Dell Technologies."
  },
  zh: {
    languageLabel: "语言", navOverview: "概览", navCompatibility: "兼容性", navInstallation: "安装", navContents: "EFI 内容",
    heroEyebrow: "OpenCore EFI · macOS Sequoia",
    heroCopy: "用于在兼容的 Dell OptiPlex 3050 上运行 macOS Sequoia 的 OpenCore EFI 配置。本页面说明仓库包含什么、它如何工作以及如何使用。",
    viewRepo: "查看仓库 ↗", imageCaption: "运行 macOS Sequoia 的 Dell OptiPlex 3050。",
    overviewEyebrow: "概览", overviewTitle: "这个仓库的用途。",
    overviewLead: "该仓库包含 OpenCore 使用的 EFI 启动环境。它不包含 macOS，也不是 macOS 安装程序。",
    overviewBody1: "OpenCore 在 macOS 之前启动，并提供 ACPI 补丁、UEFI 驱动、内核扩展和设备属性，使 macOS 能正确识别 OptiPlex 硬件。",
    overviewBody2: "当前配置使用 iMac19,1 SMBIOS，并针对 Intel HD Graphics 630、板载音频、Realtek 以太网、USB 和 Dell 硬件传感器进行配置。",
    kabyGuide: "Dortania：Kaby Lake 台式机配置 ↗",
    flow1: "固件启动电脑", flow2: "加载 EFI 配置", flow3: "应用硬件补丁后启动",
    compatEyebrow: "兼容性", compatTitle: "当前配置。",
    compatIntro: "不同 OptiPlex 3050 可能使用不同硬件。下表说明本仓库所对应的配置。",
    bootloader: "启动器", configured: "已配置", target: "目标", replaceIdentifiers: "需要替换标识符", graphics: "显卡", audio: "音频", sensors: "传感器",
    wifiValue: "取决于机器中安装的适配器", hardwareDependent: "取决于硬件",
    installEyebrow: "安装", installTitle: "如何使用 EFI。",
    installIntro: "此 EFI 适合作为兼容 OptiPlex 3050 的起点。修改前请始终备份一个已确认可用的 EFI。",
    step1Title: "创建 macOS 安装介质", step1Text: "从 Apple 获取 macOS，并单独创建安装或恢复介质。", step1MainLink: "OpenCore 安装介质指南 ↗",
    step2Title: "准备并挂载 EFI 分区", step2Text: "复制 OpenCore 文件之前，先挂载安装 U 盘或目标磁盘的 EFI 分区。", step2Link: "Dortania：准备 EFI 文件夹 ↗", mountEfiLink: "Dortania：挂载和移动 EFI ↗",
    step3Title: "复制本仓库的 EFI", step3Text: "将本仓库的 EFI 文件夹放到 EFI 分区根目录。最终结构必须包含 EFI/BOOT 和 EFI/OC。", step3Link: "Dortania：检查 EFI 结构 ↗",
    step4Title: "生成自己的 SMBIOS 标识符", step4Text: "保留 iMac19,1 机型，但在使用 Apple 服务前生成唯一的 SystemSerialNumber、MLB、SystemUUID 和 ROM。", step4Link: "Dortania：PlatformInfo 与 SMBIOS ↗",
    step5Title: "检查 BIOS 配置", step5Text: "使用适合 OpenCore/macOS 的设置，包括 UEFI 启动和 SATA AHCI。Dell BIOS 中可能没有部分选项。", step5Link: "Dortania：Intel BIOS 设置 ↗",
    step6Title: "启动 OpenCore 并安装 macOS", step6Text: "在 Dell 启动菜单中选择 OpenCore UEFI 项，然后选择 macOS 安装程序并按流程安装。", step6Link: "Dortania：安装流程 ↗",
    step7Title: "将 OpenCore 移到内部磁盘", step7Text: "macOS 能从 USB 正常启动后，将可用的 EFI 复制到内部 macOS 磁盘的 EFI 分区，这样即可脱离安装 U 盘启动。", step7Link: "Dortania：无需 USB 启动 ↗",
    cloneRepo: "克隆仓库", copy: "复制", copied: "已复制", copyFailed: "请选择并复制",
    contentsEyebrow: "EFI 内容", contentsTitle: "包含的组件。",
    lilu: "多个 Hackintosh 扩展使用的基础补丁框架。", weg: "Intel 图形初始化以及 framebuffer/显示补丁。", alc: "通过 Apple 原生音频框架提供音频支持。", vsmc: "提供 macOS 所需的 System Management Controller 层。", rtl: "支持板载 Realtek 以太网控制器。", sensorPlugins: "传感器插件", sensorPluginsText: "监控 CPU、Super I/O 和 Dell 专用硬件传感器。",
    important: "重要", smbiosTitle: "请使用自己的 SMBIOS 数据。", smbiosText: "公开的 config.plist 包含 PlatformInfo 值。不要把公开标识符长期用于自己的电脑。在登录 iCloud、iMessage、FaceTime 或其他 Apple 服务之前，请生成唯一值。", platformGuide: "阅读 OpenCore PlatformInfo 指南 ↗",
    docsTitle: "仓库与文档", docsText: "GitHub 仓库包含 EFI 本身，README 则直接在 GitHub 上提供主要技术说明。", openGithub: "打开 GitHub 仓库 ↗", readReadme: "阅读 README ↗", openCoreGuide: "OpenCore 安装指南 ↗",
    footer: "社区项目。与 Apple Inc. 或 Dell Technologies 无隶属关系。"
  }
};

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
const languageSelect = document.querySelector('#language-select');

menuButton?.addEventListener('click', () => {
  const open = nav?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

function browserLanguage() {
  const lang = (navigator.language || 'en').toLowerCase();
  if (lang.startsWith('fr')) return 'fr';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('zh')) return 'zh';
  return 'en';
}

let currentLanguage = 'en';

function setLanguage(lang) {
  const selected = translations[lang] ? lang : 'en';
  const dict = translations[selected];

  document.documentElement.lang = selected === 'zh' ? 'zh-CN' : selected;

  if (selected !== currentLanguage) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (dict[key] !== undefined) element.textContent = dict[key];
    });
    currentLanguage = selected;
  }

  if (languageSelect) languageSelect.value = selected;
  localStorage.setItem('site-language', selected);
}

const initialLanguage = localStorage.getItem('site-language') || browserLanguage();
setLanguage(initialLanguage);

languageSelect?.addEventListener('change', (event) => {
  setLanguage(event.target.value);
});

document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    if (!value) return;

    const lang = document.documentElement.lang.startsWith('fr') ? 'fr'
      : document.documentElement.lang.startsWith('es') ? 'es'
      : document.documentElement.lang.startsWith('zh') ? 'zh'
      : 'en';

    try {
      await navigator.clipboard.writeText(value);
      button.textContent = translations[lang].copied;
    } catch {
      button.textContent = translations[lang].copyFailed;
    }

    window.setTimeout(() => {
      button.textContent = translations[lang].copy;
    }, 1600);
  });
});