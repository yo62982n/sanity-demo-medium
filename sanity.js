import {
    createCurrentUserHook,
    createClient
} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2022-04-08",
    useCdn: process.env.NODE_ENV === "production"
};

export const sanityClient = createClient(config)

// Set up a helper function for generating Image URLs with only the asset
// reference data in your documents.
// Read more : https://www.sanity.io/docs/image-url

export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source);

// Helper function for using the current logged in user account

export const userCurrentUser = createCurrentUserHook(config);