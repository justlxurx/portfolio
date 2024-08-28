type PropertyReq = {
  balconies: number;
  bathrooms: number;
  bedrooms: number;
  completion_date: string;
  construction_status: string;
  description: string;
  expected_apr: number;
  expected_irr: number;
  garages: number;
  is_on_secondary_market: true;
  kitchens: number;
  land_area: number;
  land_type: string;
  leasehold_years: number;
  living_rooms: number;
  location: string;
  main_image_url: string;
  name: string;
  occupation_status: string;
  property_area: number;
  property_type: string;
  rent_start_date: string;
  terraces: number;
  token_price: number;
  tokens_available: number;
  total_rooms: number;
  total_tokens: number;
};

class CreatePropertyApi {
  async create(args: PropertyReq) {
    const res = await fetch("https://estate.hotcode.kz/v1/property/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    });

    if (!res.ok) {
      throw new Error("Property is not created");
    }

    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }
}

export const createPropertyApi = new CreatePropertyApi();
