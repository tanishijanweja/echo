import { query, mutation } from "./_generated/server";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();

    return users;
  },
});

export const add = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();

    if (identity === null) {
      throw new Error("Not authenticated");
    }

    const orgId = identity.orgId as String;

    if (!orgId) {
      throw new Error("Missing organization");
    }

    throw new Error("Tracking error");

    const userId = await ctx.db.insert("users", {
      names: "Tanishi ",
    });

    return userId;
  },
});
