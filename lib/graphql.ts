
import { PRODUCTS } from '../constants.tsx';
import { Language } from '../types';

/**
 * A sophisticated mock GraphQL executor for the client-side.
 * It simulates a real GraphQL endpoint by parsing basic queries and 
 * returning data from the SiyahKare constant store.
 */
export const executeMockQuery = async (query: string, lang: Language = 'en') => {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 400));

  const cleanQuery = query.replace(/\s+/g, ' ').trim();

  // Basic parser for products query with optional search
  if (cleanQuery.includes('query { products') || cleanQuery.includes('{ products')) {
    const fieldsMatch = cleanQuery.match(/products \{ (.*) \}/) || cleanQuery.match(/products\(.*\) \{ (.*) \}/);
    const fields = fieldsMatch ? fieldsMatch[1].split(' ') : ['id', 'name', 'slug'];

    // Check for search argument like products(search: "micro")
    const searchMatch = cleanQuery.match(/products\(search: "(.*)"\)/);
    const searchTerm = searchMatch ? searchMatch[1].toLowerCase() : null;

    let filtered = PRODUCTS;
    if (searchTerm) {
      filtered = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.slug.toLowerCase().includes(searchTerm)
      );
    }

    const result = filtered.map(p => {
      const obj: any = {};
      if (fields.includes('id')) obj.id = p.id;
      if (fields.includes('name')) obj.name = p.name;
      if (fields.includes('slug')) obj.slug = p.slug;
      if (fields.includes('icon')) obj.icon = p.icon;
      if (fields.includes('description')) obj.description = p.description[lang];
      if (fields.includes('features')) obj.features = p.features[lang];
      return obj;
    });

    return { data: { products: result } };
  }

  // Basic parser for a single product by slug
  const productMatch = cleanQuery.match(/product\(slug: "(.*)"\) \{ (.*) \}/);
  if (productMatch) {
    const slug = productMatch[1];
    const fields = productMatch[2].split(' ');
    const p = PRODUCTS.find(prod => prod.slug === slug);

    if (!p) return { errors: [{ message: `Product with slug "${slug}" not found.` }] };

    const obj: any = {};
    if (fields.includes('id')) obj.id = p.id;
    if (fields.includes('name')) obj.name = p.name;
    if (fields.includes('slug')) obj.slug = p.slug;
    if (fields.includes('description')) obj.description = p.description[lang];
    if (fields.includes('features')) obj.features = p.features[lang];

    return { data: { product: obj } };
  }

  return { errors: [{ message: "Unknown query or syntax error in mock engine." }] };
};
