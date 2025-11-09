import { describe, it, expect } from "vitest"
import { submitContact } from "./submitContact"

function generateTestEmail() {
  const timestamp = Date.now()
  return `test-${timestamp}@example.com`
}

describe("submitContact()", () => {
  it("saves contact to database", async () => {
    const testData = {
      firstName: "John",
      lastName: "Doe",
      phone: `09${Math.floor(Math.random() * 1_000_000_000)}`,
      email: generateTestEmail(),
    }

    const result = await submitContact(testData)

    expect(result).toMatchObject({
      firstName: testData.firstName,
      lastName: testData.lastName,
      email: testData.email,
      phone: testData.phone,
    })
    expect(result).toHaveProperty("id")
  })
})
