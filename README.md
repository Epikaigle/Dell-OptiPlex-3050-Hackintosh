# Dell OptiPlex 3050 Hackintosh — macOS Sequoia

<p align="center">
  <img src="https://github.com/user-attachments/assets/da3c3545-90bd-4273-8983-378843f7a7f1" alt="Dell OptiPlex 3050 running macOS Sequoia" width="850">
</p>

<p align="center">
  <strong>OpenCore EFI configuration for running macOS Sequoia on a Dell OptiPlex 3050.</strong>
</p>

<p align="center">
  <a href="https://github.com/Epikaigle/Dell-OptiPlex-3050-Hackintosh"><img src="https://img.shields.io/badge/Platform-Dell%20OptiPlex%203050-007DB8?style=flat-square" alt="Dell OptiPlex 3050"></a>
  <img src="https://img.shields.io/badge/macOS-Sequoia-000000?style=flat-square&logo=apple" alt="macOS Sequoia">
  <img src="https://img.shields.io/badge/Bootloader-OpenCore-6E40C9?style=flat-square" alt="OpenCore">
  <img src="https://img.shields.io/badge/SMBIOS-iMac19%2C1-555555?style=flat-square" alt="iMac19,1">
</p>

> [!IMPORTANT]
> This repository contains an EFI configuration, **not macOS itself**. You must obtain macOS from Apple and create your own installer.

## Overview

This repository provides a ready-to-use **OpenCore EFI** tailored for the **Dell OptiPlex 3050** and configured for **macOS Sequoia**.

OpenCore acts as the compatibility layer between the Dell hardware and macOS. The configuration includes the ACPI patches, UEFI drivers, kernel extensions and device properties required to make the OptiPlex behave closely enough to a supported Mac for macOS to boot and use the main hardware components.

The current configuration identifies the machine as an **iMac19,1** and includes support for the Intel integrated graphics, onboard audio, Realtek Ethernet, USB and hardware monitoring.

## Main hardware support

| Component | Configuration / driver | Status |
| --- | --- | :---: |
| Boot | OpenCore UEFI | ✅ |
| Graphics | Intel HD Graphics 630 / WhateverGreen | ✅ |
| Audio | AppleALC, layout `11` | ✅ |
| Ethernet | RealtekRTL8111 | ✅ |
| USB | USBInjectAll | ✅ |
| SMC emulation | VirtualSMC | ✅ |
| CPU / sensors | SMCProcessor + SMCSuperIO + SMCDellSensors | ✅ |
| Android USB tethering | HoRNDIS | ✅ |
| Wi-Fi / Bluetooth | Depends on the installed adapter | ⚠️ |
| Apple services | Requires your own unique SMBIOS values | ⚠️ |

> Hardware can vary between OptiPlex 3050 configurations. This EFI is intended for hardware matching the configuration represented in this repository.

## Graphics configuration

The EFI contains Intel iGPU properties for the **Intel HD Graphics 630**:

- `AAPL,ig-platform-id`: `0x59120000`
- device ID: `0x5912`
- HDMI 2.0 support enabled
- framebuffer connector patches
- WhateverGreen + Lilu

## Audio

Audio support is provided by **AppleALC** with:

```
alcid=11
```

The configuration also injects the Intel 200 Series PCH HD Audio device properties.

## Ethernet

The onboard Realtek network controller is handled by:

```
RealtekRTL8111.kext
```

## Included kernel extensions

| Kext | Role |
| --- | --- |
| **Lilu.kext** | Patching framework used by multiple Hackintosh extensions |
| **VirtualSMC.kext** | Emulates Apple's System Management Controller |
| **WhateverGreen.kext** | Intel graphics and display compatibility |
| **AppleALC.kext** | Native macOS audio support |
| **RealtekRTL8111.kext** | Realtek Ethernet support |
| **USBInjectAll.kext** | USB port injection |
| **SMCProcessor.kext** | CPU sensor reporting |
| **SMCSuperIO.kext** | Super I/O sensor support |
| **SMCDellSensors.kext** | Dell-specific sensor support |
| **HoRNDIS.kext** | Android USB/RNDIS tethering support |

The configuration currently references, among others, Lilu 1.7.0, VirtualSMC 1.3.4, WhateverGreen 1.6.9, AppleALC 1.9.3, RealtekRTL8111 2.5.0 and USBInjectAll 0.8.1.

## ACPI patches

The EFI currently includes:

```text
SSDT-EC.aml
SSDT-HPET.aml
SSDT-PLUG.aml
```

