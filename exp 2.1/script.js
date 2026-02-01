// Simple Live Character Counter
function countChar() {
    const text = document.getElementById("text").value;
    const charCount = text.length;
    
    document.getElementById("count").innerText = charCount;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    countChar();
});
