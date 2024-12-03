import React, { useEffect } from "react";

const DocsBotComponent = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      window.DocsBotAI = window.DocsBotAI || {};
      DocsBotAI.init = function(e) {
        return new Promise((t, r) => {
          var n = document.createElement("script");
          n.type = "text/javascript";
          n.async = !0;
          n.src = "https://widget.docsbot.ai/chat.js";
          let o = document.getElementsByTagName("script")[0];
          o.parentNode.insertBefore(n, o);
          n.addEventListener("load", () => {
            let n;
            Promise.all([
              new Promise((t, r) => {
                window.DocsBotAI.mount(Object.assign({}, e)).then(t).catch(r);
              }),
              (n = function e(t) {
                return new Promise(e => {
                  if (document.querySelector(t)) return e(document.querySelector(t));
                  let r = new MutationObserver(n => {
                    if (document.querySelector(t)) return e(document.querySelector(t)), r.disconnect();
                  });
                  r.observe(document.body, { childList: !0, subtree: !0 });
                });
              })("#docsbotai-root"),
            ])
            .then(() => t())
            .catch(r);
          });
          n.addEventListener("error", e => { r(e.message) });
        });
      };
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.innerHTML = `
      DocsBotAI.init({
        id: "O8PMwjUFBgUo8miMVgJh/Hd6uxyjkPmDNgtFh9hnF"
      });
    `;
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  
  return (
    <div>
      <div id="docsbotai-root"></div>
    </div>
  );
};

export default function Root({ children }) {
  return (
    <>
      <DocsBotComponent />
      {children}
    </>
  );
}
