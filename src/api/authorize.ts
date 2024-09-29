type AuthorizeReq = {
  message: string;
  signature: string;
  wallet_address: string;
};

class AuthorizeAPI {
  private url = import.meta.env.VITE_URL;
  async getNonce(walletAddress: string) {
    const res = await fetch(`${this.url}/user/nonce/${walletAddress}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch nonce for address: ${walletAddress}`);
    }

    const resJson = await res.json();
    return resJson.nonce;
  }

  async authorize(args: AuthorizeReq) {
    const res = await fetch(`${this.url}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    });

    if (!res.ok) {
      throw new Error("Authorization failed");
    }

    const { access_token, refresh_token } = await res.json();
    return { access_token, refresh_token };
  }
}

export const authorizeAPI = new AuthorizeAPI();
