export default {
    name: "product",
    type: "document",
    title: "Products",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Product Title",
        description:
          "This is the name of which will be displayed across the platform.",
        validation: (Rule) => [
          Rule.required().error("A title is required"),
          Rule.max(50).warning("Shorter titles are usually better"),
        ],
      },
      {
        name: "description",
        type: "text",
        title: "Description",
        description: "Product description.",
      },
      {
        name: "logo",
        title: "Product Logo",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "releases",
        description: "All product releases.",
        title: "Releases",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                name: "version",
                type: "string",
                title: "Version",
                description: "Release Version, format MAJOR.MINOR.PATCH.HOTFIX",
              },
              {
                name: "description",
                type: "text",
                title: "Description",
              },
              {
                title: "File Uploader",
                description: "Upload software files to object storage",
                name: "fileUploader",
                type: "fileUploader",
              },
            ],
          },
        ],
      },
    ],
  };
  