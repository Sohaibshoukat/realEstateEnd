import { connectMongoDB } from "../../lib/mongodb_connect";
import projects_commercial from "../../model/schema4";

connectMongoDB();

export default async function handler(req, res) {
  try {
    const user = await projects_commercial.create(req.body);
    res.redirect("../projects");
    if (!user) {
      return res.json({ code: "Project is not listed" });
    }
  } catch (error) {
    res.status(400).json({ status: "Not able to list a project" });
  }
}
