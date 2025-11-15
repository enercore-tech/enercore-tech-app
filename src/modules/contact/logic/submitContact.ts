import type { ContactInput } from "./contactSchema";
import { notion } from "~/utils/notion";
import { getNotionDatabaseId } from "~/utils/dbId";

export async function submitContact(data: ContactInput) {
  const databaseId = getNotionDatabaseId();

  // Check if a contact with the same contact info already exists
  const existing = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Contact",
      rich_text: {
        equals: data.contact,
      },
    },
  });

  // If exists, return conflict status code
  if (existing.results.length > 0) {
    const error = new Error(
      "A contact with this information already exists.",
    ) as Error & { statusCode?: number };
    error.statusCode = 409;
    throw error;
  }

  // Create new contact in Notion
  const response = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: data.name,
            },
          },
        ],
      },
      Contact: {
        rich_text: [
          {
            text: {
              content: data.contact,
            },
          },
        ],
      },
      "Interested Products": {
        rich_text: [
          {
            text: {
              content: data.interestedProducts,
            },
          },
        ],
      },
    },
  });

  return response;
}
