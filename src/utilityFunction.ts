export function formatName(name: string) {


    let formatted = name.split('_');

    formatted = formatted.map((word) => {
        word = word[0].toUpperCase() + word.slice(1);
        return word;
    })

    return formatted.join(' ');
}