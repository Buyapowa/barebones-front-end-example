export function CopyToClipboard(input){
    /* Select the text field */
    input.select();
    input.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
}