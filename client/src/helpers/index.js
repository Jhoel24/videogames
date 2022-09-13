export const cleanParagraph = text => {
    return text.replace(/(<([^>]+)>)/gi, "")
}