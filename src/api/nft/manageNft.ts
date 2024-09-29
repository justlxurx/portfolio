class ManageNftApi {
  // async mint(num: number, img: FormData) {
  //   const res = await fetch(
  //     `https://estate.hotcode.kz/v1/property/${num}/nft`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "x-api-key": `admin`,
  //       },
  //       body: img,
  //     }
  //   );
  //   if (!res.ok) {
  //     const errorText = await res.text();
  //     throw new Error(`Image for nft is not uploaded: ${errorText}`);
  //   }

  //   const { id } = await res.json();
  //   // console.log(resJson);
  //   return { id };
  // }
  async createNft(num: number, img: FormData) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/${num}/nft/create`,
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
      throw new Error(`Image for nft is not uploaded: ${errorText}`);
    }

    // const { id } = await res.json();
    // // console.log(resJson);
    // return { id };

    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }

  async mintNft(num: number) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/${num}/nft/mint`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `admin`,
        },
      }
    );
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Image for nft is not uploaded: ${errorText}`);
    }

    // const { id } = await res.json();
    // // console.log(resJson);
    // return { id };

    const resJson = await res.json();
    console.log(resJson);
    return resJson;
  }

  async sendMint(num: number, tx: FormData) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/${num}/nft/mint/send`,
      {
        method: "POST",
        headers: {
          "x-api-key": `admin`,
        },
        body: tx,
      }
    );
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Image for nft is not uploaded: ${errorText}`);
    }

    const { id } = await res.json();
    // console.log(resJson);
    return { id };
  }

  async getNft(num: number) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/${num}/nft`,
      {
        method: "GET",
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

  async setOffer(num: number) {
    const res = await fetch(
      `https://estate.hotcode.kz/v1/property/${num}/nft/list`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `admin`,
        },
        // body
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
}

export const manageNftApi = new ManageNftApi();
