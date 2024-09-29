type FilterReq = {
  constructionStatus?: string;
  isOnSecondaryMarket?: true;
  landType?: string;
  limit: number;
  location?: string;
  maxBalconies?: number;
  maxBathrooms?: number;
  maxBedrooms?: number;
  maxCompletionDate?: string;
  maxExpectedAPR?: number;
  maxExpectedIRR?: number;
  maxGarage?: number;
  maxKitchens?: number;
  maxLandArea?: number;
  maxLeaseholdYears?: number;
  maxLivingRooms?: number;
  maxPropertyArea?: number;
  maxRentStartDate?: string;
  maxTerraces?: number;
  maxTokenPrice?: number;
  maxTotalRooms?: number;
  maxTotalTokens?: number;
  minBalconies?: number;
  minBathrooms?: number;
  minBedrooms?: number;
  minCompletionDate?: string;
  minExpectedAPR?: number;
  minExpectedIRR?: number;
  minGarages?: number;
  minKitchens?: number;
  minLandArea?: number;
  minLeaseholdYears?: number;
  minLivingRooms?: number;
  minPropertyArea?: number;
  minRentStartDate?: string;
  minTerraces?: number;
  minTokenPrice?: number;
  minTotalRooms?: number;
  minTotalTokens?: number;
  name?: string;
  occupationStatus?: string;
  offset: number;
  propertyType?: string;
};

class FilteredPropertyAPI {
  private url = import.meta.env.VITE_URL;
  async filter(args: FilterReq) {
    const res = await fetch(`${this.url}/property/filtered`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `admin`,
      },
      body: JSON.stringify(args),
    });

    if (!res.ok) {
      throw new Error("Getting property failed");
    }

    const resJson = await res.json();
    return resJson;
  }
}

export const filteredPropertyAPI = new FilteredPropertyAPI();
