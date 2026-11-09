// Renders plotly figures exported from Python (fig.to_json()) and keeps them
// in sync with the site theme ([auto]/[light]/[dark] toggle + system setting).
//
// Usage (see _includes/plotly-chart.html):
//   <div class="plotly-chart" data-src="/assets/posts/<post>/<figure>.json"></div>
(function () {
    if (window.__plotlyCharts) return;
    window.__plotlyCharts = true;

    var PLOTLY_URL = "https://cdnjs.cloudflare.com/ajax/libs/plotly.js/4.1.1/plotly.min.js";
    var FONT = '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace';
    var charts = [];
    var plotlyPromise = null;

    // Colors baked into the exported figures, remapped per theme.
    // Light mode keeps the originals except pure-ink text, which follows --text.
    var DARK_SWAPS = {
        "#c3c2b7": "#4a4a50",                   // context gray
        "#f4f8fd": "#16202d",                   // sequential scale: low end
        "#104281": "#7fb2f5",                   // sequential scale: high end
        "rgba(42, 120, 214, 0.15)": "rgba(110, 168, 245, 0.22)" // learning-curve band
    };

    function loadPlotly() {
        if (window.Plotly) return Promise.resolve(window.Plotly);
        if (!plotlyPromise) {
            plotlyPromise = new Promise(function (resolve, reject) {
                var s = document.createElement("script");
                s.src = PLOTLY_URL;
                s.onload = function () { resolve(window.Plotly); };
                s.onerror = reject;
                document.head.appendChild(s);
            });
        }
        return plotlyPromise;
    }

    function token(styles, name) {
        return styles.getPropertyValue(name).trim();
    }

    function theme() {
        var st = getComputedStyle(document.documentElement);
        var bg = token(st, "--bg") || "#F4F4F5";
        var r = parseInt(bg.slice(1, 3), 16), g = parseInt(bg.slice(3, 5), 16), b = parseInt(bg.slice(5, 7), 16);
        return {
            dark: (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.5,
            text: token(st, "--text"),
            dim: token(st, "--text-dim"),
            faint: token(st, "--text-faint"),
            rule: token(st, "--rule"),
            raised: token(st, "--bg-raised")
        };
    }

    function recolor(json, t) {
        var swaps = { "#0b0b0b": t.text, "#52514e": t.dim };
        if (t.dark) for (var k in DARK_SWAPS) swaps[k] = DARK_SWAPS[k];
        for (var from in swaps) json = json.split('"' + from + '"').join('"' + swaps[from] + '"');
        return JSON.parse(json);
    }

    function figureFor(chart) {
        var t = theme();
        var fig = recolor(chart.raw, t);
        var L = fig.layout;
        var narrow = chart.el.clientWidth < 560;

        delete L.width;
        L.autosize = true;
        L.paper_bgcolor = "rgba(0,0,0,0)";
        L.plot_bgcolor = "rgba(0,0,0,0)";
        L.font = { family: FONT, size: narrow ? 10 : 12, color: t.dim };
        L.title = Object.assign({}, L.title, { x: 0.015, xanchor: "left" });
        L.title.font = Object.assign({ size: narrow ? 12 : 14 }, L.title.font, { color: t.text });
        L.hoverlabel = { bgcolor: t.raised, bordercolor: t.rule, font: { family: FONT, size: 12, color: t.text } };
        L.legend = Object.assign({}, L.legend, { bgcolor: "rgba(0,0,0,0)" });
        L.margin = Object.assign({ l: 60, r: 20, t: 70, b: 60 }, L.margin);
        if (narrow) { L.margin.l = Math.min(L.margin.l, 40); L.margin.r = 10; }

        Object.keys(L).forEach(function (key) {
            if (!/^[xy]axis\d*$/.test(key)) return;
            L[key] = Object.assign({ ticks: "outside" }, L[key], {
                gridcolor: t.rule, linecolor: t.faint, tickcolor: t.faint, zeroline: false, automargin: true
            });
        });
        (L.annotations || []).forEach(function (a) {
            a.font = Object.assign({ color: t.dim }, a.font);
        });
        fig.data.forEach(function (tr) {
            if (tr.colorbar) tr.colorbar.outlinewidth = 0;
            // a few thousand points render fine as SVG, and SVG works where WebGL is unavailable
            if (tr.type === "scattergl") tr.type = "scatter";
        });
        return fig;
    }

    function draw(chart) {
        var fig = figureFor(chart);
        chart.el.style.minHeight = "";
        return window.Plotly.react(chart.el, fig.data, fig.layout, {
            responsive: true,
            displaylogo: false,
            displayModeBar: "hover",
            modeBarButtonsToRemove: ["select2d", "lasso2d", "autoScale2d"]
        });
    }

    function init(el) {
        var chart = { el: el, raw: null };
        charts.push(chart);
        Promise.all([fetch(el.dataset.src).then(function (r) { return r.text(); }), loadPlotly()])
            .then(function (res) { chart.raw = res[0]; return draw(chart); })
            .catch(function () {
                el.classList.add("plotly-chart--error");
                el.textContent = "No se pudo cargar la gráfica.";
            });
    }

    function redrawAll() {
        charts.forEach(function (c) { if (c.raw && window.Plotly) draw(c); });
    }

    function start() {
        var els = document.querySelectorAll(".plotly-chart[data-src]");
        if (!("IntersectionObserver" in window)) { els.forEach(init); return; }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { io.unobserve(e.target); init(e.target); }
            });
        }, { rootMargin: "400px 0px" });
        els.forEach(function (el) { io.observe(el); });
    }

    new MutationObserver(redrawAll).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    if (window.matchMedia) {
        var mq = window.matchMedia("(prefers-color-scheme: dark)");
        if (mq.addEventListener) mq.addEventListener("change", redrawAll);
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
    else start();
})();
