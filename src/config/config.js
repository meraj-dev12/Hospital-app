const config = {
    appwriteUrl : String(import.meta.env.VITE_HOSPITAL_APP_URL),
    appwriteProjectId : String(import.meta.env.VITE_HOSPITAL_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_HOSPITAL_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_HOSPITAL_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_HOSPITAL_BUCKET_ID),
}

export default config;