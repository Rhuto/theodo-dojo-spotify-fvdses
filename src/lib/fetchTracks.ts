
const apiToken = 'BQBdBHcIG6ClGYdjKmXECMAlFpelPL0Mbp_L7dV1uVyR6rnOH0wavi4GVLsL2QPZgwRrmYom6WPmgT-nySjimBJW64e4oBGwxu4_VRJRIX7REoMlPDHFEbDbOtXawQoYkGpN2hY4Zqf1etKiL-S8fPXh1gVrFAAV2EC01VIgRJjkcDr7VZuZceXG-IPoJF910828vRLMoS4-Vzpikmi9aA';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};
