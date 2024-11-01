export function generateAgencyId() {
    const prefix = "AG-";
    const uniqueNumber = Date.now() + Math.floor(Math.random() * 1000); // ensures uniqueness
    return `${prefix}${uniqueNumber}`;
}
console.log(generateAgencyId());
