const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
	expect(functions.add(2, 2)).toBe(4);
});

//toBe5
test("Adds 2 + 2 to NOT equal 5", () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test("Should be null", () => {
	expect(functions.isNull()).toBeNull();
});

//tobeFalsy
test("Should be falsy", () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

//tobeStrictEqual
test("User should be Brad Traversy Object", () => {
	expect(functions.createUser()).toStrictEqual({
		firstName: "Brad",
		lastName: "Traversy"
	});
});

//Less than and greater than
test("Should be under 1600", () => {
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});

//Regex
test("There is no I in team", () => {
	expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
	usernames = ["john", "karen", "admin"];
	expect(usernames).toContain("admin");
});

//Working with async data
test("User fetched name should be Leanne Graham", () => {
	expect.assertions(1);
	return functions.fetchuser().then(data => {
		expect(data.name).toEqual("Leanne Graham");
	});
});

//Promise
test("User fetched name should be Leanne Graham", async () => {
	expect.assertions(1);
	const data = await functions.fetchuser();
	expect(data.name).toEqual("Leanne Graham");
});
