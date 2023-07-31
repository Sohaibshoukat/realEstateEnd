import { connectMongoDB } from "../../lib/mongodb_connect";
import Task from "../../model/test_schema";

export default async function handler(req, res) {
  //   res.status(200).json({ name: "John Doe" });

  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only POST request are allowed!" });
    return;
  }

  const { task, developerName } = req.body;

  try {
    await connectMongoDB();
    Task.create({ task, developerName }).then((data) => {
      console.log(data);
      res.status(201).send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong!" });
  }
}
