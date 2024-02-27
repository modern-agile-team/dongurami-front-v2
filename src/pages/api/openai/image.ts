/*
 * Created on Sat Feb 24 2024
 *
 * Copyright (c) 2024 Your Company
 */

import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env[process.env.OPENAI_API_KEY || ""], // This is the default and can be omitted
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt, model = "dall-e-3" } = req.body as {
    prompt: string;
    model: "dall-e-3" | "dall-e-2";
  };

  try {
    const response = await openai.images.generate({
      model: model,
      n: 1,
      prompt,
      response_format: "url",
    });

    const imageData = response.data;

    res.status(200).json({ imageUrl: imageData });
  } catch (error) {
    console.log(error);
    // 에러 처리
    res.status(500).json({ error, message: "DALL·E API 요청 중 오류 발생" });
  }
}
