type PropertyReq = {
  total_rooms: number;
  balconies: number;
  bathrooms: number;
  bedrooms: number;
  terraces: number;
  garages: number;
  kitchens: number;
  living_rooms: number;

  description: string;
  location: string;
  name: string;

  // land_area: number;
  // land_type: string;

  rent_start_date: string;
  completion_date: string;

  main_image_url: string;

  expected_apr: number;
  expected_irr: number;

  // is_on_secondary_market: true;
  // leasehold_years: number;
  // occupation_status: string;
  // construction_status: string;

  property_area: number;
  property_type: string;

  token_price: number;
  tokens_available: number;
  total_tokens: number;
};

class CreatePropertyApi {
  async create(args: PropertyReq) {
    const formattedArgs = {
      ...args,
      completion_date: args.completion_date
        ? new Date(args.completion_date).toISOString()
        : null,
      rent_start_date: args.rent_start_date
        ? new Date(args.rent_start_date).toISOString()
        : null,
    };
    const res = await fetch("https://estate.hotcode.kz/v1/property/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `admin`,
      },
      body: JSON.stringify(formattedArgs),
    });
    if (!res.ok) {
      const errorText = await res.text(); // Считываем текст ошибки
      throw new Error(`Property is not created: ${errorText}`);
    }

    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }
}

export const createPropertyApi = new CreatePropertyApi();
