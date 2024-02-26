import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  users: defineTable({
    role: v.string(),
    authId: v.string(),
    isVerified: v.optional(v.boolean()),
    userInformation: v.object({
      fName: v.string(),
      lName: v.string(),
      email: v.string(),
      phone: v.optional(v.string()),
      profileImageUrl: v.optional(v.string()),
    }),
    userLocation: v.object({
      zip: v.optional(v.string()),
      city: v.optional(v.string()),
      country: v.optional(v.string()),
      address: v.optional(v.string()),
    }),
  }),
  buyers: defineTable({
    buyerId: v.union(v.id("users"), v.null()),
    listingPreferences: v.optional(v.id("listings")),
    favoriteListingIds: v.optional(v.array(v.id("listings"))),
  }).index("buyerId", ["buyerId"]),
  sellers: defineTable({
    sellerId: v.union(v.id("users"), v.null()),
    businessInformation: v.optional(
      v.object({
        affiliation: v.optional(v.string()),
        businessName: v.optional(v.string()),
        businessLogo: v.optional(v.string()),
        businessEmail: v.optional(v.string()),
        businessPhone: v.optional(v.string()),
        businessLicense: v.optional(v.string()),
        businessAddress: v.optional(v.string()),
        businessContact: v.optional(v.string()),
        yearsInBusiness: v.optional(v.string()),
        businessWebsite: v.optional(v.string()),
        businessDescription: v.optional(v.string()),
        socialMediaLinks: v.optional(
          v.object({
            x: v.optional(v.string()),
            facebook: v.optional(v.string()),
            linkedin: v.optional(v.string()),
            instagram: v.optional(v.string()),
          })
        ),
      })
    ),
  }).index("sellerId", ["sellerId"]),
  listings: defineTable({
    listingId: v.union(v.id("sellers"), v.null()),
    buyerId: v.union(v.id("buyers"), v.null()),
    peopleCount: v.optional(v.number()),
    bedroomCount: v.optional(v.number()),
    bathroomCount: v.optional(v.number()),
    propertyPrice: v.optional(v.string()),
    propertyIntent: v.optional(v.string()),
    media: v.optional(v.array(v.string())),
    propertyLocation: v.optional(
      v.object({
        zip: v.optional(v.string()),
        city: v.optional(v.string()),
        country: v.optional(v.string()),
        address: v.optional(v.string()),
      })
    ),
    propertyDescription: v.optional(
      v.object({
        title: v.optional(v.string()),
        history: v.optional(v.string()),
        description: v.optional(v.string()),
        highlights: v.optional(v.string()),
        yearBuilt: v.optional(v.number()),
      })
    ),
    parking: v.optional(
      v.object({
        garageParking: v.optional(v.boolean()),
        onSiteParking: v.optional(v.boolean()),
        streetParking: v.optional(v.boolean()),
      })
    ),
    utilities: v.optional(
      v.object({
        gas: v.optional(v.boolean()),
        water: v.optional(v.boolean()),
        dryer: v.optional(v.boolean()),
        cable: v.optional(v.boolean()),
        washer: v.optional(v.boolean()),
        internet: v.optional(v.boolean()),
        electric: v.optional(v.boolean()),
        other: v.optional(v.string()),
      })
    ),
    propertyType: v.optional(
      v.object({
        plex: v.optional(v.boolean()),
        land: v.optional(v.boolean()),
        house: v.optional(v.boolean()),
        condo: v.optional(v.boolean()),
        villa: v.optional(v.boolean()),
        indutrial: v.optional(v.boolean()),
        apartment: v.optional(v.boolean()),
        townhouse: v.optional(v.boolean()),
        commercial: v.optional(v.boolean()),
        mobileHome: v.optional(v.boolean()),
        multiFamily: v.optional(v.boolean()),
        farmOrRanch: v.optional(v.boolean()),
        commercialLand: v.optional(v.boolean()),
        other: v.optional(v.string()),
      })
    ),
    outdoorFeatures: v.optional(
      v.object({
        pool: v.optional(v.boolean()),
        hotTub: v.optional(v.boolean()),
        yardOrGarden: v.optional(v.boolean()),
        patioOrBalcony: v.optional(v.boolean()),
        outdoorStorage: v.optional(v.boolean()),
        outdoorFirepit: v.optional(v.boolean()),
        other: v.optional(v.string()),
      })
    ),
    interiorFeatures: v.optional(
      v.object({
        hvac: v.optional(v.array(v.string())),
        appliances: v.optional(v.array(v.string())),
        flooringType: v.optional(v.array(v.string())),
        walkInClosets: v.optional(v.array(v.string())),
        other: v.optional(v.string()),
      })
    ),
    securityFeatures: v.optional(
      v.object({
        
        fireAlarm: v.optional(v.boolean()),
        smokeAlarm: v.optional(v.boolean()),
        gatedCommunity: v.optional(v.boolean()),
        securitySystem: v.optional(v.boolean()),
        fireExtinguisher: v.optional(v.boolean()),
        carbonMonoxideAlarm: v.optional(v.boolean()),
        surveillanceCameras: v.optional(v.boolean()),
        other: v.optional(v.string()),
      })
    ),
    communityAmenities: v.optional(
      v.object({
        gym: v.optional(v.boolean()),
        spa: v.optional(v.boolean()),
        sauna: v.optional(v.boolean()),
        clubhouse: v.optional(v.boolean()),
        playground: v.optional(v.boolean()),
        petsAllowed: v.optional(v.boolean()),
        smokingAllowed: v.optional(v.boolean()),
        other: v.optional(v.string()),
      })
    ),
    accessibilityFeatures: v.optional(
      v.object({
        elevator: v.optional(v.boolean()),
        wheelchairAccess: v.optional(v.boolean()),
        other: v.optional(v.string()),
      })
    ),
  }).index("listingId", ["listingId"]),
  reviews: defineTable({
    sellerId: v.union(v.id("sellers"), v.null()),
    userId: v.union(v.id("users"), v.null()),
    text: v.string(),
    rating: v.number(),
  }).index("sellerId_userId", ["sellerId", "userId"]),
});
