// Function to fetch ISS location
export async function getISSLocation() {
  try {
    const response = await fetch(
      "https://api.wheretheiss.at/v1/satellites/25544.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch ISS location");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching ISS location:", error);
  }
}
