import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Draft / Hidden', value: 'draft' },
        ],
      },
      initialValue: 'published',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'type',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in-stock' },
          { title: 'Commission Concept', value: 'concept' },
        ],
      },
      initialValue: 'in-stock',
    }),
    defineField({
      name: 'availabilityStatus',
      title: 'Availability Tag',
      type: 'string',
      initialValue: 'Made to Order',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'string',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
    }),
    defineField({
      name: 'productionTime',
      title: 'Production Time',
      type: 'string',
    }),
    defineField({
      name: 'shipping',
      title: 'Shipping Info',
      type: 'string',
    }),
    defineField({
      name: 'packing',
      title: 'Packing Info',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price Info (Internal)',
      type: 'string',
      initialValue: 'Price on Request',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'sizeOptions',
      title: 'Size Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'finishOptions',
      title: 'Finish Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'images.0',
    },
  },
})
