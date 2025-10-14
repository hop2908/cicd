const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const html = `
  <!DOCTYPE html>
  <html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CI/CD Demo</title>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        animation: fadeIn 1s ease;
      }
      h1 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        letter-spacing: 1px;
      }
      p {
        font-size: 1.2rem;
        opacity: 0.9;
        margin-bottom: 2rem;
      }
      .btn {
        display: inline-block;
        background: white;
        color: #764ba2;
        padding: 12px 25px;
        border-radius: 30px;
        font-weight: 600;
        text-decoration: none;
        transition: all 0.3s ease;
      }
      .btn:hover {
        background: #f4f4f4;
        transform: scale(1.05);
      }
      footer {
        position: absolute;
        bottom: 10px;
        font-size: 0.9rem;
        opacity: 0.7;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
  </head>
  <body>
    <h1>🚀 CI/CD with Docker & GitHub Actions</h1>
    <p>Triển khai tự động – Nhanh, Gọn, Hiệu Quả</p>
    <a href="#" class="btn">Khám phá ngay</a>
    <footer>© 2025 DevOps Demo | Node.js + Docker</footer>
  </body>
  </html>
  `;

  res.end(html);
});

server.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}/`);
});
