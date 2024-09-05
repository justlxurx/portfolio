interface Property {
  id?: number;
  name: string;
  location: string;
  token_price: number;
  rental?: string;
  capital?: string;
  created_at?: string;
  main_image_url: string;
}

export const sortProperties = (
  properties: Property[],
  sortCriteria: string
) => {
  if (!properties) return []; // Возвращаем пустой массив, если properties = null или undefined

  return properties.slice().sort((a, b) => {
    let comparison = 0;

    switch (sortCriteria) {
      case "name":
        comparison = a.name.localeCompare(b.name);
        break;
      case "location":
        comparison = a.location.localeCompare(b.location);
        break;
      case "price":
        comparison = a.token_price - b.token_price;
        break;
      default:
        break;
    }

    return comparison;
  });
};
