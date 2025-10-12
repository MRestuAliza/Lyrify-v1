import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, artist } = req.query;
  const externalApiUrl = `${process.env.NEXT_PUBLIC_LYRICS_API_ENDPOINT}/lyrics?title=${title}&artist=${artist}`;

  try {
    const apiResponse = await fetch(externalApiUrl);
    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      return res.status(apiResponse.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("API route error:", error);
    return res
      .status(500)
      .json({ message: "An internal server error occurred." });
  }
}
