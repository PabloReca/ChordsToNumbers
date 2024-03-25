document.addEventListener('DOMContentLoaded', () => {
    const chordMap = {
        "C": {"C": "1", "D": "2", "E": "3", "F": "4", "G": "5", "A": "6", "B": "7"},
        "Db": {"Db": "1", "Eb": "2", "F": "3", "Gb": "4", "Ab": "5", "Bb": "6", "C": "7"},
        "D": {"D": "1", "E": "2", "F#": "3", "G": "4", "A": "5", "B": "6", "C#": "7"},
        "Eb": {"Eb": "1", "F": "2", "G": "3", "Ab": "4", "Bb": "5", "C": "6", "D": "7"},
        "E": {"E": "1", "F#": "2", "G#": "3", "A": "4", "B": "5", "C#": "6", "D#": "7"},
        "F": {"F": "1", "G": "2", "A": "3", "Bb": "4", "C": "5", "D": "6", "E": "7"},
        "Gb": {"Gb": "1", "Ab": "2", "Bb": "3", "Cb": "4", "Db": "5", "Eb": "6", "F": "7"},
        "G": {"G": "1", "A": "2", "B": "3", "C": "4", "D": "5", "E": "6", "F#": "7"},
        "Ab": {"Ab": "1", "Bb": "2", "C": "3", "Db": "4", "Eb": "5", "F": "6", "G": "7"},
        "A": {"A": "1", "B": "2", "C#": "3", "D": "4", "E": "5", "F#": "6", "G#": "7"},
        "Bb": {"Bb": "1", "C": "2", "D": "3", "Eb": "4", "F": "5", "G": "6", "A": "7"},
        "B": {"B": "1", "C#": "2", "D#": "3", "E": "4", "F#": "5", "G#": "6", "A#": "7"}
    };

    const keySelect = document.getElementById('key');
    const chordsTextArea = document.getElementById('chords');
    const numbersTextArea = document.getElementById('numbers');

    const updateNumbers = () => {
        const selectedKey = keySelect.value;
        const chords = chordMap[selectedKey];
        const inputText = chordsTextArea.value;
        const outputText = inputText.replace(/\[(.*?)\]/g, (match, p1) => {
            const parts = p1.split('/');
            parts.forEach((part, index) => {
                const root = part.match(/^[A-G][b#]?/);
                if (root && chords[root[0]]) {
                    parts[index] = part.replace(root[0], chords[root[0]]);
                }
            });
            return `[${parts.join('/')}]`;
        });
        numbersTextArea.value = outputText;
    };

    chordsTextArea.addEventListener('input', updateNumbers);
    keySelect.addEventListener('change', updateNumbers);
});
