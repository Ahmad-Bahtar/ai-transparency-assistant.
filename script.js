function analyzeText() {
    let text = document.getElementById("inputText").value;
    let sentences = text.split(".");

    let highlightedText = "";
    let analysisBoxes = "";

    sentences.forEach(sentence => {
        let s = sentence.trim();
        if (s === "") return;

        if (s.includes("high-speed internet")) {
            highlightedText += `<span class="infrastructure">${s}</span>. `;
            analysisBoxes += `
                <div class="bias-box">
                    <div class="bias-title">⚠️ Infrastructure Bias</div>
                    Assumes advanced internet access.<br>
                    👉 Consider rural Moroccan limitations.
                </div>
            `;
        }

        else if (s.includes("private property")) {
            highlightedText += `<span class="legal">${s}</span>. `;
            analysisBoxes += `
                <div class="bias-box">
                    <div class="bias-title">⚠️ Legal Bias</div>
                    Assumes Western property systems.<br>
                    👉 Consider collective land systems in Morocco.
                </div>
            `;
        }

        else if (s.includes("individual decision")) {
            highlightedText += `<span class="social">${s}</span>. `;
            analysisBoxes += `
                <div class="bias-box">
                    <div class="bias-title">⚠️ Social Bias</div>
                    Assumes individual decision-making.<br>
                    👉 Consider family/community decisions in Morocco.
                </div>
            `;
        }

        else {
            highlightedText += s + ". ";
        }
    });

    if (analysisBoxes === "") {
        analysisBoxes = `<div class="bias-box">✅ No obvious bias detected.</div>`;
    }

    document.getElementById("result").innerHTML = `
        <h3>📝 Highlighted Text</h3>
        <p>${highlightedText}</p>
        <hr>
        <h3>📊 Analysis</h3>
        ${analysisBoxes}
    `;
}
