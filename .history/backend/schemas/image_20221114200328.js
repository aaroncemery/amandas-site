export default {
  title: 'Image',
  name: 'image',
  type: 'document',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Image Title',
      name: 'imageTitle',
      type: 'string',
    },
    {
      title: 'Image Alt Text',
      name: 'imageAltText',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}