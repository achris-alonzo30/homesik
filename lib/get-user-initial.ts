export const getUserInitial = (name: string): string => {
    const char = name.split('');
    
    const initials = char
        .filter(word => word !== '')
        .map(word => word.charAt(0).toUpperCase())
        .join('');

    return initials;
}