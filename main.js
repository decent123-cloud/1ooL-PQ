const questions = [
    {
        question: "What is the capital of Nigeria?",
        answer: "Abuja"
    },
    {
        question: "Explain the process of photosynthesis.",
        answer: "Photosynthesis is the process by which green plants make their food using sunlight, water, and carbon dioxide."
    }
    // Add more questions here
];

const questionsSection = document.getElementById('questions');

questions.forEach(q => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `<strong>Q:</strong> ${q.question}<br><strong>A:</strong> ${q.answer}`;
    questionsSection.appendChild(div);
});