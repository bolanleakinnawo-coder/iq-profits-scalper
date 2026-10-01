(function () {
  var Q = [
    [
      "What is IQ Profits Scalper?",
      "An AI-powered system that monitors the forex market, analyzes price action, and detects scalping setups so you can trade with clear signals.",
    ],
    [
      "How does it work?",
      "In four steps: market monitoring, AI analysis, setup detection, and trade execution through simple Buy and Sell buttons.",
    ],
    [
      "Does the system scan the market all the time?",
      "Yes. It scans the forex market 24/7 looking for high-probability opportunities.",
    ],
    [
      "What does the AI analyze?",
      "Advanced algorithms look at price action, trend and key market data, then identify scalping setups based on predefined strategies.",
    ],
    [
      "Do I have to place trades myself?",
      "Not necessarily. You receive clear signals and can execute them yourself, or let the system handle the process, depending on your setup.",
    ],
    [
      "Which plans are available?",
      "1 month ($29, save $20), 3 months ($69, save $30, most popular) and 6 months ($119, save $80, best value).",
    ],
    [
      "How do I pay?",
      "Choose a plan and you'll be taken to a secure Flutterwave payment link for that plan.",
    ],
    [
      "Are profits guaranteed?",
      "No. Forex trading involves significant risk, no result is guaranteed, and it may not suit everyone. Never trade more than you can afford to lose.",
    ],
  ];
  document.getElementById("faqs").innerHTML = Q.map(function (q) {
    return (
      "<details><summary>" + q[0] + "</summary><p>" + q[1] + "</p></details>"
    );
  }).join("");

  // demo "scanning" ticker
  var pairs = [
      "EUR/USD",
      "GBP/USD",
      "USD/JPY",
      "AUD/USD",
      "USD/CAD",
      "USD/CHF",
      "XAU/USD",
    ],
    i = 0,
    sc = document.getElementById("scan");
  setInterval(function () {
    i = (i + 1) % pairs.length;
    sc.textContent = pairs[i];
  }, 1600);

  // nav
  var hd = document.getElementById("hd"),
    ln = document.getElementById("links"),
    bg = document.getElementById("burger");
  function s() {
    hd.classList.toggle("solid", scrollY > 24);
  }
  s();
  addEventListener("scroll", s, { passive: true });
  bg.onclick = function () {
    var o = ln.classList.toggle("open");
    bg.setAttribute("aria-expanded", o);
  };
  ln.onclick = function (e) {
    if (e.target.tagName === "A") {
      ln.classList.remove("open");
      bg.setAttribute("aria-expanded", false);
    }
  };

  // reveal
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".rv").forEach(function (el, k) {
    el.style.transitionDelay = (k % 4) * 80 + "ms";
    io.observe(el);
  });
  if (window.lucide) lucide.createIcons();
})();
