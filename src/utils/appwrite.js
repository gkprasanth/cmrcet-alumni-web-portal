import { Client, Account, Databases, ID } from "appwrite";

// Initialize the Appwrite client
export const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6738dcd90009e30dfbac");

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
 export { ID };

// Fetch documents from a collection
export const fetchDocuments = async (databaseId, collectionId) => {
    try {
        const response = await databases.listDocuments(databaseId, collectionId);
        return response.documents;
    } catch (error) {
        console.error("Error fetching documents:", error);
        throw error; // Re-throw error for the caller to handle
    }
};
