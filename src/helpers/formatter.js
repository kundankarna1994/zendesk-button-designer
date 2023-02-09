const Formatter = {
    upperCase: (string) => {
        return string.toUpperCase();
    },
    capitalize: (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    lowerCase: (string) => {
        return string.toLowerCase();
    },
    trim: (string) => {
        return string.trim();
    },
    trimStart: (string) => {
        return string.trimStart();
    },
    trimEnd: (string) => {
        return string.trimEnd();
    },

    removeCharacters: (string) => {
        return string.replace(/[^a-zA-Z0-9 ]/g, '');
    },
    removeNumbers: (string) => {
        return string.replace(/[0-9]/g, '', '');
    },

    removeHtmlTags: (string) => {
        return string.replace(/<[^>]*>/g, '');
    },

    init: (value, properties) => {
        const $this = Formatter;

        //remove html tags first if properties exits
        //remove special char may effect the value afterwards
        if (properties.includes("removeHtmlTags")) {
            value = $this.removeHtmlTags(value);
            const index = properties.indexOf("removeHtmlTags");
            properties.splice(index, 1);
        }

        properties.forEach((property) => {
            let isFunction = typeof $this[property] === "function";
            if (isFunction) {
                value = $this[property](value);
            } else {
                throw new Error(`${property} function is not defined`);
            }

        });
        return value;
    }
}


export const getOptions = () => {
    let options = Object.keys(Formatter);
    const index = options.indexOf("init");
    options.splice(index, 1);
    return options;
}
export default Formatter;