import generateUniqueId from "../../src/utils/generateUniqueId";

describe("Generate Unique ID", () => {
    it("should generate an unique id", () => {
        const id = generateUniqueId();
        
        expect(id).toHaveLength(8);
    })
});