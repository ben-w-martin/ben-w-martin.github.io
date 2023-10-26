function getRandomInt(min, max) {
    if (typeof min === "boolean" || typeof max === "boolean" ||
        min === null || max === null){
        return NaN;
    }
    return Math.floor((Math.random() * (max - min + 1)) + min);
}


// Testing for various data types
console.log("Testing with integers:");
console.log(getRandomInt(1, 10)); // Test with integers

console.log("\nTesting with floats:");
console.log(getRandomInt(1.5, 9.5)); // Test with floats

console.log("\nTesting with negative values:");
console.log(getRandomInt(-10, -1)); // Test with negative integers

console.log("\nTesting with mixed types:");
console.log(getRandomInt(1, 10.5)); // Test with mixed types

console.log("\nTesting with string values (converted to numbers):");
console.log(getRandomInt("5", "15")); // Test with string representations of numbers

console.log("\nTesting with non-numeric values (should result in NaN):");
console.log(getRandomInt("hello", "world")); // Test with non-numeric values

console.log("\nTesting with null (should result in NaN):");
console.log(getRandomInt(null, null)); // Test with null values

console.log("\nTesting with boolean values (should result in NaN):");
console.log(getRandomInt(true, false)); // Test with boolean values
