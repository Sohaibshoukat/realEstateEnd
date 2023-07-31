import { connectMongoDB } from "../../lib/mongodb_connect";
// import main_project from "../../model/schema5";

connectMongoDB();

export default async function handler(req, res) {
  try {
    const user = await main_project.create(req.body);
    res.redirect("../projects");
    if (!user) {
      return res.json({ code: "Project is not listed" });
    }
  } catch (error) {
    res.status(400).json({ status: "Not able to list a project" });
  }
}
