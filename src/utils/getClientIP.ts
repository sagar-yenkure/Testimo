export const getClientIP = (req: Request) => {
    const xForwardedFor = req?.headers?.get("x-forwarded-for");

    if (xForwardedFor) return xForwardedFor.split(",")[0].trim();
    return "unknown";
};
