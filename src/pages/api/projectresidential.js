import { connectMongoDB } from "../../lib/mongodb_connect";
import projects_residential from "../../model/schema3";

connectMongoDB();

export default async function handler(req, res) {
  try {
    const user = await projects_residential.create(req.body);
    res.redirect("../projects");
    if (!user) {
      return res.json({ code: "Project is not listed" });
    }
  } catch (error) {
    res.status(400).json({ status: "Not able to list a project" });
  }
}
