class FilteredPropertyAPI {
  async authorize() {
    const res = await fetch("https://estate.hotcode.kz/v1/property/filtered", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Getting property failed");
    }

    const resJson = await res.json();
    return resJson.token;
  }
}

export const filteredPropertyAPI = new FilteredPropertyAPI();
