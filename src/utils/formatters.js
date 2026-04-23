export const slugify = (str) => {
    if(!str) return ''

    return String(str)
        .normalize('NFKD')
        .replace(/[\u0300-\u036f]/g,'')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 -]+/g,'-')   //remove non-alphanumeric characters
        .replace(/\s+/g,'-')    //replace spaces with hyphens
        .replace(/-+/g, '-')    //remove consecutive hyphens
}
