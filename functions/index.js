export async function onRequest(context) {
  const now = new Date();
  const timeStr = now.toLocaleString('zh-CN', { hour12: false });

  return new Response(
    `<!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <title>当前时间</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body { font-family: system-ui, sans-serif; background: #f7f7fa; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center;}
        .card { background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,.09); padding: 38px 40px 28px 40px; max-width: 360px; width: 90vw; margin: auto; text-align: center;}
        h1 { margin: 0 0 22px 0; font-size: 2rem; }
        .time { font-size: 1.5rem; color: #165dff; font-weight: bold;}
        .tip { color: #888; font-size: 1rem; margin-top: 12px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>当前服务器时间</h1>
        <div class="time">${timeStr}</div>
        <div class="tip">（每次刷新都会更新）</div>
      </div>
    </body>
    </html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
