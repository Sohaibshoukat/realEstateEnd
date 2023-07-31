import { connectMongoDB } from "../../lib/mongodb_connect";
import projects_commercial from "../../model/schema4";

export default async function handler(req, res) {
  //   res.status(200).json({ name: "John Doe" });

  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET request are allowed!" });
    return;
  }

  try {
    await connectMongoDB();
    const tasks = await projects_commercial.find();
    res.status(200).send(tasks);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong!" });
  }
}
