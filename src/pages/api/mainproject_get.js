import { connectMongoDB } from "../../lib/mongodb_connect";
// import main_project from "../../model/schema5";

export default async function handler(req, res) {
  //   res.status(200).json({ name: "John Doe" });

  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only GET request are allowed!" });
    return;
  }

  try {
    await connectMongoDB();
    const tasks = await main_project.find();
    const project_bahria = await main_project.find({
      location: /Bahria Town/i,
      property_city: /Lahore/i,
    });
    const project_DHA = await main_project.find({
      location: /DHA/i,
      property_city: /Lahore/i,
    });
    const project_JT = await main_project.find({
      location: /Johar Town/i,
      property_city: /Lahore/i,
    });
    const project_gulberg = await main_project.find({
      location: /Gulberg/i,
      property_city: /Lahore/i,
    });
    const project_mm = await main_project.find({
      location: /M.M Alam/i,
      property_city: /Lahore/i,
    });
    const project_wt = await main_project.find({
      location: /Wapda Town/i,
      property_city: /Lahore/i,
    });
    const data = {
      tasks,
      project_bahria,
      project_DHA,
      project_JT,
      project_gulberg,
      project_mm,
      project_wt,
    };
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err, msg: "Something went wrong!" });
  }
}
