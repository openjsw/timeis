export async function onRequest(context) {
  const now = new Date();
  const isoStr = now.toISOString(); // 用于 JS 恢复精确时间
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
        <div class="time" id="time">${timeStr}</div>
        <div class="tip">（本地计时，初始值为服务器时间）</div>
      </div>
      <script>
        // 从后端传过来的初始时间
        let current = new Date('${isoStr}');
        function pad(n) { return n < 10 ? '0' + n : n; }
        function renderTime(d) {
          return d.getFullYear() + '-' +
            pad(d.getMonth()+1) + '-' +
            pad(d.getDate()) + ' ' +
            pad(d.getHours()) + ':' +
            pad(d.getMinutes()) + ':' +
            pad(d.getSeconds());
        }
        function tick() {
          current.setSeconds(current.getSeconds() + 1);
          document.getElementById('time').innerText = renderTime(current);
        }
        setInterval(tick, 1000);
      </script>
    </body>
    </html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
