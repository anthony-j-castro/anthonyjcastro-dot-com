const importX = {
  "import-x/newline-after-import": "error",
  "import-x/no-relative-packages": "error",
};

const perfectionist = {
  "perfectionist/sort-imports": [
    "error",
    {
      customGroups: [
        {
          elementNamePattern: ["^@fontsource-variable/.*"],
          groupName: "fontsource",
        },
      ],
      groups: [
        "builtin",
        "external",
        "internal",
        "sibling",
        "unknown",
        "index",
        "fontsource",
        "style",
      ],
      newlinesBetween: 0,
    },
  ],
  "perfectionist/sort-interfaces": "error",
  "perfectionist/sort-intersection-types": [
    "error",
    {
      groups: ["unknown", "object"],
    },
  ],
  "perfectionist/sort-jsx-props": [
    "error",
    {
      groups: ["unknown", "shorthand-prop"],
    },
  ],
  "perfectionist/sort-named-imports": [
    "error",
    {
      groups: ["value-import", "type-import"],
    },
  ],
  "perfectionist/sort-object-types": ["error"],
  "perfectionist/sort-objects": [
    "error",
    {
      type: "alphabetical",
      useConfigurationIf: {
        objectType: "destructured",
      },
    },
    {
      type: "unsorted",
    },
  ],
  "perfectionist/sort-union-types": [
    "error",
    {
      groups: ["unknown", "nullish"],
    },
  ],
};

export default {
  ...importX,
  ...perfectionist,
};
