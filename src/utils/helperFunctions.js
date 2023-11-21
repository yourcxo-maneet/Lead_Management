import axios from "axios";
export const fetchToken = async () => {
  const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://accounts.zoho.in/oauth/v2/token";
  const clientId = "1000.CHM84B1OABF7R93K73GQFF2X07ZV0J";
  const clientSecret = "9264a70fa4fc02b7c5c93f59daea59b817f108cc7e";
  const refreshToken =
    "1000.f65ff199c4a7437707b3c302c423aea2.a73ad64ad8032f439e7573ddbd1ebefd";

  try {
    const response = await axios.post(url, null, {
      params: {
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "refresh_token",
      },
    });

    console.log("API Response:", response.data);
    return response.data.access_token;
    // Handle the API response as needed
  } catch (error) {
    console.error("API Error:", error);
    // Handle errors
  }
};

export const SendDataToCrm = async (data) => {
  try {
    const zohoAuthToken = await fetchToken();
    const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
    const zohoApiUrl = "https://www.zohoapis.in/crm/v2/upwork_bids";

    const response = await axios.post(
      corsProxyUrl + zohoApiUrl,
      { data },
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${zohoAuthToken}`,
        },
      }
    );

    console.log("API Response:", response.data);
    // Handle the API response as needed
  } catch (error) {
    console.error("API Error:", error);
    // Handle errors
  }
};

export const getZohoToken = async () => {
  try {
    const response = await axios.post("http://localhost:3001/get-zoho-token", {
      refresh_token:
        "1000.f65ff199c4a7437707b3c302c423aea2.a73ad64ad8032f439e7573ddbd1ebefd",
      client_id: "1000.CHM84B1OABF7R93K73GQFF2X07ZV0J",
      client_secret: "9264a70fa4fc02b7c5c93f59daea59b817f108cc7e",
      grant_type: "refresh_token",
    });

    // Assuming the API response has an 'access_token' property
    console.log(response.data.access_token);
  } catch (error) {
    console.error("API Error:", error);
  }
};
