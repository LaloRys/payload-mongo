import { CollectionConfig } from "payload/types";

const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "name",
  },
  
  access: {
    read: () => true,
    create: () => true,
  },

//   auth: true,
  labels: {
   singular: "product",
   plural: "products",
  },
  
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "price",
      type: "number",
    },
    {
      name: "quantity",
      type: "number",
    },
    {
      name: "image",
      type: "upload",
      relationTo: 'media',
    },
   //  {
   //    name: 'backgroundImage', // required
   //    type: 'upload', // required
   //    relationTo: 'media', // required
   //    required: true,
   //  }
  ],
};

export default Products;
