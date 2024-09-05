class ManageImgApi {
  async uploadImg(num: number, img: FormData) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/${num}/image`,
      {
        method: "POST",
        headers: {
          "x-api-key": `admin`,
        },
        body: img,
      }
    );
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Image is not uploaded: ${errorText}`);
    }

    const { id } = await res.json();
    // console.log(resJson);
    return { id };
  }

  async getImg(num: number) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/${num}/image`,
      {
        method: "GET",
        // headers: {
        //   "x-api-key": `admin`,
        // },
      }
    );
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error when getting image: ${errorText}`);
    }

    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }

  async delete(id: number) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/image/${id}`,
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

export const manageImgApi = new ManageImgApi();
