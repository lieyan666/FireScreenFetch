<!--
 * @Author: Lieyan
 * @Date: 2025-04-30 09:45:11
 * @LastEditors: Lieyan
 * @LastEditTime: 2025-05-03 15:00:01
 * @FilePath: /FireScreenFetch/README.md
 * @Description: 
 * @Contact: QQ: 2102177341  Website: lieyan.space  Github: @lieyan666
 * @Copyright: Copyright (c) 2025 by lieyanDevTeam, All Rights Reserved. 
-->
# FireScreenFetch

A simple Node.js server that captures a screenshot of the host machine and serves it to a web frontend.

## Features

- Capture the entire screen of the host machine.
- Serve the screenshot as a PNG image to clients.
- Simple web interface with a “Capture Screen” button.

## Prerequisites

- Node.js (>= 12.0.0) and npm (or yarn)

### macOS

No additional tools required (uses built-in `screencapture`).

### Ubuntu / Debian-based Linux

Install `scrot`:

```bash
sudo apt-get update
sudo apt-get install -y scrot
```

### Windows

1. Download [nircmd](https://www.nirsoft.net/utils/nircmd.html).  
2. Extract `nircmd.exe` to a folder on your `%PATH%`, for example `C:\Windows`.

## Installation

```bash
git clone https://github.com/lieyan666/FireScreenFetch.git
cd FireScreenFetch
npm install
```

## Usage

Start the server:

```bash
npm start
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000). Click the **Capture Screen** button to capture and display the screenshot.

## License

This project is licensed under the [GPL-3.0](LICENSE) license.
