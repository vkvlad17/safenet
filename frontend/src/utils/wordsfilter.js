import badWords from './badwords.json'; // Adjust the path accordingly

const filterBadWords = (text) => {
    const badWordsList = badWords.badWords;
    const words = text.split(/\s+/); // Split text into words
    return words.map(word => {
        // Remove trailing punctuation marks
        const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
        if (badWordsList.includes(cleanWord)) {
            if (cleanWord.length <= 2) {
                return word; // No need to mask if the word is too short
            } else {
                // Replace word with masked version
                return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
            }
        } else {
            return word;
        }
    }).join(' '); // Join filtered words back into text
};

export default filterBadWords;
