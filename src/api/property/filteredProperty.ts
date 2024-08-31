type FilterReq = {
  constructionStatus?: string;
  isOnSecondaryMarket?: true;
  landType?: string;
  limit: 0;
  location?: string;
  maxBalconies?: 0;
  maxBathrooms?: 0;
  maxBedrooms?: 0;
  maxCompletionDate?: string;
  maxExpectedAPR?: 0;
  maxExpectedIRR?: 0;
  maxGarage?: 0;
  maxKitchens?: 0;
  maxLandArea?: 0;
  maxLeaseholdYears?: 0;
  maxLivingRooms?: 0;
  maxPropertyArea?: 0;
  maxRentStartDate?: string;
  maxTerraces?: 0;
  maxTokenPrice?: 0;
  maxTotalRooms?: 0;
  maxTotalTokens?: 0;
  minBalconies?: 0;
  minBathrooms?: 0;
  minBedrooms?: 0;
  minCompletionDate?: string;
  minExpectedAPR?: 0;
  minExpectedIRR?: 0;
  minGarages?: 0;
  minKitchens?: 0;
  minLandArea?: 0;
  minLeaseholdYears?: 0;
  minLivingRooms?: 0;
  minPropertyArea?: 0;
  minRentStartDate?: string;
  minTerraces?: 0;
  minTokenPrice?: 0;
  minTotalRooms?: 0;
  minTotalTokens?: 0;
  name?: string;
  occupationStatus?: string;
  offset: 0;
  propertyType?: string;
};

class FilteredPropertyAPI {
  async filter(args: FilterReq) {
    const res = await fetch("https://estate.hotcode.kz/v1/property/filtered", {
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
