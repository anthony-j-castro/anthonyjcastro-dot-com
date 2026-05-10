const eslint = {
  "array-callback-return": [
    "error",
    {
      allowImplicit: true,
    },
  ],
  "arrow-body-style": ["error", "as-needed"],
  curly: ["error", "all"],
  "func-style": ["error", "expression"],
  "no-console": "error",
  "no-lonely-if": "error",
  "no-restricted-imports": [
    "warn",
    {
      patterns: [
        {
          group: ["../*"],
          message: "Prefer aliased imports over relative parent imports.",
        },
      ],
    },
  ],
  "object-shorthand": "error",
  radix: ["error", "always"],
};

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

const stylistic = {
  "@stylistic/jsx-self-closing-comp": [
    "error",
    {
      component: true,
      html: true,
    },
  ],
  "@stylistic/padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      next: "*",
      prev: ["case", "default"],
    },
    {
      blankLine: "always",
      next: "break",
      prev: "*",
    },
    {
      blankLine: "always",
      next: "return",
      prev: "*",
    },
  ],
  "@stylistic/quotes": [
    "error",
    "double",
    {
      allowTemplateLiterals: "never",
      avoidEscape: true,
    },
  ],
};

export default {
  ...eslint,
  ...importX,
  ...perfectionist,
  ...stylistic,
};
