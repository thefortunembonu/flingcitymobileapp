

export const colors = {
    primary: "#ff007f",
    secondary: "#007AFF",
    accent: "#F574C5"
} as const


export const spacing = {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    13: 52,
    14: 56,
    15: 60,
    16: 64,
    17: 68,
    18: 72,
    19: 76,
    20: 80,
    21: 84,
    22: 88,
    23: 92,
    24: 96,
    25: 100,

} as const


export const components = {
    tabBar: {
        height: spacing[18],
        horizontalInset: spacing[5],
        radius: spacing[8],
        iconFrame: spacing[12],
        itemPaddingVertical: spacing[2],
    } as const
}

export const theme = {
 spacing, components} as const;
