type PropertyReq = {
  name: string;
  value: string;
};

class ManageCharacteristicsApi {
  async create(num: number, args: PropertyReq) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/${num}/characteristic`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `admin`,
        },
        body: JSON.stringify(args),
      }
    );
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Property is not created: ${errorText}`);
    }

    // const resJson = await res.json();
    // console.log(resJson);
    // return resJson;
    const { id } = await res.json();
    return { id };
  }

  async get(num: number) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/${num}/characteristic`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `admin`,
        },
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Getting property is failed: ${errorText}`);
    }

    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }

  async update(id: number, args: PropertyReq) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/characteristic/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `admin`,
        },
        body: JSON.stringify(args),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Property is not updated: ${errorText}`);
    }

    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }

  async delete(id: number) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/characteristic/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `admin`,
        },
      }
    );

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

export const characacteristicsApi = new ManageCharacteristicsApi();
