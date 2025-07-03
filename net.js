let latestData = { temp: 0, time: new Date().toISOString() };

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { temp } = req.body;
    latestData = { temp, time: new Date().toISOString() };
    return res.status(200).json({ message: "Data received" });
  }
  if (req.method === "GET") {
    return res.status(200).json(latestData);
  }
  res.status(405).end();
}
