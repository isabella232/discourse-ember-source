let TEMPLATES = {};
export function setTemplates(templates) {
    TEMPLATES = templates;
}
export function getTemplates() {
    return TEMPLATES;
}
export function getTemplate(name) {
    if (TEMPLATES.hasOwnProperty(name)) {
        return TEMPLATES[name];
    }
}
export function hasTemplate(name) {
    return TEMPLATES.hasOwnProperty(name);
}
export function setTemplate(name, template) {
    return (TEMPLATES[name] = template);
}
