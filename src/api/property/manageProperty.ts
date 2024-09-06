type PropertyReq = {
  id?: number;
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

class ManagePropertyApi {
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

    // const resJson = await res.json();
    // console.log(resJson);
    // return resJson;
    const { id } = await res.json();
    return { id };
  }

  async update(id: number, args: PropertyReq) {
    const res = await fetch(`https://estate.hotcode.kz/v1/property/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `admin`,
      },
      body: JSON.stringify(args),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Property is not updated: ${errorText}`);
    }

    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }

  async get(id: number) {
    const res = await fetch(`https://estate.hotcode.kz/v1/property/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `admin`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Getting property is failed: ${errorText}`);
    }

    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }

  async delete(id: number) {
    const res = await fetch(`https://estate.hotcode.kz/v1/property/${id}/characteristic`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `admin`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Delete property is failed: ${errorText}`);
    }

    // Если ответ пустой, не пытайтесь парсить его как JSON
    let resJson;
    try {
      resJson = await res.json();
    } catch (error) {
      resJson = null;
    }

    console.log(resJson || "Property deleted successfully");
    return resJson;
  }
}

export const managePropertyApi = new ManagePropertyApi();
