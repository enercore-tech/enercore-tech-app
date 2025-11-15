import { env } from "~/env";

export function getNotionDatabaseId(): string {
  if (env.NODE_ENV === "test") {
    if (!env.NOTION_TEST_DATABASE_ID) {
      throw new Error(
        "NOTION_TEST_DATABASE_ID is not set in environment variables",
      );
    }
    return env.NOTION_TEST_DATABASE_ID;
  }

  return env.NOTION_DATABASE_ID;
}
