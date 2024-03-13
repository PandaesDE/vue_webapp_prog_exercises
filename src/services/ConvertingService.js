export default new class ConvertingService {
    textToHTML(input) {

        let output= this.#addParagraphTags(input);
        output = this.#addLeftMargin(output);
        output = this.#highlightCodeKeywordsJava(output);

        return output;
    }

    #highlightCodeKeywordsJava(input) {
        const keywords = ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do", "double", "else", "enum", "extends", "final", "finally", "float", "for", "goto", "if", "implements", "import", "instanceof", "int", "interface", "long", "native", "new", "package", "private", "protected", "public", "return", "short", "static", "strictfp", "super", "switch", "synchronized", "this", "throw", "throws", "transient", "try", "void", "volatile", "while"];
        let output = input;
        keywords.forEach((k) => {
            output = output.replaceAll(k, "<span class=\"highlight\">" + k + "</span>")
        });
        console.log
        return output;
    }

    #addParagraphTags(input) {
        let output = "<p>" + input + "</p>";
        output = output.replaceAll("\n<br>","</p><br><p>")
        return output.replaceAll("\n","</p><p>");
    }

    #addLeftMargin(input) {
        const marginPerSpace = .5;
        let inputArr = input.split('<p>');
        let output = "";
        inputArr.forEach((p) => {
            let margin = (this.#countConsecutiveSpaces(p) * marginPerSpace) + "em";
            output += "<p style='margin-left: " + margin + "'>" + p;
        });
        return output;
    }

    #countConsecutiveSpaces(text) {
        let consecutiveSpaces = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] === ' ') {
                consecutiveSpaces++;
            } else break;
        }
        return consecutiveSpaces;
    }
}