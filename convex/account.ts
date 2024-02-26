import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createAccount = mutation({
  args: {
    role: v.string(),
    fName: v.string(),
    lName: v.string(),
    email: v.string(),
    profileImageUrl: v.optional(v.string()),
    zip: v.optional(v.string()),
    city: v.optional(v.string()),
    country: v.optional(v.string()),
    address: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity)
      throw new Error("You must be logged in to create an account");

    const authId = identity.subject;
    const isVerified = identity.emailVerified;

    const accountId = await ctx.db.insert("users", {
      role: args.role,
      authId,
      isVerified: isVerified,
      userInformation: {
        fName: args.fName,
        lName: args.lName,
        email: args.email,
        profileImageUrl: args.profileImageUrl,
      },
      userLocation: {
        zip: args.zip,
        city: args.city,
        country: args.country,
        address: args.address,
      },
    });

    if (args.role === "buyers" || args.role === "renters") {
      await ctx.db.insert("buyers", {
        buyerId: accountId,
      });
    } else if (args.role === "sellers") {
      await ctx.db.insert("sellers", {
        sellerId: accountId,
      });
    }

    return accountId;
  },
});

export const getAccount = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    const account = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("authId"), identity?.subject))
      .first();

    return account;
  },
});
