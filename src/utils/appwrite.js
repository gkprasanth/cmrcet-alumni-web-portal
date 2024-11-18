import { Client, Account, Databases, ID } from "appwrite";

export const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("6738dcd90009e30dfbac")
//   .setKey("standard_ff97c54cc2de24145a30096d7e0c0b6b4a5e0c48419bcbea49548e9099652c8c5cd2c8deb04019d93355e209685e2525081ed24bb64a0f5cc787d617d3714673833926ed0d83204bcf9255e8245d4a5332c217cc61ba903f3b184915ea2a352c675db00912e1aa12929333732e214af907051ffda00c41f76f30380c22efb6c9")
export const account = new Account(client);
export const databases = new Databases(client);
export { ID };



export const fetchDocuments = async (databaseId, collectionId) => {
    try {
        const response = await databases.listDocuments(databaseId, collectionId);
        return response.documents;
    } catch (error) {
        console.error("Error fetching documents:", error);
        throw error; // Re-throw error for the caller to handle
    }
};