These patches help provide the ACPI devices and CPU power-management behavior expected by macOS.

## UEFI drivers

The OpenCore setup includes the drivers required for macOS booting as well as additional filesystem support, including:

- HfsPlus
- OpenRuntime
- OpenCanopy
- OpenLinuxBoot
- ext4
- Btrfs
- Reset NVRAM entry
- Firmware Settings entry

This also makes the EFI suitable for multi-boot environments where OpenCore needs to discover other operating systems.

## Repository structure

```text
.
├── EFI
│   ├── BOOT
│   │   └── BOOTx64.efi
│   └── OC
│       ├── ACPI
│       ├── Drivers
│       ├── Kexts
│       ├── Tools
│       ├── OpenCore.efi
│       └── config.plist
├── docs
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

## Installation

### 1. Create a macOS installer

Create a genuine macOS installer using Apple's official macOS installer / recovery resources.

### 2. Prepare the EFI partition

Mount the EFI partition of your USB installer or system drive.

### 3. Copy the EFI folder

Copy the repository's `EFI` folder to the root of the EFI partition.

The result should look like:

```text
EFI/
├── BOOT/
└── OC/
```

### 4. Generate your own SMBIOS

**Do not use the SMBIOS identifiers published in this repository.**

Generate your own unique values for the `iMac19,1` SMBIOS before signing in to Apple services. At minimum, replace:

- SystemSerialNumber
- MLB
- SystemUUID
- ROM

A public EFI should be treated as a template; machine identifiers must be unique per installation.

### 5. Configure the BIOS

Use a configuration appropriate for OpenCore/macOS. In general this means using **UEFI boot**, SATA in **AHCI** mode and disabling incompatible firmware features such as Secure Boot unless you have deliberately configured them for your OpenCore setup.

### 6. Boot through OpenCore

Select the OpenCore USB/EFI entry from the Dell boot menu, then start the macOS installer.

## Boot arguments

The current configuration uses:

```text
-v keepsyms=1 debug=0x100 alcid=11
```

Verbose/debug boot arguments are useful while validating a Hackintosh installation. They can be reviewed later once the system is stable.

## Important SMBIOS warning

The repository currently contains PlatformInfo values inside `config.plist`.

Because the repository is public, **you should never rely on those published identifiers for your own installation**. Generate a fresh SMBIOS before using iCloud, iMessage, FaceTime or other Apple services.

## What this repository is — and is not

### It is

- an OpenCore EFI for the Dell OptiPlex 3050
- a collection of ACPI patches, kexts and OpenCore settings
- a starting point for a compatible OptiPlex 3050 configuration
- configured around macOS Sequoia

### It is not

- a copy of macOS
- an Apple installer
- a universal EFI for every OptiPlex 3050 hardware variant
- a replacement for understanding your own hardware and OpenCore configuration

## Download

You can clone the repository:

```bash
git clone https://github.com/Epikaigle/Dell-OptiPlex-3050-Hackintosh.git
```

Or use GitHub's **Code → Download ZIP** option.

## Project website

A dedicated presentation website is included in the `docs/` folder and is designed to be hosted with **GitHub Pages**.

Once Pages is enabled for this repository, the expected project URL is:

**https://epikaigle.github.io/Dell-OptiPlex-3050-Hackintosh/**

## Credits

This EFI relies on projects from the Hackintosh/OpenCore ecosystem, including:

- [OpenCore](https://github.com/acidanthera/OpenCorePkg)
- [Lilu](https://github.com/acidanthera/Lilu)
- [WhateverGreen](https://github.com/acidanthera/WhateverGreen)
- [AppleALC](https://github.com/acidanthera/AppleALC)
- [VirtualSMC](https://github.com/acidanthera/VirtualSMC)
- [RealtekRTL8111](https://github.com/Mieze/RTL8111_driver_for_OS_X)
- [USBInjectAll](https://github.com/Sniki/OS-X-USB-Inject-All)

For OpenCore documentation and configuration guidance, see the [Dortania OpenCore Install Guide](https://dortania.github.io/OpenCore-Install-Guide/).

## Disclaimer

This project is provided as-is for educational and personal use. Hackintosh configurations are highly hardware-specific, so always keep a backup of a known-working EFI before making changes.

Apple, macOS and related marks are trademarks of Apple Inc. This project is not affiliated with or endorsed by Apple or Dell.

---

**Dell OptiPlex 3050 · OpenCore · macOS Sequoia**
