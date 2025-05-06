/*
 * @Author: Lieyan
 * @Date: 2025-04-30 09:46:50
 * @LastEditors: Lieyan
 * @LastEditTime: 2025-05-03 14:57:12
 * @FilePath: /FireScreenFetch/app.js
 * @Description: 
 * @Contact: QQ: 2102177341  Website: lieyan.space  Github: @lieyan666
 * @Copyright: Copyright (c) 2025 by lieyanDevTeam, All Rights Reserved. 
 */
const express = require('express');
const screenshot = require('screenshot-desktop');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to capture screenshot
app.get('/screenshot', async (req, res) => {
  try {
    const img = await screenshot({ format: 'png' });
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': img.length
    });
    res.end(img);
  } catch (err) {
    console.error('Error capturing screenshot:', err);
    res.status(500).send('Error capturing screenshot');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
